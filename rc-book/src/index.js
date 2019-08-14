import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
//4.0废除了Router 换成了HashRouter或BrowserRouter，如果还想跟2.0一样用Router包起来就要用as把HashRouter as 为Router
import Home from './container/Home/Home'
import User from './container/User/User'
import Profile from './container/Profile/Profile'
import App from './container/App'
import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
import ProtectedRouter from './container/Shoplist/ProtectedRouter'
import Detail from './container/User/Detail'
import Details from './container/Details/Details'
import Login from './container/Login/Login'
import Register from './container/Register/Register'
import store from './store'
import {Provider} from 'react-redux'
import Shoplist from './container/Shoplist/Shoplist'
class Index extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route path='/' exact={true} component={Home} />
                        <Route path='/user' component={User} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/detail/:id' component={Detail} />
                        <Route path='/details/:id' component={Details} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <ProtectedRouter path='/shoplist' component={Shoplist} />
                        <Redirect to='/' />{/* 重定向 这里面写注释要加花括号 */}
                    </Switch>
                </App>
            </Router>
            </Provider>
        )
    }
}
render(<Index />, document.getElementById('root'))