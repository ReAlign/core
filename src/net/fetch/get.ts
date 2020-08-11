import { IF_OBJ } from './../../../src-types/normal';
import lightObject2RequestString from '../../utils/lightObject2RequestString';
import base from './base';

export default function get(url: string = '', data: IF_OBJ = {}): any {
  return base(`${url}?${lightObject2RequestString(data)}`);
}