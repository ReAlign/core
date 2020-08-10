import typeOf from './typeOf';

export default function isObject(o: any): Boolean {
  return typeOf(o) === 'object';
};