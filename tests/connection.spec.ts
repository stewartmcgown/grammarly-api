import WebSocket from 'ws';
import { connect } from '../src/lib/connection';

describe('connection tests', () => {
  it('connect to the websocket server', async () => {
    const server = await connect();

    expect(server.readyState).toEqual(WebSocket.OPEN);
  });
});
