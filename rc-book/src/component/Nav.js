import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink className="navlink" activeClassName='act-nav' to='/' exact={true}>
                    <i className='iconfont icon-shouye'></i>首页
                </NavLink>
                <NavLink className="navlink" activeClassName='act-nav' to='/shoplist'>
                <i className='iconfont icon-React'></i>课程
                </NavLink>
                <NavLink className="navlink" activeClassName='act-nav' to='/profile'>
                <i className='iconfont icon-wode'></i>我的
                </NavLink>
            </nav>
        )
    }
}