import WebSocket from 'ws';
import { connect } from '../src/lib/connection';

describe('connection tests', () => {
  it('connect to the websocket server', async () => {
    const { connection } = await connect();

    expect(connection.readyState).toEqual(WebSocket.OPEN);

    connection.close();
  });
});
