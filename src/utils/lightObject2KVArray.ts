export default function lightObject2KVArray(lo: Object = {}): string[] {
  const arr = [];
  const keys = Object.keys(lo);

  if (keys.length) {
    keys.forEach(k => {
      arr.push(`${k}=${lo[k]}`);
    });
  }

  return arr;
};