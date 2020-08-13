export default function containsChinese(str: string = ''): boolean {
  return escape(str).indexOf('%u') !== -1;
}