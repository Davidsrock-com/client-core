import React from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

import "../css/Register.css";

//Sign up form react hooks form
//Documentation for React hooks form https://react-hook-form.com/
//Npm link for react-recaptcha https://www.npmjs.com/package/react-recaptcha
//Removed react-recaptcha functionality because we need key from davids rock gmail

const Register = (props) => {
  const { handleSubmit, register, errors, getValues } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div className="esignup-container">
        <h1 className="esignup-title">Sign Up</h1>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input
              name="username"
              placeholder="Username"
              ref={register({
                required: "Required",
              })}
            />
            <p style={{ color: "red" }}>
              {errors.username && errors.username.message}
            </p>
          </div>
          <div className="field">
            <input
              name="email"
              placeholder="Email Address"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/,
                  message: "Invalid email address",
                },
              })}
            />
            <p style={{ color: "red" }}>
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="field">
            <input
              name="password"
              placeholder="New Password"
              type="password"
              ref={register({
                required: "Required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
              })}
            />
            <p style={{ color: "red" }}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="field">
            <input
              name="passwordConfirmation"
              placeholder="Confirm New Password"
              type="password"
              ref={register({
                required: "Required",
                validate: {
                  passwordEqual: (value) =>
                    value === getValues().password || "Password must match!",
                },
              })}
            />
            <p style={{ color: "red" }}>
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.message}
            </p>
          </div>
          <div className="esignup-btn">
            <button className="ui red button si-btn" type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <h4 className="signup-login">
          Already a member? <Link to="/login">Log in</Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
