import WebSocket from 'ws';
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

export interface CookieOptions {
  gnar_containerId: string;
  grauth: string;
  'csrf-token': string;
  funnelType: 'free';
  browser_info: string;
  redirect_location: string;
  experiment_groups?: string;
  firefox_freemium?: 'true' | 'false';
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
export function buildHeaders(Cookie: string): Headers {
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
 * Generate a random browser string
 *
 * TODO: Get list of supported browser strings
 */
export function generateBrowserString(): string {
  return 'FIREFOX:67:COMPUTER:SUPPORTED:FREEMIUM:MAC_OS_X:MAC_OS_X';
}

/**
 * Create the options needed for connecting to the remote Grammarly host.
 */
export function buildWSOptions(): WebSocket.ClientOptions {
  const cookie = buildCookieString({
    grauth:
      'AABG0KK96Bd40dGHl8T3vHw_1J-DZoje6K3SUb2FZqy7C5PibVmlGFj0xjyRh8xKRSjlYObWZsmU7uhv',
    gnar_containerId: 'mrrq95v5ogec702',
    'csrf-token': 'AABG0PO964qVN5v+1KpTbi1SoJS0+EWa1Ag2Ow',
    firefox_freemium: 'true',
    funnelType: 'free',
    browser_info: generateBrowserString(),
    redirect_location:
      'eyJ0eXBlIjoiIiwibG9jYXRpb24iOiJodHRwczovL3d3dy5ncmFtbWFybHkuY29tL2FmdGVyX2luc3RhbGxfcGFnZT9leHRlbnNpb25faW5zdGFsbD10cnVlJnV0bV9tZWRpdW09c3RvcmUmdXRtX3NvdXJjZT1maXJlZm94In0='
  });

  console.log(cookie);
  return {
    headers: buildHeaders(cookie),
    origin: env.origin.firefox
  };
}

/**
 * Connect to the remote WebSocket
 *
 * @param url url of the host
 * @param options options for connection
 */
export function connect(
  url?: string,
  options?: WebSocket.ClientOptions
): Promise<WebSocket> {
  return new Promise((resolve, reject) => {
    const server = new WebSocket(
      url || env.endpoint,
      options || buildWSOptions()
    );

    server.onopen = () => {
      resolve(server);
    };
    server.onerror = err => {
      reject(err);
    };
  });
}
