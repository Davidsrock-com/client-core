import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import "../css/CreateEvent.css";

//Events form react hooks form
//Documentation for React hooks form https://react-hook-form.com/

const CreateEvent = () => {
  const { handleSubmit, register, errors, reset, getValues } = useForm();
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
      <div className="event-container">
        <h1 className="event-title">Create Event</h1>
        <div className="alert" ref={alertRef}>
          Event has been created
        </div>
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <div className="inline field">
            <label>Event Name</label>
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
          <div className="inline field">
            <label>Event Type</label>
            <div className="ui checkbox event-checkbox">
              <input name="onlineEvent" type="checkbox" ref={register({})} />
              <label className="online-label">Online Event</label>
            </div>
          </div>
          <div className="inline field">
            <label>Location</label>
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
          <div className="inline field">
            <label>Description</label>
            <textarea
              rows="2"
              className="desc-text"
              name="description"
              ref={register({
                required: "Required",
              })}
            ></textarea>
          </div>

          <div className="inline field">
            <label>Start Date/Time</label>
            <input
              type="datetime-local"
              name="startDate"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error-message">
              {errors.startDate && errors.startDate.message}
            </p>
          </div>
          <div className="inline field">
            <label>End Date/Time</label>
            <input
              type="datetime-local"
              name="endDate"
              ref={register({
                required: "Required",
                validate: {
                  datesCompare: (value) =>
                    value > getValues().startDate ||
                    "Start date must be before end date!",
                },
              })}
            />
            <p className="error-message">
              {errors.endDate && errors.endDate.message}
            </p>
          </div>
          <div className="inline field">
            <label>Invite People/Groups</label>
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
            <button className="ui button event-btn" type="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
