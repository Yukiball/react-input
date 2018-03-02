import React from 'react'
import './App.css';
import PropTypes from 'prop-types';
class Input extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        value:"",
        message:'',
        class:'input',
        type:'text',

      }
      this.valueChange = this.valueChange.bind(this)
      this.username = this.username.bind(this)
      this.password = this.password.bind(this)
      this.phone = this.phone.bind(this)
      this.idcard = this.idcard.bind(this)
      this.testUse = this.testUse.bind(this)
      this.testFunc = this.testFunc.bind(this)
      this.testEmpty = this.testEmpty.bind(this)
      this.rep = this.rep.bind(this)
    }
    componentDidMount(){
      if (this.props.type !== 'text') {
        this.setState({'type':this.props.type})
      }
    }
    componentWillUpdate(nextProps,nextState) {
    }
    rep(str){
      let reg = /^\s+|\s+$/g
      return str.replace(reg,'')
    }
    testUse(use){
      this.setState({value:this.rep(this.state.value)})
      setTimeout(()=>{
        if(use === 'username'){
          return this.username(this.state.value)
        }else if(use === 'password'){
          return this.password(this.state.value)
        }else if(use === 'phone'){
          return this.phone(this.state.value)
        }else if(use === 'idcard'){
          return this.idcard(this.state.value)
        }else if(use === 'auto'){
          return this.testFunc(this.state.value)
        }
      },0)
    }
    //是否可以为空
    testEmpty(val){
      if(val === ''){
        this.setState({'message':'不可为空',class:"input errorinput"}) 
        return false
      }else{
        this.setState({'message':'',class:"input"}) 
        return true
      }
    }
    //用户名
    username(val){
      let regEn = /[`~!@#$%^&*()+<>?:"{},.\\/;'[\]]/i,//_给去了
          regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/i,
          space = /\s/g;
      if (!this.props.empty) {
        this.testEmpty(this.state.value)
      }
      if(regEn.test(val) || regCn.test(val)) {
          this.setState({
            message:"用户名不能包含_以外的特殊字符.",
            class:"input errorinput"
          })
          return false;
      }else if(space.test(val)) {
          this.setState({
            message:"用户名不能包含空格",
            class:"input errorinput"
          })
          return false;
      }else{
          this.setState({
            message:"",
            class:"input"
          })
      }
    }
    //密码
    password(val){
      if (!this.props.empty ) {
        if(!this.testEmpty(this.state.value)){
          return false
        }
      }
    }
    //phone
    phone(val){
      if (!this.props.empty) {
        if(!this.testEmpty(this.state.value)){
          return false
        }
        if (val.length !== 11) {
          this.setState({
            message:"请不要输入错误的手机号",
            class:"input errorinput"
          })
        }else{
          this.setState({
            message:"",
            class:"input"
          })
        }
      }else{
        if (val.length === 11 || val.length === 0) {
          this.setState({
            message:"",
            class:"input"
          })
        }else{
          this.setState({
            message:"请不要输入错误的手机号",
            class:"input errorinput"
          })
        }
      }
      
    }
    //身份证
    idcard(val){
      var reg = /^[0-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$|^[0-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      if (!this.props.empty ) {
        this.testEmpty(this.state.value)
        if(reg.test(val)){
          this.setState({
            message:"",
            class:"input"
          })
        }else{
            this.setState({
              message:"身份证号格式错误或输入错误请重新输入",
              class:"input errorinput"
            })
        }
      }else{
        if(reg.test(val) || val === ''){
          this.setState({
            message:"",
            class:"input"
          })
        }else{
            this.setState({
              message:"身份证号格式错误或输入错误请重新输入",
              class:"input errorinput"
            })
        }
      }
    }
    //自定义
    testFunc(val){
      if (!this.props.empty) {
        if(!this.testEmpty(this.state.value)){
          return false
        }
      }
      if(this.props.func){
        if (this.props.func(val)) {
            this.setState({
              message:"",
              class:"input"
            })
        }else{
            this.setState({
              message:this.props.wrong,
              class:"input errorinput"
            })
        }
      }
        
    }
    valueChange(val){
      this.setState({value:val})
    }
    render(){
      return(
        <React.Fragment>
          <input  className={this.state.class} 
                  type = {this.state.type} 
                  name = {this.props.name}
                  value = {this.state.value}
                  onChange = {(e)=>this.valueChange(e.target.value)}
                  onBlur = {()=>this.testUse(this.props.use)}
          />
          <span>{this.state.message}</span>
        </React.Fragment>
      )
    }
  }
  Input.propTypes = {
    use: PropTypes.string.isRequired,
    func:PropTypes.func
  }
  Input.defaultProps  = {
    type:'text',
    empty:true,
    name:''
  }

  export default Input 