import React from 'react';
import s from './Users.module.css';
// import User from "./User/User";
import * as axios from "axios";
import userImage from "../../assets/images/User-Icon.jpg";

class Users extends React.Component{
    componentDidMount() {
        let curPage = this.props.currentPage;
        let count = this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curPage}&count=${count}`).then((data) => {
            this.props.setUsers(data.data.items);
            this.props.setTotalUsersCount(data.data.totalCount);
        });
    }

    setPage = (p) => {
        this.props.setCurrentPage(p);
        let count = this.props.pageSize;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${count}`).then((data) => {
            this.props.setUsers(data.data.items);
        });
    };

    render() {
        let pageSize = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pageSize; i++) {
            pages.push(i);
        }

        return <div>
        <div>
            { pages.map(p => {
                    return (<button onClick={() => { this.setPage(p) }}>
                        <span className={this.props.currentPage === p && s.currentPage}>{p}</span>
                    </button>)
                })}
        </div>
            {
            this.props.usersPage.map(user => <div className={s.userItems}>
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
                        ? <input type="submit" onClick={() => { this.props.unFollow(user.id) }} value="unfollow"/>
                        : <input type="submit" onClick={() => { this.props.follow(user.id) }} value="follow"/> }
                </div>
            </div>
            )
            }
        </div>
    }
}

export default Users;