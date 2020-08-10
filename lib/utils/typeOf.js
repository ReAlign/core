export default function typeOf(o) {
    return ({}).toString.call(o).slice(8, -1).toLowerCase();
}
;
//# sourceMappingURL=typeOf.js.map