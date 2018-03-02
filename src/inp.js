import React from 'react'
import './App.css';
import PropTypes from 'prop-types';
class Input extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        value:"",
        class:'input',
      }
      this.reg = {
        username : /[`~!@#$%^&*()+<>?:"{},.\\/;'[\]\s]/ig,
        idcard : /^[0-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$|^[0-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        phone : /^1(3|[5-8])[0-9]{9}$/,
      }
      this.valueChange = this.valueChange.bind(this)
      this.test = this.test.bind(this)
      this.testUse = this.testUse.bind(this)
      this.testEmpty = this.testEmpty.bind(this)
      // this.rep = this.rep.bind(this)
    }
    componentDidMount(){
    }
    componentWillUpdate(nextProps,nextState) {
      console.log(nextProps,nextState)
    }
    testUse(use){
      if(use === 'username'){
        return this.test(this.state.value,this.reg.username)//用户名
      }else if(use === 'password'){
        return this.test(this.state.value)//密码
      }else if(use === 'phone'){
        return this.test(this.state.value,this.reg.phone)//电话
      }else if(use === 'idcard'){
        return this.test(this.state.value,this.reg.idcard)//身份证
      }else if(use === 'auto'){
        return this.test(this.state.value,'',this.props.func)//自定义
      }
    }
    //是否可以为空
    testEmpty(val){
      if(val === ''){
        this.setState({
          'message':'不可为空',
          class:"input errorinput"
        }) 
        return false
      }else{
        this.setState({'message':'',class:"input"}) 
        return true
      }
    }
    test(val,usereg,func){
      if (!this.props.empty) {
        if(!this.testEmpty(this.state.value)){
          return false
        }else{
          if(usereg){
            if(usereg.test(val)) {
              this.setState({
                message:this.props.message,
                class:"input errorinput"
              })
            }else{
              this.setState({
                message:"",
                class:"input"
              })
            }
          }
          if(func){
            if (func(val)) {
              this.setState({
                message:"",
                class:"input"
              })
            }else{
              this.setState({
                message:this.props.message,
                class:"input errorinput"
              })
            }
          }
        }
      }else{
        if(usereg){
          if(val === '' || usereg.test(val) ) {
            this.setState({
              message:this.props.message,
              class:"input errorinput"
            })
          }else{
            this.setState({
              message:"",
              class:"input"
            })
          }
        }
        if(func){
            if (func(val)) {
              this.setState({
                message:"",
                class:"input"
              })
            }else{
              this.setState({
                message:this.props.message,
                class:"input errorinput"
              })
            }
          }
      }
    }
    valueChange(val){
      this.setState({value:val})
    }
    render(){
      return(
        <div>
          <input  className={this.state.class} 
                  type = {this.props.type} 
                  name = {this.props.name}
                  value= {this.state.value}
                  onChange = {(e)=>this.valueChange(e.target.value)}
                  onBlur = {()=>this.testUse(this.props.use)}
          />
          <span>{this.state.message}</span>
        </div>
      )
    }
  }
  Input.propTypes = {
    use: PropTypes.string.isRequired,
    func:PropTypes.func
  }
  Input.defaultProps  = {
    type:'text',
    message:'',
    empty:true,
    name:'',
    style:'',
    value:'',
  }

  export default Input 