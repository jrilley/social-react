import React from 'react';
import {connect} from "react-redux";
import {
    follow, unFollow, getUsers, toggleFollowingProgress, unFollowTC, followTC
} from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFollowingProgress: state.usersPage.isFollowingProgress,
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps,
    {
        follow, unFollow, toggleFollowingProgress, getUsers, unFollowTC, followTC
    }), withAuthRedirect)(UsersContainer);