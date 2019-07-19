import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyQrReader from './QrReader.js';

var qrData = '';

function setQrDataParent(qrData) {
  qrData = qrData;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          CRYPTO SPLIT
        </p>
        <MyQrReader setQrDataChild={setQrDataParent} />
        <p>{qrData}</p>
      </header>
    </div>
  );
}

export default App;
