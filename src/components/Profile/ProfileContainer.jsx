import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((data) => {
            this.props.setProfile(data.data);
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