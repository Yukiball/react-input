# react-input

> 用react打造的输入框组件。
## 简介
### API
#### Props

参数 | 类型 | 说明 | 是否必须
---|---|---|---
use | String | 目前有'auto'，'username','password','phone','idcard'5个选项|是
type | String | 定义输入框的type属性 | 否(默认为text)
message | String | 输入不符合规定时输出的文字|否(默认为'')
empty | boolean | 是否可以为空 | 否(默认为true)
name  | String | 输入框的name值|否(默认为'')
func | String | use为auto时的自定义测试方法|否(默认是普通输入框)
class | String | 用户自定义class|否(默认为'')

