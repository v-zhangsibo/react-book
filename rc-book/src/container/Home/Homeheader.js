import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
// duration动画时间
const duration = 300;
// 默认的style属性
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none'
}
// 进入中 和进入结束
const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
}

export default class Homeheader extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }
    changeShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    //点击选中的课程
    chooselesson = (e) => {
        //通过props 调用Home.js组件的selLesson方法 从而进行数据传递
        this.props.selLesson(e.target.dataset.type)
        this.changeShow()
    }
    render() {
        return (
            <div>
                <header className='header'>
                    <span></span>
                    <span>前端课程</span>
                    <span onClick={this.changeShow}>
                        {
                            this.state.isShow ?
                                <i className="iconfont  icon-guanbi">
                                </i>
                                :
                                <i className="iconfont  icon-liebiao">
                                </i>
                        }
                    </span>
                </header>

                <Transition in={this.state.isShow} timeout={duration} onEnter={(node) => {
                    node.style.display = 'block'
                }} onExit={(node) => {
                    node.style.display = 'none'
                }}>
                    {
                        (state) => (
                            <ul className="lesson-list"

                                onClick={this.chooselesson} style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                            >
                                <li data-type='all'>全部</li>
                                <li data-type='react'>react课程</li>
                                <li data-type='vue'>vue高阶课程</li>
                                <li data-type='angular'>angular课程</li>
                            </ul>
                        )
                    }
                </Transition>

            </div>
        );
    }
}
