import React, { Component } from 'react';
import './Register.css'
import Mheader from '../../component/Mheader'
import {postregister} from '../../api/homeapi'
export default class Register extends Component {
    constructor() {
        super()
        this.state={
            login: sessionStorage.getItem("user")||""
        }

    }
    toLogin = () => {
        this.props.history.push('../Login/Login')
    }
    surelogin = () => {
        console.log(this.x.value)
        //ref 使用箭头函数  表示dom加载完成就会把值赋值到实例的属性上
        postregister(this.x.value,this.y.value).then((data)=>{
            if(data.code==200){
                alert('注册完成，请前往登录')
                this.props.history.push('/Login/Login')
            }else if(data.code==203){
                alert('用户已存在')
            }
        })
    }
    render() {
        return (
            <div className='registerbox'>
                <Mheader user={this.state.login}></Mheader>
                <div style={{ position: "relative", top: "54px" }}>
                    <input placeholder='注册用户名' ref={x => this.x = x} />
                    <input placeholder='注册密码'  ref={y => this.y = y}/>
                    <div className='btn-register'>
                        <button onClick={this.surelogin}>注册</button>
                        <button onClick={this.toLogin}>已有账号？前往登录</button>
                    </div>
                </div>
            </div>
        );
    }
}