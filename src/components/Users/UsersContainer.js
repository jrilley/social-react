import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/user-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{
    componentDidMount() {
        let curPage = this.props.currentPage;
        let count = this.props.pageSize;
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curPage}&count=${count}`).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.data.items);
            this.props.setTotalUsersCount(data.data.totalCount);
        });
    }

    setPage = (p) => {
        this.props.setCurrentPage(p);
        let count = this.props.pageSize;
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${count}`).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.data.items);
        });
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setPage={this.setPage}
            usersPage={this.props.usersPage}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
        />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps,
    {
        follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
    })(UsersContainer);