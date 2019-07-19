import React, { Component } from 'react'
import MyQrReader from './QrReader.js';
import Button from 'react-bootstrap/Button';
import request from 'request';

class AppMain extends Component {
  state = {
    qrData: '',
    checkInResponse: '',
    checkOutResponse: '',
    checkOutButtonEnabled: false
  }

  setQrDataParent = qrData => {
    var that = this;

    that.setState({
      qrData: qrData
    });

    request.post('http://localhost:8080/api/v1/checkin', {
      form: {
        account_id: localStorage.getItem('walletAddress'),
        account_name: localStorage.getItem('name'),
        table_number: 1
      }
    },
    function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status
      console.log('body:', body); // Print the HTML for the Google homepage.
      that.setState({
        checkOutButtonEnabled: true,
        checkInResponse: JSON.stringify(body, null, 2)
      });
    });
  }

  handleCheckOut = () => {
    var that = this;

    request.post('http://localhost:8080/api/v1/checkout', {
      form: {
          table_number: 1,
          amount: '0.0033'
      }
    },
    function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status
      console.log('body:', body); // Print the HTML for the Google homepage.
      that.setState({
        checkOutButtonEnabled: false,
        checkOutResponse: JSON.stringify(body, null, 2)
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          CRYPTO SPLIT
        </p>
        <MyQrReader setQrDataChild={this.setQrDataParent} />
        <p>{this.state.qrData}</p>
        <p/>
        {this.state.checkInResponse}
        <p/>
        <Button variant="primary" size="lg" onClick={this.handleCheckOut} disabled={!this.state.checkOutButtonEnabled}>
          CHECK OUT
        </Button>
        <p/>
        {this.state.checkOutResponse}
      </div>
    )
  }
}

export default AppMain;
