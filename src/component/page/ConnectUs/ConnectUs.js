import React from "react";
import "./ConnectUs.css";

const ConnectUs = () => {
  return (
    <div className="connect-us">
      <h2 className="text-center pb-2">Connect With Us</h2>
      <form className=" mx-auto px-5 connect-form">
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="subject"
          />
        </div>
        <textarea
          name="description"
          className="form-control text-area w-100 mb-3"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="your message"
          required
        ></textarea>
        <button type="submit" className="submit-btn w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectUs;
