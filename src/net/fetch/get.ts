import { IF_OBJ } from './../../../src-types/normal';
import lightObject2RequestString from '../../utils/lightObject2RequestString';
import fetcher from './fetcher';

export default function get(url: string = '', data: IF_OBJ = {}): any {
  return fetcher(`${url}?${lightObject2RequestString(data)}`);
}