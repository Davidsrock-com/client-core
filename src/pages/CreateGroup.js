import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import "../css/CreateGroup.css";

//Groups form react hooks form
//Documentation for React hooks form https://react-hook-form.com/

const CreateGroup = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const alertRef = useRef();

  const onSubmit = (values) => {
    alertRef.current.style.display = "block";
    setTimeout(function () {
      alertRef.current.style.display = "none";
    }, 1000);
    console.log(values);

    reset(values);
  };

  return (
    <div>
      <div className="group-container">
        <h1 className="group-title">Start A New Group</h1>
        <div className="alert" ref={alertRef}>
          Group has been created
        </div>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="group-form-label">Group Location</label>
            <input
              name="location"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error-message">
              {errors.location && errors.location.message}
            </p>
          </div>
          <div className="field">
            <label className="group-form-label">Group Name</label>
            <input
              name="name"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error-message">
              {errors.name && errors.name.message}
            </p>
          </div>
          <div className="field">
            <label className="group-form-label">
              Describe what your group will be about
            </label>
            <input
              name="details"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error-message">
              {errors.details && errors.details.message}
            </p>
          </div>
          <div className="field">
            <label className="group-form-label">Category</label>
            <select name="category" ref={register({ required: true })}>
              <option value="">Select</option>
              <option value="Activist">Activist</option>
              <option value="Labour">Labour Union</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="field">
            <label className="group-form-label">Invite People/Groups</label>
            <input
              name="invite"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error-message">
              {errors.invite && errors.invite.message}
            </p>
          </div>
          <div className="btn-sec">
            <button className="ui button group-btn" type="submit">
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
