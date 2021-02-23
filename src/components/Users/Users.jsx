import React from 'react';
import s from "./Users.module.css";
import userImage from "../../assets/images/User-Icon.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageSize = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageSize; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pagination}>
            {props.currentPage > pages[0] ?
                <div>
                    <span onClick={() => {
                        props.setPage(pages[0])
                    }} onMouseDown="return false">&lt;&lt;</span>
                    <span onClick={() => {
                        props.setPage(props.currentPage - 1)
                    }} onMouseDown="return false">&lt;</span>
                </div>
                : null}
            <span className={s.currentPage}>{props.currentPage}</span>
            {props.currentPage < pages[pages.length - 1] ?
                <div>
                    <span onClick={() => {
                        props.setPage(props.currentPage + 1)
                    }} onMouseDown="return false">&gt;</span>
                    <span onClick={() => {
                        props.setPage(pages[pages.length - 1])
                    }} onMouseDown="return false">&gt;&gt;</span>
                </div>
                : null}
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
                            ? <input disabled={props.isFollowingProgress.some(id => id === user.id)} type="submit"
                                     onClick={() => {
                                         props.unFollowTC(user.id)
                                     }} value="unfollow"/>
                            : <input disabled={props.isFollowingProgress.some(id => id === user.id)} type="submit"
                                     onClick={() => {
                                         debugger
                                         props.followTC(user.id)
                                     }} value="follow"/>}
                    </div>
                </div>
            )
        }
    </div>

};

export default Users;