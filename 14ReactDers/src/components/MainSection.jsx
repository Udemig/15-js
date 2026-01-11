import React, { Component } from 'react'
import PureComp from './PureComp'
import NormalComp from './NormalComp'
import MemoComp from './MemoComp'

export default class MainSection extends Component {

    constructor(props){
        super(props)

        this.state = {
            isim: "memo"
        }
    }

    componentDidMount(){
        setInterval(()=>{

            this.setState({
                isim: "can"
            })
        },2000)
    }

  render() {
    return (
      <div className='sinif1'>
        <PureComp isim={this.state.isim}/>
        <NormalComp isim={this.state.isim} />
        <MemoComp isim={this.state.isim} />
      </div>
    )
  }
}
