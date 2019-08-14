import React, { Component } from 'react';
import { gitdetails } from '../../api/homeapi'
import './Details.css'
import Mheader from '../../component/Mheader'
export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }
    async componentDidMount() {
        //如果state里面有就直接取值，没有就请求
        let item  = this.props.location.state;
        if(!item){
            let {data} = await gitdetails(this.props.match.params.id)
            item = data
        }
        this.setState({ item })
    }
    render() {
        return (
            <div className='bigbox'>
                <Mheader></Mheader>
                <img src={this.state.item.img} />
                <li>课程名称：{this.state.item.name}</li>
                <div className='jianjie'>{this.state.item.info}</div>
            </div>
        )
    }
}