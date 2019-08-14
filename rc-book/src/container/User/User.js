import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Add from './Add'
import List from './List'
export default class User extends Component {
    render() {
        return (
            <div>
                <div className="col-1">
                    {/* bootstrap十二栅格 col-1占一份  十二份铺满屏幕*/}
                    <nav className=' flex-column'>
                        <NavLink to={{ pathname: '/user/add' }}>添加用户</NavLink>
                        <NavLink to='/user/list'>用户列表</NavLink>
                    </nav>
                </div>
                <div className="col-3">
                    <Switch>
                        <Route exact={true} path='/user/add' component={Add} />
                        <Route path='/user/list' component={List} />
                    </Switch>
                </div>
            </div>
        )
    }
}