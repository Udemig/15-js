import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            kadi: "",
            sifre: ""
        }
    }

    kadiDegisimiYakala =  (event) => {
        console.log("degisim durumu")
        this.setState({
            kadi: event.target.value
        })
    }

     sifreDegisimiYakala =  (event) => {
        console.log("sifre degisim durumu")
        this.setState({
            sifre: event.target.value
        })
    }

    formGonderildi = (event) => {
        event.preventDefault()
        console.log("ginderildi")
    } 

  render() {
    return (
      <div>
        <form action="" onSubmit={this.formGonderildi}>
            <label htmlFor="">Kullanici adi</label>
            <input type="text" value={this.state.kadi} onChange={this.kadiDegisimiYakala} />
           <label htmlFor="">Sifre</label>
            <input type="password" value={this.state.sifre} onChange={this.sifreDegisimiYakala} />
            <button type='submit'>Gonder</button>
        </form>

      </div>
    )
  }
}
