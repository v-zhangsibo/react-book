import React, { Component } from 'react';

export default class Add extends Component {
    handleClick = () => {
        //把添加的用户存在本地存储的userList里面
        // alert(this.x.value)
        if(this.x.value==''){
            alert('您还没有输入!')
            // return
        }else{
            let userId = parseInt(Math.random() * 100);//随机id
        let Userlist = JSON.parse(localStorage.getItem('Userlist')) || [];//保证取出来的是数组
        Userlist.push({
            name: this.x.value,
            id: userId
        });
        localStorage.setItem('Userlist',
         JSON.stringify(Userlist))
         
         //跳转到列表页
         this.props.history.push('/user/list')
        }
        
    }
    render() {
        return (
            <div>
                <div className='form-group'>
                    <input ref={x => this.x = x} className='form-control' />
                </div>
                <button className='btm btn-primary' onClick={this.handleClick}>添加</button>
            </div>
        );
    }
}
