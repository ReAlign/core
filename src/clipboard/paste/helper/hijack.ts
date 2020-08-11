import u from './u';

const hijack = {
  hijackPasteBase(e: any, type: string = '', cbFn: any): void|boolean {
    const cbd = e.clipboardData;

    if (!u.judgingPasteCompatibility(cbd)) {
      return false;
    }

    if (cbFn) {
      const allInfo = [];
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
  hijackPaste4All(e: any, cbFn: any) {
    hijack.hijackPasteBase(e, 'all', cbFn);
  },

  hijackPaste4Text(e: any, cbFn: any) {
    hijack.hijackPasteBase(e, 'text', cbFn);
  },

  hijackPaste4Image(e, cbFn) {
    hijack.hijackPasteBase(e, 'image', cbFn);
  }
};

export default hijack;