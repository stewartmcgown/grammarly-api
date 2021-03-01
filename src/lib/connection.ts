import WebSocket from 'ws';
import {
  Auth,
  buildAuth,
  buildAuthWithUserTokens,
  getAuthCookies,
  RequiredAuth
} from './auth';
import env from './env';

export interface Headers extends StringObject {
  'User-Agent': string;
  Host: string;
  Upgrade: string;
  Connection: string;
  Pragma: string;
  'Cache-Control': string;
  'Accept-Encoding': string;
  'Accept-Language': string;
  Origin: string;
  Cookie: string;
}

export interface CookieOptions extends Auth {
  funnelType: 'free';
  browser_info: string;
  experiment_groups?: string;
  firefox_freemium?: 'true' | 'false';
}

export interface Connection {
  connection: WebSocket;
  auth: Auth;
}

export function buildCookieString(pairs: CookieOptions): string {
  return Object.keys(pairs).reduce(
    (str: string, key: string) => str + key + '=' + (pairs as any)[key] + '; ',
    ''
  );
}

/**
 * Pretty generic headers for connecting
 *
 * @param Cookie a string cookie, used for auth
 */
export function buildWebsocketHeaders(Cookie: string): Headers {
  return {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    Connection: 'Upgrade',
    Cookie,
    Host: env.host,
    Origin: env.origin.firefox,
    Pragma: 'no-cache',
    Upgrade: 'websocket',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
  };
}

/**
 * Create the options needed for connecting to the remote Grammarly host.
 */
export function buildWSOptions(auth: Auth, agent: any): WebSocket.ClientOptions {
  const cookie = buildCookieString(getAuthCookies(auth));

  return {
    headers: buildWebsocketHeaders(cookie),
    origin: env.origin.firefox,
    agent
  };
}

/**
 * Connect to the remote WebSocket
 *
 * @param userAuth a custom user auth object
 */
export function connect(userAuth?: RequiredAuth, agent?: any): Promise<Connection> {
  return new Promise<Connection>(async (resolve, reject) => {
    const auth = userAuth
      ? buildAuthWithUserTokens(userAuth)
      : await buildAuth();

    const server = new WebSocket(env.endpoint, buildWSOptions(auth, agent));

    server.onopen = () => {
      resolve({
        connection: server,
        auth
      });
    };

    server.onerror = err => {
      reject(err);
      server.close();
    };
  });
}
