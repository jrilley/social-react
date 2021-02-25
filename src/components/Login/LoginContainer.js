import {Field, reduxForm} from "redux-form";
import React from "react";
import {email, renderField, required} from "../../helpers/ValidationForm";
import styles from '../../helpers/validationFormControl.module.css';

const InputField = renderField('input');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field label={"Email"} component={InputField} name={"email"}
                        validate={[required, email]}
            /></div>
            <br/>
            <div><Field type={"password"} label={"Password"} component={InputField} name={"password"}
                        validate={[required]}
            /></div>
            <br/>
            <div><Field type="checkbox" component="input" name={"rememberMe"}/> remember me</div>
            <br/>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    );
};

export let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);