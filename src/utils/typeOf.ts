export default function typeOf(o: any): string {
  return ({}).toString.call(o).slice(8, -1).toLowerCase();
}