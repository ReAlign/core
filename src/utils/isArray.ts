import typeOf from './typeOf';

export default function isArray(o: any): Boolean {
  return typeOf(o) === 'array';
};