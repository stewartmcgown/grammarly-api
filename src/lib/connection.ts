import WebSocket from 'ws';

export const CONSTANTS = {
  origin: 'chrome-extension://kbfnbcaeplbcioakkpcpgfkobkghlhen',
  endpoint: 'wss://capi.grammarly.com/freews',
  host: 'capi.grammarly.com'
};

export interface Headers extends StringObject {
  'User-Agent': string;
  Host: string;
  Upgrade: string;
  Connection: string;
  Pragma: string;
  'Cache-Control': string;
  'Accept-Encoding': string;
  'Accept-Language': string;
  // Cookie: string;
}

export interface CookieOptions {
  gnar_containerId?: string;
  grauth?: string;
  'csrf-token'?: string;
  funnelType?: string;
  browser_info?: string;
  redirect_location?: string;
  experiment_groups?: string;
}

export function buildCookieString(pairs: CookieOptions): string {
  return Object.keys(pairs).reduce(
    (str: string, key: string) => str + key + '=' + (pairs as any)[key] + ';',
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
    Host: CONSTANTS.host,
    Pragma: 'no-cache',
    Upgrade: 'websocket',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
  };
}

/**
 * Create the options needed for connecting to the remote Grammarly host.
 */
export function buildWSOptions(): WebSocket.ClientOptions {
  const cookie = buildCookieString({
    browser_info: 'extension_chrome'
  });

  return {
    headers: buildHeaders(cookie),
    origin: CONSTANTS.origin
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
      url || CONSTANTS.endpoint,
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
