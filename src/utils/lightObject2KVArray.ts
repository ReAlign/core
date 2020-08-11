export default function lightObject2KVArray(lo: Object = {}, encode: boolean = false): string[] {
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
};