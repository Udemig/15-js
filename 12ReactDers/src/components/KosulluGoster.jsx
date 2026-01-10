import React, { Component } from 'react'

export default class KosulluGoster extends Component {
    constructor(props){
        super(props)

        this.state = {
            loginOlduMu: false
        }
    }
  render() {
    /*if (this.state.loginOlduMu) {
        return (
         <h1>Hosdelginiz</h1>
        )
    } else {
        return (
         <h3>Lutfne Giris yapinzi</h3>
        )
    }*/

        /*
    return(
        this.state.loginOlduMu ? <h1>Hosdelginiz</h1> : <h3>Lutfne Giris yapinzi</h3>

    )*/

        return this.state.loginOlduMu && <div>Hosgeldiniz</div>
   
  }
}
