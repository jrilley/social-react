import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
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
    setProfile, getProfile
})(WithUrlComponentContainer);