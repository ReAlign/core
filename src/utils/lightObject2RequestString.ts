import lightObject2KVArray from './lightObject2KVArray';

export default function lightObject2RequestString(lo: Object = {}): string {
  return (lightObject2KVArray(lo) || []).join('&');
};