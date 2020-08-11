import { IF_OBJ } from './../../../src-types/normal';
import fetcher from './fetcher';

export default function post(url: string = '', data: IF_OBJ = {}): any {
  const options = {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  };
  return fetcher(url, options);
}