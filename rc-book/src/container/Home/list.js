import React, { Component } from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
export default class list extends Component {
    render() {
        return (
            <div className='lessonlist'>
                {
                    this.props.lesson.list.length ?
                        this.props.lesson.list.map((item, index) => (
                            <div key={index}>
                            <Link  className='lists' to={{pathname:`/details/${item.id}`,state:item}}>
                                <img src={item.img} />
                                <div className='listss'>
                                    <p>课程:{item.name}</p>
                                    <p>类型:{item.type}</p>
                                </div>
                                </Link>    
                            </div>
                        )) : '正在加载'
                }
            </div>
        );
    }
}
