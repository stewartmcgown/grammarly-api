import { plagiarism } from '../src';
import { sleep } from '../src/lib/utils';

describe('finds plagiarism', () => {
  const NUM_CHECKS = 3;

  it('detect tom sawyer', async () => {
    const sawyer = `"TOM!"

    No answer.

    "TOM!"

    No answer.

    "What's gone with that boy,  I wonder? You TOM!"

    No answer.

    The old lady pulled her spectacles down and looked over them about the
    room; then she put them up and looked out under them. She seldom or
    never looked THROUGH them for so small a thing as a boy; they were her
    state pair, the pride of her heart, and were built for "style," not
    service--she could have seen through a pair of stove-lids just as well.
    She looked perplexed for a moment, and then said, not fiercely, but
    still loud enough for the furniture to hear:

    "Well, I lay if I get hold of you I'll--"

    She did not finish, for by this time she was bending down and punching
    under the bed with the broom, and so she needed breath to punctuate the
    punches with. She resurrected nothing but the cat.

    "I never did see the beat of that boy!"

    She went to the open door and stood in it and looked out among the
    tomato vines and "jimpson" weeds that constituted the garden. No Tom.
    So she lifted up her voice at an angle calculated for distance and
    shouted:

    "Y-o-u-u TOM!"`;

    expect.assertions(2);

    for (let i = 0; i < NUM_CHECKS; i++) {
      const result = await plagiarism(sawyer);

      if (result.hasPlagiarism !== true) continue;

      expect(result.hasPlagiarism).toEqual(true);
      expect(result.count).toBeGreaterThanOrEqual(1);

      break;
    }

  });
});
