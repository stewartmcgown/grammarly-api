import WebSocket, { MessageEvent } from 'ws';
import { connect } from './connection';
import {
  buildInitialMessage,
  buildOTMessage,
  BaseMessage,
  AlertMessage,
  FinishedMessage
} from './messages';
import { sleep } from './utils';
import { Auth } from './auth';

/**
 * The completed result from a Grammarly analysis session
 */
export interface GrammarlyResult {
  alerts: AlertMessage[];

  result: FinishedMessage;
}

/**
 * Manage an interactive Grammarly session.
 */
export class Grammarly {
  private connection!: WebSocket;

  private auth!: Auth;

  private get isEstablished(): boolean {
    return (
      this.connection !== undefined &&
      this.connection instanceof WebSocket &&
      this.connection.readyState === WebSocket.OPEN
    );
  }

  /**
   * Analyse some text
   *
   * @param text text to analyse
   * @param timeout how long to wait before we stop collecting results
   */
  public async analyse(
    text: string,
    timeout: number = 15000
  ): Promise<GrammarlyResult> {
    if (!this.isEstablished) {
      await this.establish();
    }

    console.log('Successfully connected to Grammarly!');

    return new Promise((resolve, reject) => {
      // Send the text now that we have
      this.connection.send(JSON.stringify(buildOTMessage(text)));
      console.log('Sent text to Grammarly!');

      const alerts: AlertMessage[] = [];

      /**
       * This message handler will listen for all corrections from the server. Once it receives
       * the {@link CompleteMessage} object the promise will resolve.
       */
      this.connection.onmessage = (message: MessageEvent) => {
        const parsed = JSON.parse(message.data.toString());

        // Message is probably a correction
        if (parsed.action === 'alert') {
          const alert = parsed as AlertMessage;

          alerts.push(alert);
        } else if (parsed.action === 'finished') {
          const result = parsed as FinishedMessage;

          resolve({
            alerts,
            result
          });

          this.connection.close();
        }
      };
    });
  }

  /**
   * Establish communication with the Grammarly API.
   *
   * @returns the initial response message
   * @throws {Object} if cookies are bad
   */
  private async establish(): Promise<BaseMessage> {
    console.log('Re-establishing connection.');

    const { connection, auth } = await connect();

    this.connection = connection;
    this.auth = auth;

    this.connection.send(JSON.stringify(buildInitialMessage()));

    console.log('Sent establishing message');

    return new Promise((resolve, reject) => {
      /**
       * The first message should be in this form:
       *
       * ```js
       * { sid: 0, action: 'start', id: 0 }
       * ```
       *
       *  Receiving this, without another 'error' message, means the connection is
       *  ready to go and we can start sending text.
       */
      this.connection.onmessage = (message: MessageEvent) => {
        const parsedMessage = JSON.parse(
          message.data.toString()
        ) as BaseMessage;

        if (parsedMessage && parsedMessage.action === 'start') {
          this.connection.onmessage = () => null; // Garbage collect
          resolve(parsedMessage as BaseMessage);
        } else {
          reject(parsedMessage);
        }
      };
    });
  }
}
