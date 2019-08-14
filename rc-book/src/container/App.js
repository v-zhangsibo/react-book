import React, { Component } from 'react'
import '../reset.css'
import Nav from '../component/Nav'
export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}

            </div>
        )
    }
}