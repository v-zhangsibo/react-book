import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class List extends Component {
    render() {
        let Userlist = JSON.parse(localStorage.getItem('Userlist')) || [];
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">用户名</th>
                            <th scope="col">用户详情</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Userlist.map((item) =>
                                (<tr key={item.id} >
                                    <td className="table-warning">{item.id}</td>
                                    <td className="table-primary">{item.name}</td>
                                    <td className="table-danger"><Link to={{ pathname: `/detail/${item.id}`,state:item }}>详情</Link></td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}