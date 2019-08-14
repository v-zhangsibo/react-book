import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class ProtectedRouter extends Component {
    constructor(){
        super();
        this.state={
            login: sessionStorage.getItem("user")||""
        }
    }
    componentWillMount(){
        if(!this.state.login){
            this.props.history.push('/Login/Login')
        }
    }
    render() {
        let {component:C} = this.props;//这个component就是我们要渲染的组件
        return <C/>
    }
}
export default withRouter(ProtectedRouter)