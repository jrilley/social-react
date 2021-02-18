import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, renderField, required} from "../../helpers/ValidationForm";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    // debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} component={renderField("input")} name={"email"}
                        validate={[ required, email ]}
            /></div><br/>
            <div><Field type={"password"} placeholder={"Password"} component={renderField("input")} name={"password"}
                        validate={[ required ]}
            /></div><br/>
            <div><Field type="checkbox" component="input" name={"rememberMe"} /> remember me</div><br/>
            <div><button>Log In</button></div>
        </form>
    );
};

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        if (props.isAuth) {
            return <Redirect to={`/profile`}/>
        }
    };

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);