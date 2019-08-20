<p align="center">
  <img src="https://www.grammarly.com/press/media-resources/docs/logo-grammarly.png" />
  <h1 align="center">Unofficial API Client</h1>
</p>
<p align="center">
  <img src="https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101" />
  <img src="https://travis-ci.com/stewartmcgown/grammarly-api.svg?token=Syey35s3hTFfwJM2x8gp&branch=master" />
</p>

## Usage

### Analyse Text

```ts
const text = `When we have shuffled off this mortal coil,
Must give us pause - their's the respect
That makes calamity of so long life.`;

const result = await new Grammarly().analyse(text);
```

Allows you to get access to the results that Grammarly on the web would provide you with.

### Authenticate to Premium

```ts
const premium = new Grammarly({
  username: 'billy',
  password: 'billy is great'
});

premium.analyse('hello worlds');
```

Premium gives you access to plagiarism checking and advanced grammar hints.
