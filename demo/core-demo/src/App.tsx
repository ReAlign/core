import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { get } from './../../../lib/net/fetch';
// import { md5 } from './../../../lib/md5/index';
import deepTrim from './../../../lib/utils/deepTrim';
import Core from './../../../lib';

function App() {
  const a = {
    x: ' a ',
    y: {
      z: [1, ' 2  ', 3],
    },
    z: null,
  };
  const b = '  s ';
  console.log(deepTrim(a), deepTrim(b));
  // console.log(md5(JSON.stringify(document)));

  // const url = 'https://mocks.alibaba-inc.com/mock/realign-mock/api/get';
  // get(url).then((x) => {
  //   console.log(x);
  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
