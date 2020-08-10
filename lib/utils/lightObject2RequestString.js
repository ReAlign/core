import lightObject2KVArray from './lightObject2KVArray';
export default function lightObject2RequestString(lo = {}) {
    return (lightObject2KVArray(lo) || []).join('&');
}
;
//# sourceMappingURL=lightObject2RequestString.js.map