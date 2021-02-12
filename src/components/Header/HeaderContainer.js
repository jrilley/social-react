import React from 'react';
import Header from './Header';
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authApi} from "../../api/authApi";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authApi.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setUserData(id, login, email);
            }
        });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, {setUserData})(HeaderContainer);