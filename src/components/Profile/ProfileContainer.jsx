import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        profile: state.profilePage.profile,
    }
};

let WithUrlComponentContainer = withRouter(withAuthRedirect(ProfileContainer));

export default connect(mapStateToProps, {
    getProfile
})(WithUrlComponentContainer);