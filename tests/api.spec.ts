// tslint:disable:no-expression-statement
import { Grammarly } from '../src/lib/api';

jest.setTimeout(10000);

describe('api tests', () => {
  it('init', () => {
    expect(new Grammarly()).toBeInstanceOf(Grammarly);
  });

  it('analyse a phrase with a single mistake', async done => {
    const server = new Grammarly();

    const response = await server.analyse('hello worlds!');
    // a hidden alert as we start with hello instead of Hello
    // We should use a comma after hello
    expect(response.alerts.length).toBe(2);

    done();
  });

  it('analyse a phrase with multiple mistakes', async done => {
    const server = new Grammarly();

    const response = await server.analyse('Hello their, my naem is John.');

    expect(response.alerts.length).toBeGreaterThan(1);

    done();
  });
  
  it('use a different dialect', async done => {
    const server = new Grammarly();

    const response = await server.analyse('Hello.', 5000, 'american');

    expect(response.result.dialect).toBe('american');
    
    done();
  });
});
