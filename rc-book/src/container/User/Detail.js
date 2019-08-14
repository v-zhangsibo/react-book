import React, { Component } from 'react';

export default class Detail extends Component {
    render() {
        let User;
        if (this.props.location.state) {
            User = this.props.location.state
        } else {
            let Userlist = JSON.parse(localStorage.getItem('Userlist')) || []
            let userid = parseInt(this.props.match.params.id);
            User = Userlist.find(item => item.id === userid)
        }

        return (
            <div>
                用户详情
                <div>
                    用户编号:{User.id}
                </div>
                <div>
                    用户名:{User.name}
                </div>
            </div>
        );
    }
}
