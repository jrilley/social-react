import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, renderField, required} from "../../helpers/ValidationForm";

const LoginForm = (props) => {
    // debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} component={renderField("input")} name={"login"}
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