import React from 'react';
import s from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";

const Users = (props) => {

    if (props.usersPage.length === 0) {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then((data) => {
            props.setUsers(data.data.items);
        });


    }


    let Users = props.usersPage.map(user => <User
        id={user.id}
        name={user.name}
        // sex={user.sex}
        country={user.country}
        avatar={user.photos.small}
        followed={user.followed}
        follow={props.follow}
        unFollow={props.unFollow}
    />);

    return (
        <div className={s.users}>
            {Users}
        </div>
    );

}

export default Users;