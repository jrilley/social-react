import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

const Users = (props) => {

    let Users = props.usersPage.users.map( user => <User
        name={user.name}
        sex={user.sex}
        country={user.country}
        avatar={user.avatar}
    /> );

    return (
        <div className={s.users}>
            {Users}
        </div>
    );

}

export default Users;