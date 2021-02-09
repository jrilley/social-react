import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import * as axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((data) => {
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

export default connect(mapStateToProps, {
    setProfile
})(ProfileContainer);