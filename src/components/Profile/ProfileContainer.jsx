import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    }

    render () {
        return (
            <div>
                <Profile {...this.props} savePhoto={this.props.savePhoto} profile={ this.props.profile } status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};


export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer);
