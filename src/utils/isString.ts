import typeOf from './typeOf';

export default function isString(o: any): boolean {
  return typeOf(o) === 'string';
}