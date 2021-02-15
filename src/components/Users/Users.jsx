import React from 'react';
import s from "./Users.module.css";
import userImage from "../../assets/images/User-Icon.jpg";
import {NavLink, Redirect} from "react-router-dom";

let Users = (props) => {
    debugger
    if (props.isAuth) {
        let pageSize = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageSize; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return (
                        <button onClick={() => {
                            props.setPage(p)
                        }}>
                            <span className={props.currentPage === p && s.currentPage}>{p}</span>
                        </button>
                    )
                })}

            </div>
            {
                props.usersPage.map(user => <div className={s.userItems}>
                        <div className={s.userAvatar}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={(user.photos.small != null) ? user.photos.small : userImage} alt="avatar"/>
                            </NavLink>
                        </div>
                        <div className={s.userInformation}>
                            <div className={s.userInfName}><span>{user.name}</span></div>
                            <div className={s.userInfSex}><span>{user.sex}</span></div>
                            <div className={s.userInfCountry}><span>{user.country}</span></div>
                        </div>
                        <div className={s.userButton}>
                            {user.followed
                                ? <input disabled={props.isFollowingProgress.some(id => id === user.id)} type="submit" onClick={() => {
                                    props.unFollowTC(user.id)
                                }} value="unfollow"/>
                                : <input disabled={props.isFollowingProgress.some(id => id === user.id)} type="submit" onClick={() => {
                                    debugger
                                    props.followTC(user.id)
                                }} value="follow"/>}
                        </div>
                    </div>
                )
            }
        </div>
    } else {
        return <Redirect to='/login' />
    }
};

export default Users;