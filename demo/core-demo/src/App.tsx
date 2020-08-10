import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// import { get } from './../../../lib/net/fetch';
// import { md5 } from './../../../lib/md5/index';
// import deepTrim from './../../../lib/utils/deepTrim';
// import { all, text, image } from './../../../lib/clipboard/paste/index';
import Paste from './../../../lib/clipboard/paste/index';

function App() {
  // const a = {
  //   x: ' a ',
  //   y: {
  //     z: [1, ' 2  ', 3],
  //   },
  //   z: null,
  // };
  // const b = '  s ';
  // console.log(deepTrim(a), deepTrim(b));
  // console.log(Paste);

  function cbPasteEvt(e: any, all: any) {
    console.log(e, all);
  }

  function cbPasteEvtText(e: any, all: any) {
    console.log(e, all);
  }

  function cbPasteEvtImage(e: any, img: any) {
    debugger;
    if (img) {
      e.preventDefault();
      console.log(e, img);
    }
  }

  useEffect(() => {
    Paste.all('#j-main-all', cbPasteEvt);
    Paste.text('#j-main-text', cbPasteEvtText);
    Paste.image('#j-main-image', cbPasteEvtImage);
  });

  // console.log(md5(JSON.stringify(document)));

  // const url = 'https://mocks.alibaba-inc.com/mock/realign-mock/api/get';
  // get(url).then((x) => {
  //   console.log(x);
  // });
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br /> */}
        <div>
          <h3>all</h3>
          <textarea id="j-main-all" className="u-main"></textarea>
        </div>

        <div>
          <h3>text</h3>
          <textarea id="j-main-text" className="u-main"></textarea>
        </div>

        <div>
          <h3>image</h3>
          <textarea id="j-main-image" className="u-main"></textarea>
        </div>

        <div>
          <h3>normal</h3>
          <textarea className="u-main"></textarea>
        </div>
      </header>
    </div>
  );
}

export default App;
