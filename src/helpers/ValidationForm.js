import React from 'react';
import styles from './validationFormControl.module.css';

export const required = value => (value || typeof value === 'number') ? undefined : "Required";

export const maxLength = max => value =>
        value && value.length > max
            ? `Must be ${max} characters or less`
            : undefined;

export const maxLength100 = maxLength(100);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;

export const renderField = Element => ({input, label, type, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
        <label>{label}</label>
        <div>
            <Element {...input} {...props} type={type}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}