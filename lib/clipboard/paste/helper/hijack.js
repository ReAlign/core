import u from './u';
const hijack = {
    hijackPasteBase(e, type = '', cbFn = () => { }) {
        const cbd = e.clipboardData;
        if (!u.judgingPasteCompatibility(cbd)) {
            return false;
        }
        if (cbFn) {
            let allInfo = [];
            const list = [].slice.call(cbd.items) || [];
            const len = list.length;
            const opt = {
                e,
                type,
                list,
                len,
                count: 0,
                allInfo
            };
            u.getAllInfoFromPasteConent(opt, cbFn);
        }
    },
    hijackPaste4All(e, cbFn) {
        hijack.hijackPasteBase(e, 'all', cbFn);
    },
    hijackPaste4Text(e, cbFn) {
        hijack.hijackPasteBase(e, 'text', cbFn);
    },
    hijackPaste4Image(e, cbFn) {
        hijack.hijackPasteBase(e, 'image', cbFn);
    }
};
export default hijack;
//# sourceMappingURL=hijack.js.map