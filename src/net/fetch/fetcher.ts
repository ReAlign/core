export default function base(url: string = '', options: any = {}): Promise<Object> {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch(() => {
        reject();
      });
  });
};