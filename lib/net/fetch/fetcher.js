export default function base(url = '', options = {}) {
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
}
;
//# sourceMappingURL=fetcher.js.map