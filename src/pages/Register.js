import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Recaptcha from "react-recaptcha";
import { Link } from "react-router-dom";

import { CAPTCHA_KEY } from "../config";

import "../css/Register.css";

//Sign up form react hooks form
//Documentation for React hooks form https://react-hook-form.com/
//Npm link for react-recaptcha https://www.npmjs.com/package/react-recaptcha
//Removed react-recaptcha functionality because we need key from davids rock gmail

const Register = (props) => {
  const { handleSubmit, register, errors, getValues } = useForm();

  //Recaptcha verification state
  const [isVerified, setVerify] = useState(false);

  const recaptchaLoaded = () => {
    console.log("captcha sucessfully loaded");
  };

  const onSubmit = (values) => {
    if (isVerified) {
      console.log(values);
    } else {
      alert("Please verify that you are a human!");
    }
  };

  const verifyCallback = (response) => {
    if (response) {
      setVerify(true);
    }
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
            <button className="ui red button signup-btn" type="submit">
              Sign Up
            </button>
          </div>
          <div className="recaptcha">
            <Recaptcha
              //We would need to replace the site key using the gmail account for DavidsRock http://www.google.com/recaptcha/admin
              sitekey={CAPTCHA_KEY}
              render="explicit"
              verifyCallback={verifyCallback}
              onloadCallback={recaptchaLoaded}
              size="normal"
            />
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
