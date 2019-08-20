import { buildAuth, generateContainerId } from '../src/lib/auth';

describe('auth', () => {
  it('builder should contain values', () => {
    const auth = buildAuth();

    expect(typeof auth.grauth).toBe('string');
    expect(typeof auth.gnar_containerId).toBe('string');
  });

  it('generate container id', () => {
    expect(generateContainerId().length).toBe(15);
  });
});
