export default function allChinese(str: string = ''): boolean {
  const exp = /^[\u4e00-\u9fa5]+$/ig;
  return new RegExp(exp).test(str.replace(/[\r|\n|\t| ]/ig, ''));
}