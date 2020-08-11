import { IF_OBJ } from './../../../src-types/normal';
export default function base(url: string = '', options: any = {}): Promise<IF_OBJ> {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((e) => {
        reject(e);
      });
  });
}