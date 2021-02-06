import React from 'react';
import s from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component{
    constructor (props) {
        super(props);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then((data) => {
            props.setUsers(data.data.items);
        });
    }

    Users = this.props.usersPage.map(user => <User
        id={user.id}
        name={user.name}
        country={user.country}
        avatar={user.photos.small}
        followed={user.followed}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
    />);

    render() {
        return <div className={s.users}>
            {this.Users}
        </div>
    }
}

export default Users;