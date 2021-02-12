import React from 'react';
import s from "./Users.module.css";
import userImage from "../../assets/images/User-Icon.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
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
                            ? <input type="submit" onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'adb573e0-666d-4732-adcf-cde0ed689d09'
                                    }
                                }).then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(user.id)
                                    }
                                });
                            }} value="unfollow"/>
                            : <input type="submit" onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'adb573e0-666d-4732-adcf-cde0ed689d09'
                                    }
                                }).then((response) => {
                                    debugger
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                });
                            }} value="follow"/>}
                    </div>
                </div>
            )
        }
    </div>
};

export default Users;