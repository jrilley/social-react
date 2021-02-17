import React from 'react';

export const required = value => (value) ? undefined : "Required";

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength300 = maxLength(300);
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;

export const renderField = Element => ({
                                        input,
                                        label,
                                        type,
                                        meta: {touched, error}
                                    }) => (
    <div>
        <label>{label}</label>
        <div>
            <Element {...input} placeholder={label} type={type}/>
            {
                touched && (error && <span>{error}</span>)
            }
        </div>
    </div>
)