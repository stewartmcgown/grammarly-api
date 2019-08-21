import fetch from 'node-fetch';
import { buildCookieString, CookieOptions } from './connection';
import env from './env';
import { cookieToObject } from './utils';

//
// Interfaces
//
export interface BrowserStringOptions {
  browser?: 'firefox' | 'chrome';

  system: 'mac' | 'windows';
}

/**
 * Canonical Auth object that contains all the authenitcation tokens needed
 * to access Grammarly.
 */
export interface Auth {
  gnar_containerId: string;
  grauth?: string;
  'csrf-token'?: string;
  redirect_location: string;
}

/**
 * Parsed values from the 'set-cookies' headers
 */
export interface RequiredAuth {
  grauth: string;

  'csrf-token': string;
}

export interface AuthHostOrigin {
  Host: string;
  Origin: string;
}

//
// Functions
//

/**
 * Generates a containerId for use in the cookie request. Must be the same as the
 * one sent to generate grauth.
 */
export function generateContainerId(): string {
  const r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  /**
   * Alphanumeric random string implementation
   *
   * @see Grammarly-bg.js:11260
   * @author Grammarly Inc.
   */
  const alphanumeric = function e(t = 0, n = ''): string {
    if (t <= 0) {
      return n;
    }
    const o = Math.floor(Math.random() * (r.length - 1));
    return e(t - 1, n + r.charAt(o));
  };

  return alphanumeric(15);
}

/**
 * Generate a random browser string
 *
 * TODO: Get list of supported browser strings
 */
export function generateBrowserString(options?: BrowserStringOptions): string {
  return 'FIREFOX:67:COMPUTER:SUPPORTED:FREEMIUM:MAC_OS_X:MAC_OS_X' || options;
}

/**
 * Authentication with Grammarly requires a number of Cookie parameters to
 * be correctly set, namely the ones in {@link CookieOptions}. You can get most
 * of these through a request to the free endpoint:
 *
 * ```js
 * fetch('https://auth.grammarly.com/v3/user/oranonymous?app=firefoxExt&containerId=mrrq95v5ogec702')
 * ```
 */
export function getAuthCookies(auth: Auth): CookieOptions {
  return {
    ...auth,
    firefox_freemium: 'true',
    funnelType: 'free',
    browser_info: generateBrowserString()
  };
}

export function generateAuthURL(
  user: string = 'oranonymous',
  app: string = 'firefoxExt',
  containerId: string = generateContainerId()
): string {
  return `https://auth.grammarly.com/v3/user/${user}?app=${app}&containerId=${containerId}`;
}

/**
 * Redirect locations aren't tied to a session. They are base64 encoded objects.
 *
 * Example:
 * ```json
 * {
 *  "type": "",
 *  "location":"https://www.grammarly.com/after_install_page?extension_install=true&utm_medium=store&utm_source=firefox"
 * }
 * ```
 *
 */
export function generateRedirectLocation(browser = 'firefox'): string {
  return Buffer.from(
    JSON.stringify({
      type: '',
      location: `https://www.grammarly.com/after_install_page?extension_install=true&utm_medium=store&utm_source=${browser}`
    })
  ).toString('base64');
}

export function buildAuthHeaders(
  Cookie: string,
  containerId: string,
  Origin: string = env.origin.firefox,
  Host: string = 'auth.grammarly.com'
): any {
  return {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    Cookie,
    Host,
    Origin,
    Pragma: 'no-cache',
    'X-Container-Id': containerId,
    'X-Client-Version': '8.852.2307',
    'X-Client-Type': 'extension-firefox',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
  };
}

/**
 * Get the values of the auth response cookies
 *
 * TODO: May have to allow for expiry time extraction later
 *
 * @param cookies array of cookies to parse
 */
export function parseResponseCookies(cookies: string[]): RequiredAuth {
  const { grauth } = cookieToObject(cookies.find(c =>
    c.includes('grauth=')
  ) as string);

  const token = cookieToObject(cookies.find(c =>
    c.includes('csrf-token=')
  ) as string)['csrf-token'];

  return {
    grauth,
    'csrf-token': token
  };
}

/**
 * Requests auth information from Grammarly
 *
 * @returns auth object that contains information about this session. Auth
 * objects are used in both initial Cookie transfer and are occasionally sent
 * over the websocket connection.
 */
export async function buildAuth(
  origin?: string,
  host?: string,
  authUrl?: string
): Promise<Auth> {
  const gnar_containerId = generateContainerId();
  const redirect_location = generateRedirectLocation();

  const response = await fetch(authUrl || generateAuthURL(), {
    headers: buildAuthHeaders(
      buildCookieString({
        ...getAuthCookies({
          gnar_containerId,
          redirect_location
        })
      }),
      gnar_containerId,
      origin,
      host
    )
  });

  if (!response.ok) {
    throw new Error('Unable to create a session with these credentials.');
  }

  const cookies = parseResponseCookies(response.headers.raw()['set-cookie']);

  return {
    gnar_containerId,
    grauth: cookies.grauth,
    'csrf-token': cookies['csrf-token'],
    redirect_location
  };
}

export function buildAuthWithUserTokens(userTokens: RequiredAuth): Auth {
  return {
    ...userTokens,
    gnar_containerId: generateContainerId(),
    redirect_location: generateRedirectLocation()
  };
}
