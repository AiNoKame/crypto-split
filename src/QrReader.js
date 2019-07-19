import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class MyQrReader extends Component {
  state = {
    showViewFinder: true
  }

  handleScan = data => {
    if (data) {
      this.setState({
        showViewFinder: false
      })

      this.props.setQrDataChild('Restaurant Info: ' + data)
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    console.log('this.props ' + this.props)
    return (
      <div>
        {
          this.state.showViewFinder ?
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
            : null
        }
      </div>
    )
  }
}

export default MyQrReader;
