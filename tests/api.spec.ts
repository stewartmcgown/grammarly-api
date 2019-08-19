// tslint:disable:no-expression-statement
import { GrammarlySession } from '../src/lib/api';
import { sleep } from '../src/lib/utils';

describe('api tests', () => {
  it('init', () => {
    expect(new GrammarlySession()).toBeInstanceOf(GrammarlySession);
  });

  it('connect', async done => {
    const server = new GrammarlySession();

    server.analyse('hello worlds!');

    await sleep(5000);

    done();
  });
});
