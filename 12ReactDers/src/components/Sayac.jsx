import React, { Component } from 'react'

export default class Sayac extends Component {

 constructor(){
    super()
    this.state = {
        sayac: 0
    }
 }
/* 
elinizde bir hader footer ve main component olan bir sayfa var.
Main component icinde adiniz soyadiniz yaziyor ama bunu kapsayici
ana olan sayfadan gonderiyorsunuz.
Header da arttir ve azaltma islemlerin iyapan bir sayaciniz olsun
*/
 arttir(){
    this.setState({
        sayac: this.state.sayac + 1
    })

    console.log("deger artti ", this.state.sayac)

 }

 azalt(){
     this.setState({
        sayac: this.state.sayac - 1
    })
    console.log("deger azaldi ", this.state.sayac)
 }
  render() {
    console.log(this.props)
    const {isim, yas} = this.props
    return (
      <div>
        <div>Sayac: {this.state.sayac}</div>
        <button onClick={() => this.arttir()}>Artir</button>
        <button onClick={() => this.azalt()}>Azalt</button>
        <h1>isim: {isim} yas: {yas}</h1>
      </div>
    )
  }
}
