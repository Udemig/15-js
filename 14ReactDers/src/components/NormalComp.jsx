import React, { Component } from 'react'

export default class NormalComp extends Component {
  render() {
      console.log("NormalComp render edildi")

    return (
      <div className='sinif2'>NormalComp {this.props.isim}</div>
    )
  }
}
