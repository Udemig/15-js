import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(){
        super()

        this.state = {
            mesaj: "Hosgeldin kullanici 12 "
        }

    }

    mesajiDegistir(){
        console.log("calisiyor")
        this.setState({ /* bu bind */
            mesaj: "Hosgeldin kullanici 13"
        })
    }    

  render() {
    return (
         <div className='hosgeldin'>
            <button onClick={()=>this.mesajiDegistir()}>{this.state.mesaj}</button>
         </div>
    )
  }
}

//React.createElement("div",null,"selamlar")
