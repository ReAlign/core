import typeOf from './typeOf';

export default function isFunction(o: any): boolean {
  return typeOf(o).indexOf('function') !== -1;
}