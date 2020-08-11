import { IF_OBJ } from './../../src-types/normal';

import isObject from './isObject';
import isArray from './isArray';
import isString from './isString';

const _ = {
  main(obj: any): void {
    if (isObject(obj) || isArray(obj)) {
      _.perform2ObjectOrArray(obj);
    } else if (isString(obj)) {
      obj = _.perform2String(obj);
    }

    return obj;
  },
  perform2ObjectOrArray(obj: IF_OBJ = {}): void {
    Object.keys(obj).forEach((k) => {
      const x = _.main(obj[k]);
      if(isString(x)) {
        obj[k] = x;
      }
    });
  },
  perform2String(str: string = ''): string {
    return str.trim();
  },
};

export default _;