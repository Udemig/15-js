import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props){
        super(props)

        /* state te veri tanimla. setState ile degistir */
        this.state = {
           isim: "memo" 
        }

        console.log("Navbar HayatDongusu  constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("Navbar HayatDongusu  getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
       console.log("Navbar HayatDongusu  componentDidMount")
    }

     shouldComponentUpdate(){
        console.log("Navbar HayatDongusu shouldComponentUpdate")
    return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
     console.log("Navbar HayatDongusu getSnapshotBeforeUpdate")
     return null
    }

    componentDidUpdate(){
        console.log("Navbar HayatDongusu componentDidUpdate")
    }
  render() {
    console.log("Navbar HayatDongusu  render")
    return (
      <React.Fragment>
        <div>Navbar 1</div>
        <div>Navbar 2</div>
        <div>Navbar 3</div>
      </React.Fragment>
    )
  }
}
