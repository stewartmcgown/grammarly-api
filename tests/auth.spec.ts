import { buildAuth } from '../src/lib/auth';

describe('auth', () => {
  it('builder should contain values', () => {
    const auth = buildAuth();

    expect(typeof auth.grauth).toBe('string');
    expect(typeof auth.gnar_containerId).toBe('string');
    expect(auth.gnar_containerId.length).toBe(15);
  });
});
