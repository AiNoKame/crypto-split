import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyQrReader from './QrReader.js';
import Button from 'react-bootstrap/Button';
import request from 'request';
import JsonResponse from './JsonResponse.js'

var qrData = '';
var checkOutResponse = '';

function setQrDataParent(qrData) {
  qrData = qrData;
}

function handleCheckOut() {
  request('http://www.google.com', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status
    console.log('body:', body); // Print the HTML for the Google homepage.
    checkOutResponse = body;
  });
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
        <Button variant="primary" size="lg" onClick={handleCheckOut}>
          CHECK OUT
        </Button>
        <JsonResponse jsonResponse={checkOutResponse}/>
      </header>
    </div>
  );
}

export default App;
