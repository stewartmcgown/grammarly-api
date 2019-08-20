// tslint:disable:no-expression-statement
import { GrammarlySession } from '../src/lib/api';

jest.setTimeout(10000);

describe('api tests', () => {
  it('init', () => {
    expect(new GrammarlySession()).toBeInstanceOf(GrammarlySession);
  });

  it('connect', async done => {
    const server = new GrammarlySession();

    await server.analyse('hello worlds!');

    done();
  });
});
