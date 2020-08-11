import { IF_OBJ } from './../../src-types/normal';

import lightObject2KVArray from './lightObject2KVArray';

export default function lightObject2RequestString(lo: IF_OBJ = {}): string {
  return (lightObject2KVArray(lo, true) || []).join('&');
}