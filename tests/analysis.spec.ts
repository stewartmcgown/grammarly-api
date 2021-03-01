import { correct, Grammarly } from '../src/';

jest.setTimeout(10000);

describe('further analysis of results', () => {
  it('corrects a result', async () => {
    const text = `When we have shuffled off this mortal coil,
  Must giev us pause - their's the respect
  That makes clamity of so long life.`;

    const { corrected } = await new Grammarly().analyse(text).then(correct);

    const correctText = `When we have shuffled off this mortal coil,
  Must give us pause - their's the respect
  That makes calamity of so long life.`;

    expect(corrected).toEqual(correctText);
  });
});
