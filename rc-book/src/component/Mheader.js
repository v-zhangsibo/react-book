import React, { Component } from 'react';
//给没有路由的组件可以使用路由的属性
import {withRouter} from 'react-router-dom'
import Login from '../container/Login/Login';
class Mheader extends Component {
    goback=()=>{
        this.props.history.goBack()
    }
    render() {
        let login = sessionStorage.getItem("user")
        return (
            <div className='mheader'>
                 <span><i className = 'iconfont icon-fanhui' onClick={this.goback}></i></span>
                 <span>登录状态：{this.props.user?'已登录':'未登录'}</span>
            </div>
        );
    }
}
export default withRouter(Mheader) 