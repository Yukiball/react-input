import React from 'react';
import Input from './inp.js'
import './App.css'
  class Inputbox extends React.Component{
    constructor(props){
      super(props)
      this.state = {}
      this.auto = this.auto.bind(this)
    }
    auto(val){
      if (parseInt(val,10) && parseInt(val,10) >1) {
        return true
      }else{
        return false
      }
    }
    render(){
      return (
        <div className='main'>
          <div className="nav">标题</div>
          <div className="list-box">
            username：<Input use="username" /><br/>
            password：<Input use="password" type="password" empty={false}/><br/>
            phone：<Input use="phone"/><br/>
            idcard：<Input use="idcard"/><br/>
            auto：<Input use="auto" func={this.auto} wrong="输入错误"/><br/>
          </div>
        </div>
      )
    }
  }
  
export default Inputbox;
