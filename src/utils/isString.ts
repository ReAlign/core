import typeOf from './typeOf';

export default function isString(o: any): Boolean {
  return typeOf(o) === 'string';
};