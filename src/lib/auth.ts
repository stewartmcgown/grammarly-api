import { CookieOptions } from './connection';

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
  grauth: string;
  'csrf-token': string;
  redirect_location: string;
}

//
// Functions
//

/**
 * Alphanumeric random string implementation
 *
 * @see Grammarly-bg.js:11260
 */
export function generateContainerId(): string {
  const r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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
  return 'FIREFOX:67:COMPUTER:SUPPORTED:FREEMIUM:MAC_OS_X:MAC_OS_X';
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
) {
  return `https://auth.grammarly.com/v3/user/${user}?app=${app}&containerId=${containerId}`;
}

/**
 * Creates an auth object that contains information about this session. Auth
 * objects are used in both initial Cookie transfer and are occasionaly sent
 * over the websocket connection.
 */
export function buildAuth(): Auth {
  return {
    gnar_containerId: 'slwk95vbmk68782' /*generateContainerId()*/,
    grauth:
      'AABG0CRBQd0zRPASwxrmurVjQCcDTPllAR_LtFGiX3BsdXMPm6CoOGPH0OwVJfV7yvZKJaLHLCxoJ0Qy',
    'csrf-token': 'AABG0N1WlD+EDVclsEHx2S32lMbbbM3AFVPTgQ',
    redirect_location:
      'eyJ0eXBlIjoiIiwibG9jYXRpb24iOiJodHRwczovL3d3dy5ncmFtbWFybHkuY29tL2FmdGVyX2luc3RhbGxfcGFnZT9leHRlbnNpb25faW5zdGFsbD10cnVlJnV0bV9tZWRpdW09c3RvcmUmdXRtX3NvdXJjZT1maXJlZm94In0='
  };
}
