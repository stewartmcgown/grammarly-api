import WebSocket from 'ws';
import { connect } from './connection';
import { buildInitialMessage, buildOTMessage } from './messages';

/**
 * Manage an interactive Grammarly session.
 */
export class GrammarlySession {
  private connection!: WebSocket;

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
      console.log('Successfully connected to Grammarly!');
    }

    // Resolve on first message from sever.
    const returnValue: Promise<any> = new Promise(resolve => {
      this.connection.on('message', message => {
        const handledMessage = this.handleMessage(message);

        resolve(handledMessage);
      });
    });

    this.connection.send(JSON.stringify(buildOTMessage(text)));

    console.log('Sent text to Grammarly!');

    return returnValue;
  }

  /**
   * Establish communication with the Grammarly API.
   */
  private async establish(): Promise<void> {
    this.connection = await connect();

    this.connection.send(JSON.stringify(buildInitialMessage()));

    // Temp handler for first message
    const returnValue: Promise<void> = new Promise(resolve => {
      this.connection.on('message', () => {
        this.connection.onmessage = () => undefined; // Garbage collect
        resolve();
      });
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
  }
}
