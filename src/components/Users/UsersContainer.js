import React from 'react';
import Users from './Users';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    debugger;
    return {
        usersPage: state.usersPage
    }
};

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;