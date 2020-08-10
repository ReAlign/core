import hijack from './hijack';
export default function main(type = 'all', el = '', cbFn = () => { }) {
    const _pasteEvt = (e) => {
        if (type === 'all') {
            e.preventDefault();
            hijack.hijackPaste4All(e, cbFn);
        }
        else if (type === 'text') {
            e.preventDefault();
            hijack.hijackPaste4Text(e, cbFn);
        }
        else if (type === 'image') {
            hijack.hijackPaste4Image(e, cbFn);
        }
    };
    if (!el) {
        console.error('miss selector');
        return false;
    }
    const ele = document.querySelector(el);
    if (!ele) {
        console.error('not effective selector');
        return false;
    }
    ele.addEventListener('paste', _pasteEvt, false);
}
;
//# sourceMappingURL=main.js.map