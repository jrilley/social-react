import React from 'react';
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.friendItem}>
                <NavLink to={`/profile/id${props.id}`}><img src={props.src} /></NavLink>
            </div>
        </div>
    );
}

export default Friends;