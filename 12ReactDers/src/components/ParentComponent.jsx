import React, { Component } from 'react'
import CocukComponent from "./CocukComponent";

export default class ParentComponent extends Component {

 constructor(props){
    super(props)

    this.state = {
        evebeynAdi: "Abim"
    }

        this.aileniSelamla = this.aileniSelamla.bind(this)
    }

    aileniSelamla(cocukAdi ){
        console.log("aileni selamla calisti", cocukAdi)
        alert(`Mehraba ${this.state.evebeynAdi} ${cocukAdi}` )
    }

  render() {
    return (
      <div>
        <CocukComponent selamiYakala={this.aileniSelamla}/>

      </div>
    )
  }
}
