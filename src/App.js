import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyQrReader from './QrReader.js';
import Button from 'react-bootstrap/Button';

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
        {
          qrData ?
            <Button variant="primary" size="lg">
              CHECK OUT
            </Button>
            : null
        }
      </header>
    </div>
  );
}

export default App;
