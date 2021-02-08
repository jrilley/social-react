import React from 'react';
import s from "./Users.module.css";
import userImage from "../../assets/images/User-Icon.jpg";

let Users = (props) => {
    let pageSize = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pageSize; i++) {
        pages.push(i);
    }

    {/*<button onClick={() => { props.setPage(p) }}>*/}
    {/*    <span className={props.currentPage === p && s.currentPage}>{p}</span>*/}
    {/*</button>*/}

    return <div>
        <div>
            <select>
            {
                pages.map(p => {
                return (
                    <option onSelect={() => {props.setPage()}} value={p}>{p}</option>
                )
            })}
            </select>

        </div>
        {
            props.usersPage.map(user => <div className={s.userItems}>
                    <div className={s.userAvatar}>
                        <img src={(user.photos.small != null) ? user.photos.small : userImage} alt="avatar"/>
                    </div>
                    <div className={s.userInformation}>
                        <div className={s.userInfName}><span>{user.name}</span></div>
                        <div className={s.userInfSex}><span>{user.sex}</span></div>
                        <div className={s.userInfCountry}><span>{user.country}</span></div>
                    </div>
                    <div className={s.userButton}>
                        { user.followed
                            ? <input type="submit" onClick={() => { props.unFollow(user.id) }} value="unfollow"/>
                            : <input type="submit" onClick={() => { props.follow(user.id) }} value="follow"/> }
                    </div>
                </div>
            )
        }
    </div>
};

export default Users;