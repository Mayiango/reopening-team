import React from 'react';
import {Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';

const ValidateSignIn = () =>(
    
    <Formik initialValues={{email: "", password: ""}}

    onSubmit ={(values, {setSubmitting }) =>{
        setTimeout(() =>{
            console.log("Logging in ", values);
            setSubmitting(false);
        }, 500);
    }}

    validationSchema={Yup.object().shape({
        email: Yup.string()
            .email()
            .required("Required"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too shrot - should be 8 characters at least.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
    >
        {props =>{
            const {
                values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="Enter your email"
                    value={values.email} onChange={handleChange} onBlur={handleBlur}
                    className={errors.email && touched.email && "errors"} />

                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" placeholder="Enter password"
                    value={values.password} onChange={handleChange } onBlur={handleBlur}
                    className={errors.password && touched.password && "errors"}/>
                    
                    {errors.password && touched.password && <div className="input-feedback">
                        {errors.password}
                    </div>}
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </form>
            );
        }}
    </Formik>

);

export default ValidateSignIn;