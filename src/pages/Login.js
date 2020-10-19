import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "../css/Login.css";

//Login form react hooks form
//Documentation for React hooks form https://react-hook-form.com/

const Login = (props) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div className="login-container">
        <h1 className="login-title">Log in</h1>
        <h3 className="david-rock-title">
          Not on DavidsRock yet? <Link to="/register">Sign up</Link>
        </h3>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="form-label">Email Address:</label>
            <input
              name="email"
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
            <label className="form-label">Password:</label>
            <input
              name="password"
              type="password"
              ref={register({
                required: "Required",
              })}
            />
            <p style={{ color: "red" }}>
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input name="keepSignedIn" type="checkbox" ref={register({})} />
              <label>Keep me signed in</label>
            </div>
          </div>
          <button className="ui red button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
