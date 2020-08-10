export default function typeOf(o: any): String {
  return ({}).toString.call(o).slice(8, -1).toLowerCase();
};