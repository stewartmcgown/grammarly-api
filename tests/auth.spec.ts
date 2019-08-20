import {
  buildAuth,
  generateContainerId,
  parseResponseCookies
} from '../src/lib/auth';

describe('auth', () => {
  it('parse cookies', () => {
    const csrf = 'AABG0MUlbrzbdHX2H1dB4UScLic+ZtVggN/1JA';
    const grauth =
      'AABG0Jz7EnNps-kZ3va4TIEgVb4c22d0VZHmeL3Boz3nuMch-h224lRY2TRcLCuS-tMoFMMeTmY2YxYY';

    const cookies = [
      `grauth=${grauth};Path=/;Domain=.grammarly.com;Expires=Wed, 19-Aug-2020 20:38:31 GMT;Max-Age=31536000;Secure;HttpOnly`,
      `csrf-token=${csrf};Path=/;Domain=.grammarly.com;Expires=Wed, 19-Aug-2020 20:38:31 GMT;Max-Age=31536000;Secure`
    ];

    const parsed = parseResponseCookies(cookies);

    expect(parsed.grauth).toEqual(grauth);
    expect(parsed['csrf-token']).toEqual(csrf);
  });

  it('fetch auth info', async () => {
    const auth = await buildAuth();

    expect(typeof auth.grauth).toBe('string');
    expect(typeof auth.gnar_containerId).toBe('string');
  });

  it('generate container id', () => {
    expect(generateContainerId().length).toBe(15);
  });
});
