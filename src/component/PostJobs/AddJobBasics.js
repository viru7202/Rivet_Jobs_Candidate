import React from "react";
import Navbar from "../Navbar";

function AddJobBasics() {
  return (
    <div>
      <Navbar />
      <div className="add-job-img">
        <img src="assets/img/Group 8788.png" alt="" />
      </div>
      <div className="main-box-editprofile">
        <div className="row">
          <div className="email-input">
            <h4>Job title</h4>
          </div>
          <div className="email-input">
            <input type="text" placeholder="Job title"></input>
          </div>
          <div className="email-input">
            <h4>Number of people to hire for this job </h4>
            <select
              name="id_branch"
              id="id_branch"
              className="form-select"
              required
              placeholder="Select an option "
            >
              <option selected disabled>
                Select an option
              </option>
            </select>
          </div>
          <div className="email-input">
            <h4>Which option best describes this job's location? </h4>
            <select
              name="id_branch"
              id="id_branch"
              className="form-select"
              required
              placeholder="Job title"
            >
              <option selected disabled>
                In Person
              </option>
            </select>
          </div>
          <div className="email-input">
            <h4>What is the street address for this location? </h4>
          </div>
          <div className="email-input">
            <input type="text" placeholder="London"></input>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988741442!2d-0.26640536410495413!3d51.52873980483248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1709195686483!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="edidprofile-buttons">
          <div className="row">
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Back</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddJobBasics;
