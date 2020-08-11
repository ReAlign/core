import typeOf from './typeOf';

export default function isArray(o: any): boolean {
  return typeOf(o) === 'array';
}