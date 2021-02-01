import React from 'react';
import {connect} from "react-redux";
import Navigation from "./Navigation";

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;