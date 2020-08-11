import typeOf from './typeOf';

export default function isObject(o: any): boolean {
  return typeOf(o) === 'object';
}