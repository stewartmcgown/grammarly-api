<p align="center">
  <h1 align="center">Unofficial Grammarly API Client</h1>
</p>
<p align="center">
  <img src="https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101" />
  <a href="https://travis-ci.com/stewartmcgown/grammarly-api"><img src="https://travis-ci.com/stewartmcgown/grammarly-api.svg?token=Syey35s3hTFfwJM2x8gp&branch=master" /></a>
  <a href="https://badge.fury.io/js/%40stewartmcgown%2Fgrammarly-api"><img src="https://badge.fury.io/js/%40stewartmcgown%2Fgrammarly-api.svg" alt="npm version" height="18"></a>
</p>

## Installation

```bash
npm i -S @stewartmcgown/grammarly-api
```

Or download the repo and `npm run build`.

## Usage

### Analyse Text

```ts
import { Grammarly } from 'grammarly-api';

const text = `When we have shuffled off this mortal coil,
Must give us pause - their's the respect
That makes calamity of so long life.`;

const free = new Grammarly();

const results = await free.analyse(text);
```

Allows you to get access to the results that Grammarly on the web would provide you with.

This library uses a Promise-based return system, so you will receive all the corrections in a single array, like so:

```js
{
  alerts: [
    {
      point: 'NoCommaWithInterj',
      transforms: [Array],
      title: 'Missing punctuation after interjection',
      ...
      action: 'alert',
    }
  ],
  result: {
    ...
    action: 'finished'
  }
}
```

### Correct results

```js
import { correct, Grammarly } from 'gramarly-api';

const text = `...`;

const { corrected } = await new Grammarly().analyse(text).then(correct);
```

Will extract the correct text from the results.

### Free Plagiarism Checker

```js
import { plagiarism } from 'grammarly-api';

const text = `...`;

const { hasPlagiarism } = await plagiarism();
```

Doesn't return any details, just tells you if there was Plagiarism at all. The tests for this module does a 'best of three' run, allowing the test to pass if at least one of three checks raises plagiarism issues.

### Authenticate to Premium (_coming soon!_)

```ts
const premium = new Grammarly({
  username: 'billy',
  password: 'billy is great'
});

premium.analyse('hello worlds');
```

Premium gives you access to plagiarism checking.

## API

The Grammarly API communicates over **websockets**. You can see these connections being made in the devtools panel of your favourite browser. You can use Node to connect to this websocket server by pretending to be
a browser extension.

### Submitting Text

Text is submitted using the following format:

````js
{
  action: 'submit_ot',

  /**
   * An array of operational transform messages.
   *
   * Messages are prefixed with '+0:0:' and suffixed with ':0'
   *
   * An Example submission:
   * ```js
   * {
   *  ch: ['+0:0:This is the text to submit:0']
   * }
   * ```
   */
  ch: string[],

  ...
}
````

### Alerts

Once you've created a session on the socket, Grammarly will start sending you corrections. The current behaviour is to wait until we receive an `action: finished` message before resolving the promise with the results.

Here is an example of an alert warning us about some mistakes in the phrase 'hello their!

```js
{
      point: 'NoCommaWithInterj',
      transforms: [Array],
      title: 'Missing punctuation after interjection',
      details: '<p>An interjection is a word (<i>yes, hey, gosh</i>) or short phrase (<i>oh my, my goodness</i>) that expresses some emotion and is not grammatically related to the sentence that follows. The interjection is followed by an exclamation point for strong emotions (<i>Wow! I won the lottery!</i>) and a comma for a weaker emotion (<i>Wow, that is news to me.</i>).\n',
      explanation: '<p>It appears that you are missing a punctuation mark after the interjection <b>hello</b>. Consider adding a comma.\n',
      examples: '<p><span class="red">Incorrect: <b>Well</b> I am not so sure about that.</span><br/><span class="green">Correct: <b>Well,</b> I am not so sure about that.</span><br/><p><span class="red">Incorrect: <b>No</b> I did not take out the trash.</span><br/><span class="green">Correct: <b>No,</b> I did not take out the trash.</span><br/><p><span class="red">Incorrect: <b>Aw</b> that kitten is cute.</span><br/><span class="green">Correct: <b>Aw,</b> that kitten is cute.</span><br/>',
      todo: 'add the punctuation',
      handbookLink: '',
      sentence_no: 0,
      free: true,
      category: 'BasicPunct',
      begin: 5,
      end: 5,
      text: '',
      group: 'Punctuation',
      pname: 'Punctuation/BasicPunct/NoCommaWithInterj/InterjComma',
      rev: 0,
      highlightBegin: 0,
      highlightEnd: 5,
      highlightText: 'hello',
      replacements: [Array],
      transformJson: [Object],
      impact: 'critical',
      extra_properties: [Object],
      cardLayout: [Object],
      categoryHuman: 'Comma Misuse within Clauses',
      cost: 1,
      action: 'alert',
      id: 3
    }
```

Premium alerts are actually returned over the `freews` socket. So you can view them along with their transformations just as with free corrections.

### Providing your own authentication

You can use your own tokens to connect to the socket. They must adhere to the `Auth` interface, like so:

```js
const premium = new Grammarly({
  auth: {
    grauth: 'xxxxxxxxx',
    'csrf-token': 'xxxxxxxxxx'
  }
});
```

Your own personal AuthTokens can be found by inspecting the Firefox extension and looking at the `Cookies` tab.
