export default function lightObject2KVArray(lo = {}) {
    const arr = [];
    const keys = Object.keys(lo);
    if (keys.length) {
        keys.forEach(k => {
            arr.push(`${k}=${lo[k]}`);
        });
    }
    return arr;
}
;
//# sourceMappingURL=lightObject2KVArray.js.map