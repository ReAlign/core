export default function url(url: string = ''): boolean {
  const exp = /^(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?)/;
  return new RegExp(exp).test(url);
}