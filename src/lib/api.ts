import consola from 'consola';
import WebSocket, { MessageEvent } from 'ws';
import { connect } from './connection';
import { BaseMessage, buildInitialMessage, buildOTMessage } from './messages';
import { FinishedResponse, ProblemResponse } from './responses';

/**
 * The completed result from a Grammarly analysis session
 */
export interface GrammarlyResult {
  alerts: ProblemResponse[];

  result: FinishedResponse;
}

/**
 * Manage an interactive Grammarly session.
 */
export class Grammarly {
  private connection!: WebSocket;

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
    timeout: number = 30000
  ): Promise<GrammarlyResult> {
    if (!this.isEstablished) {
      await this.establish();
    }

    consola.debug('Successfully connected to Grammarly!');

    return new Promise((resolve, reject) => {
      // Send the text now that we have
      this.connection.send(JSON.stringify(buildOTMessage(text)));
      consola.debug('Sent text to Grammarly!');

      const alerts: ProblemResponse[] = [];

      /**
       * This message handler will listen for all corrections from the server. Once it receives
       * the {@link CompleteMessage} object the promise will resolve.
       */
      this.connection.onmessage = (message: MessageEvent) => {
        const parsed = JSON.parse(message.data.toString());

        // Message is probably a correction
        if (parsed.action === 'alert') {
          const alert = parsed as ProblemResponse;

          alerts.push(alert);
        } else if (parsed.action === 'finished') {
          const result = parsed as FinishedResponse;

          resolve({
            alerts,
            result
          });

          this.connection.close();
        }
      };

      // Handle timeout
      const interval = setInterval(() => {
        reject(new Error('Still waiting for results before timeout'));
        clearInterval(interval);
      }, timeout);
    });
  }

  /**
   * Establish communication with the Grammarly API.
   *
   * @returns the initial response message
   * @throws {Object} if cookies are bad
   */
  private async establish(): Promise<BaseMessage> {
    consola.debug('Re-establishing connection.');

    const { connection } = await connect();

    this.connection = connection;

    this.connection.send(JSON.stringify(buildInitialMessage()));

    consola.debug('Sent establishing message');

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
