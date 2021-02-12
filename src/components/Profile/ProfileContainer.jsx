import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileApi} from "../../api/profileApi";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileApi.getProfile(userId).then((data) => {
            this.props.setProfile(data);
        });
    }
    render () {
        return (
            <div>
                <Profile {...this.props} profile={ this.props.profile } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlComponentContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setProfile
})(WithUrlComponentContainer);