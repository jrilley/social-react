import React from 'react';
import {connect} from "react-redux";
import {
    follow, unFollow, requestUsers, toggleFollowingProgress, unFollowTC, followTC
} from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : <Users
                {...this.props} setPage={this.setPage}
            /> }

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFollowingProgress: getFollowingProgress(state),
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps,
    {
        follow, unFollow, toggleFollowingProgress, getUsers: requestUsers, unFollowTC, followTC
    }))(UsersContainer);