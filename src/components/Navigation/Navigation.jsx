import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navigation = (props) => {
    let friendsElements = props.friendsPage.friends.map(friend =>
        <Friends id={friend.id} name={friend.name} src={friend.img}/>);

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>

        <div className={s.item}>
            <h3>Friends</h3>
            {friendsElements}
        </div>
    </nav>
}

export default Navigation;