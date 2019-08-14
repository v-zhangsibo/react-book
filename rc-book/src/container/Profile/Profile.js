import React, { Component } from 'react'
import './Profile.css'
import Mheader from '../../component/Mheader'
export default class Profile extends Component {
    constructor(){
        super();
        this.state={
            login: sessionStorage.getItem("user")||""
        }
    }
    gologin=()=>{
        this.props.history.push('Login/Login')
    }
    outlogin=()=>{
        sessionStorage.removeItem("user")
        this.setState({
            login:'',
        })       
    }
    render() {
        return (
            <div className='profilebox'>
            <Mheader user={this.state.login}></Mheader>
                <ul>
                {
                   this.state.login?<div>欢迎您：{this.state.login} <button onClick={this.outlogin}>退出登录</button> </div>:'您还没登录，请前往登录'
                }
                </ul>
                <button onClick={this.gologin}>点击前往登录</button>
            </div>
        )
    }
}