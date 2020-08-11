import { IF_OBJ } from './../../src-types/normal';

export default function lightObject2KVArray(lo: IF_OBJ = {}, encode: boolean = false): string[] {
  const arr = [];
  const keys = Object.keys(lo);

  if (keys.length) {
    keys.forEach(k => {
      let val = lo[k];
      if(encode) {
        val = encodeURIComponent(val);
      }
      arr.push(`${k}=${val}`);
    });
  }

  return arr;
}