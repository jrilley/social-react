import React from 'react';
import s from "./Users.module.css";
import userImage from "../../assets/images/User-Icon.jpg";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagiantion";

let Users = (props) => {

    return <div>
        <Pagination {...props} />
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