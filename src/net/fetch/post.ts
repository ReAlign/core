import fetcher from './fetcher';

export default function post(url = '', data = {}) {
  const options = {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  };
  return fetcher(url, options);
};
