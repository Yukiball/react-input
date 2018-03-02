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
            username：<Input use="username" message="用户名不能包含_以外的特殊字符"/><br/>
            password：<Input use="password" type="password" empty={false}/><br/>
            phone：<Input use="phone" message="请不要输入错误的手机号"/><br/>
            idcard：<Input use="idcard"  message="身份证号格式错误或输入错误请重新输入"/><br/>
            auto：<Input use="auto" func={this.auto} message="输入错误"/><br/>
          </div>
        </div>
      )
    }
  }
export default Inputbox;
