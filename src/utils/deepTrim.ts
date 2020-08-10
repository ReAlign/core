import isObject from './isObject';
import isArray from './isArray';
import isString from './isString';

const u = {
  main(obj: any): any {
    if (isObject(obj) || isArray(obj)) {
      u.perform2ObjectOrArray(obj);
    } else if (isString(obj)) {
      obj = u.perform2String(obj);
    }

    return obj;
  },
  perform2ObjectOrArray(obj: Object = {}): void {
    Object.keys(obj).forEach((k) => {
      const x = u.main(obj[k]);
      if(isString(x)) {
        obj[k] = x;
      }
    });
  },
  perform2String(str: string = ''): string {
    return str.trim();
  },
};

export default function deepTrim(obj: any): any {
  return u.main(obj);
}