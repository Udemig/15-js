import React, { Component } from 'react'

export default class EventYakala extends Component {

    constructor(props){
        super(props)

        this.state = {
            mesaj: "merhaba"
        }

        this.tiklamaYakalama = this.tiklandi.bind(this)

    }

    tiklandi(){
        this.setState({
            mesaj: "gorusuruz"
        })
        console.log("tikalndi")
    }
/* 
 class component"te bir metoda tiklanildiginda, o metodun icindeki
 "this" otomatik olarak class"i gostermez.
 Bind, metodu class instance"ina kilitleterek this"in dogru kullanimasini
 saglar.
*/
  render() {
    return (
      <div>
        <div>{this.state.mesaj}</div>
        <button onClick={ this.tiklamaYakalama}>Tikla</button>

        <button onClick={()=>this.tiklandi()}>Tikla 1</button>

      </div>
    )
  }
}
