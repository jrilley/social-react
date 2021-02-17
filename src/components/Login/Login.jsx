import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    // debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} component="input" name={"login"} /></div><br/>
            <div><Field type={"password"} placeholder={"Password"} component="input" name={"password"}/></div><br/>
            <div><Field type="checkbox" component="input" name={"rememberMe"} /> remember me</div><br/>
            <div><button>Log In</button></div>
        </form>
    );
};

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;