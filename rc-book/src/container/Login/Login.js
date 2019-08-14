import React, { Component } from 'react';
import './Login.css'
import {postlogin} from '../../api/homeapi'
import Mheader from '../../component/Mheader'
export default class Login extends Component {
    constructor() {
        super()
        this.state={//通过state操作的叫受控组件  受控组件受状态管理  所以value框不能输入东西
            login: sessionStorage.getItem("user")||""
        }
        // 不需要通过state进行管理的叫非受控组件

    }
    toRegister = () => {
        this.props.history.push('/Register/Register')
    }
    surelogin = () => {
        //ref 使用箭头函数  表示dom加载完成就会把值赋值到实例的属性上
        postlogin(this.x.value,this.y.value).then((data)=>{
            if(data.code==200){
                alert('登录成功')
                sessionStorage.setItem("user",data.user.username)
                this.props.history.push('/Profile/Profile')
            }else{
                alert('用户名或密码错误')
                this.x.value=''
                this.y.value=''
            }
        })
    }
    render() {
        return (
            <div className='loginbox'>
                <Mheader user={this.state.login}></Mheader>
                {/* <input placeholder='输入用户名'  value={this.state.username}/> */}
                {/* <input placeholder='输入密码' value={this.state.password}/> */}
                <div style={{ position: "relative", top: "54px" }}>
                    <input placeholder='输入用户名' ref={x => this.x = x} />
                    <input  type="password" placeholder='输入密码'  ref={y => this.y = y}/>
                    <div className='btn-login'>
                        <button onClick={this.surelogin}>登录</button>
                        <button onClick={this.toRegister}>还没账号？前往注册</button>
                    </div>
                </div>
            </div>
        );
    }
}