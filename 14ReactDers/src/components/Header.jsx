import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Header extends Component {
    constructor(props){
        super(props)

        /* state te veri tanimla. setState ile degistir */
        this.state = {
           isim: "memo" 
        }

        console.log("Header HayatDongusu constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("Header HayatDongusu getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
       console.log("Header HayatDongusu componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Header HayatDongusu shouldComponentUpdate")
    return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
     console.log("Header HayatDongusu getSnapshotBeforeUpdate")
     return null
    }

    componentDidUpdate(){
        console.log("Header HayatDongusu componentDidUpdate")
    }

    adDegistir = () => {
        this.setState({
            isim: "can"
        })
    }
  render() {
    console.log("Header HayatDongusu render")
    return (
      <div>
        <h1>Header </h1>
        <button onClick={this.adDegistir}>Ad Degistir</button>
        <Navbar />
      </div>
    )
  }
}
