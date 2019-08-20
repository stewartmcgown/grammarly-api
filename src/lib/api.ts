import WebSocket, { MessageEvent } from 'ws';
import { connect } from './connection';
import { buildInitialMessage, buildOTMessage, BaseMessage } from './messages';
import { sleep } from './utils';
import { Auth } from './auth';

/**
 * Manage an interactive Grammarly session.
 */
export class GrammarlySession {
  private connection!: WebSocket;

  private auth!: Auth;

  private get isEstablished(): boolean {
    return (
      this.connection !== undefined &&
      this.connection instanceof WebSocket &&
      this.connection.readyState === WebSocket.OPEN
    );
  }

  public async analyse(text: string): Promise<any> {
    if (!this.isEstablished) {
      await this.establish();
    }

    console.log('Successfully connected to Grammarly!');

    // Resolve on first message from sever.
    // const returnValue: Promise<any> = new Promise(resolve => {});

    this.connection.onmessage = message => {
      const result = this.handleMessage(message.data);
      if (result.done) {
        // resolve(result);
      }
    };

    this.connection.send(JSON.stringify(buildOTMessage(text)));

    console.log('Sent text to Grammarly!');

    await sleep(1000000);
    // return returnValue;
    return {};
  }

  /**
   * Establish communication with the Grammarly API.
   */
  private async establish(): Promise<BaseMessage> {
    console.log('Re-establishing connection.');

    const { connection, auth } = await connect();

    this.connection = connection;
    this.auth = auth;

    this.connection.send(JSON.stringify(buildInitialMessage()));

    console.log('Sent establishing message');

    // Temp handler for first message
    const returnValue: Promise<BaseMessage> = new Promise((resolve, reject) => {
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

    return returnValue;
  }

  /**
   * Receive a message and forward it on the appropriate handler.
   *
   * @param message a message
   */
  private handleMessage(message: any): any {
    console.log(message);
    return message;
  }
}
