import React, { Component } from 'react'

export default class RefsDemo extends Component {

    constructor(props){
        super(props)


        this.inputRef = React.createRef()

    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    tiklandi = () =>{
        alert(this.inputRef.current.value)

    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.tiklandi}>Tikla</button>
      </div>
    )
  }
}
