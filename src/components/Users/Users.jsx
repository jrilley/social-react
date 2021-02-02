import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

const Users = (props) => {

    if (props.usersPage.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: false,
                    name: 'Anton Dmytrenko',
                    sex: 'Male',
                    country: 'Ukraine',
                    avatar: 'http://1.bp.blogspot.com/-e1ygQH9Rzyo/UxsDOZkbW3I/AAAAAAAAAyA/CyZPV-9UK9g/s1600/9P1nv0t-gxE.jpg'
                },
                {
                    id: 2,
                    followed: true,
                    name: 'Varvara Lopatkova',
                    sex: 'Female',
                    country: 'Russia',
                    avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg'
                },
                {
                    id: 3,
                    followed: false,
                    name: 'Andrey Ustrica',
                    sex: 'Male',
                    country: 'Belarus',
                    avatar: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'
                }
            ]
        );
    }

    let Users = props.usersPage.map(user => <User
        id={user.id}
        name={user.name}
        sex={user.sex}
        country={user.country}
        avatar={user.avatar}
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