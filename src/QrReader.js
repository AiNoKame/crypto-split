import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class MyQrReader extends Component {
  state = {
    result: 'No result',
    showViewFinder: true
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        showViewFinder: false
      })

      this.props.setQrDataChild(data)
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
        {this.state.result}
      </div>
    )
  }
}

export default MyQrReader;
