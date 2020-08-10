const u = {
  judgingPasteCompatibility(cbd) {
    const ua = window.navigator.userAgent;

    // if Safari
    if (!(cbd && cbd.items)) {
      return false;
    }

    // OSX, Chrome Version < 49
    // copy file in Finder has Bug, Hack it
    if (cbd.items && cbd.items.length === 2
      && cbd.items[0].kind === 'string'
      && cbd.items[1].kind === 'file'
      && cbd.types && cbd.types.length === 2
      && cbd.types[0] === 'text/plain'
      && cbd.types[1] === 'Files'
      && ua.match(/Macintosh/i) && Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49) {
      return false;
    }

    return true;
  },

  doCbFnByType(opt, cbFn) {
    const {
      e,
      type,
      count,
      len,
      allInfo
    } = opt;

    // all itemEvt is ok
    if (count === len) {
      let _obj = allInfo;

      if (type === 'text') {
        _obj = u.packageTextInfo(allInfo);
      }

      if (type === 'image') {
        _obj = u.packageImageInfo(allInfo);
      }

      cbFn(e, _obj);
    }
  },

  packageTextInfo(arr = []) {
    let _flag = true;

    (arr.length != undefined) && arr.forEach((item) => {
      if (item.kind !== 'string' && _flag) {
        _flag = false;
      }
    });

    return _flag ? arr : null;
  },

  // 这个暂时用不到了，劫持图片的话，返回图片本身，如果要等获取名字的话，会阻止掉默认事件，因为必须等回调完成才ok
  packageImageInfo(arr = []) {
    let _obj: any = {};

    (arr.length != undefined) && arr.forEach((item) => {
      if ((item.kind === 'file'
        && item.type.indexOf('image') === 0)) {
        _obj.blob = item;
      }
      if (item.kind === 'string') {
        _obj.name = item.content || '';
      }
    });

    if (!(_obj.blob && _obj.name)) {
      _obj = null;
    }

    return _obj;
  },

  cbGetAsStringRealFunc(s = '', o, opt, cbFn) {
    if (s.length) {
      opt.allInfo.push({
        kind: o.kind,
        type: o.type,
        content: s
      });
    }

    opt.count++;
    u.doCbFnByType(opt, cbFn);
  },

  getAllInfoFromPasteConent(opt, cbFn) {
    const {
      list
    } = opt;

    (list || []).forEach((item) => {
      u.getInfoFromItem(item, opt, cbFn);
    });
  },

  getInfoFromItem(item, opt, cbFn) {
    if (item) {
      const o = {
        kind: item.kind,
        type: item.type
      };

      // 获取图片的情况下，不去取string，避免返回值变动
      if (opt.type !== 'image' && item.kind === 'string') {
        u.getStringInfo(item, o, opt, cbFn);
      } else if (item.kind === 'file') {
        u.getFileInfo(item, o, opt, cbFn);
      }
    }
  },

  getStringInfo(item, o, opt, cbFn) {
    const cbGetAsString = (s = '') => {
      u.cbGetAsStringRealFunc(s, o, opt, cbFn);
    };

    item.getAsString(cbGetAsString);
  },

  getFileInfo(item, o, opt, cbFn) {
    const blob = item.getAsFile();

    if (blob && blob.size) {
      opt.allInfo.push({
        kind: o.kind,
        type: o.type,
        content: blob
      });
    }

    if (opt.type === 'image') {
      const {
        e,
        allInfo
      } = opt;

      cbFn(e, allInfo[0]);
    } else {
      opt.count++;
      u.doCbFnByType(opt, cbFn);
    }
  },
};

export default u;