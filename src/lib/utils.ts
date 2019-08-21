export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function fromEntries(iterable: any): any {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}

export const cookieToObject = (cookie: string, splitter = ';') =>
  Object.fromEntries(cookie.split(splitter).map(x => x.split('=')));
