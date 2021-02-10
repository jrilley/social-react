import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    // debugger;
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <NavLink to='/profile'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
                </NavLink>
            </div>
            <div className={s.auth_block}>
                {props.auth.isAuth
                    ? <NavLink to={`/profile/${props.auth.userId}`}>{props.auth.login}</NavLink>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;