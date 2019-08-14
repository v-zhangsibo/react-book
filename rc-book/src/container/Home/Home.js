import React, { Component } from 'react'
import Homeheader from './Homeheader'
import Banner from './Banner'
import List from './list'
import './Home.css'
import { connect } from 'react-redux'
import actions from '../../store/actions/home'
class Home extends Component {
    componentWillMount() {
        if (this.props.sliders.length == 0) {
            this.props.getbannerApi()
        }
        //请求列表
        this.props.setlist()
        
    }
    //设置类型
    selLesson = (lesson) => {
        //把selLesson作为Homeheader的props进行传值
        this.props.updateLesson(lesson)
    }
    //加载更多
    lodemore= ()=>{ 
        //调用action的loadmore事件
        if(this.props.lesson.hasMore){
            this.props.loadmore()
        }
    }
    //滚动事件
    addOnScroll=()=>{
        let i;
        console.log(this)
        this.refs.scool.onscroll=()=>{
            clearTimeout(i)
            i = setTimeout(() => {
                let {scrollTop,clientHeight,scrollHeight} = this.refs.scool;
                if(scrollTop+clientHeight>=scrollHeight) {
                    this.lodemore();
                }
            }, 500);
        }
    }
    componentDidMount(){//渲染之前refs是空的，在渲染之后调用
        this.addOnScroll()
    }
       render() {
        return (
            <div>
                <Homeheader selLesson={this.selLesson} />
                <div className='page-wrap' ref='scool'>
                    {
                        //当数据拿到后再去渲染轮播图组件
                        this.props.sliders.length ? <Banner sliders={this.props.sliders} /> : '等待'
                    }
                    <List lesson={this.props.lesson}/>
                    {this.props.lesson.hasMore?<button className='gdbtn' onClick={this.lodemore}>加载更多</button>:'没有更多了'}
                </div>
                
            </div>

        )
    }
}
// let mapStateToprops = (state) => {两种写法
//     return {
//         lesson: state.home.lesson
//     }
// }
// let mapDispatchToProps = (dispatch) => {两种写法
//     return {
//         updateLesson: (...arg) => dispatch(actions.updateLesson(...arg))
//     }
// } 
let mapStateToprops = (state) => {// 用于建立组件跟store的state的映射关系    通过connect拿到的store里的state值
    return {
        ...state.home
    }
}
let mapDispatchToProps = {
    ...actions //用于建立组件跟store.dispatch的映射关系
}
export default connect(mapStateToprops, mapDispatchToProps)(Home)

