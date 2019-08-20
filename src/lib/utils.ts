export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const cookieToObject = (cookie: string, splitter = ';') =>
  Object.fromEntries(cookie.split(splitter).map(x => x.split('=')));
