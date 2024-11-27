import React from "react";
import Navbar from "../Navbar";

function SetPreferences() {
  return (
    <div>
      <Navbar />
      <div className="add-job-img">
        <img src="assets/img/Group 8744.png" alt="" />
      </div>
      <div className="main-box-editprofile">
        <div className="row">
          <div className="email-input">
            <h4>Communication preferences</h4>
          </div>
          <div className="email-input">
            <input type="text" placeholder="Email"></input>
          </div>
     
         
          <div className="setpreference-checkbox">
            <input type="checkbox" />{" "}
            <p style={{paddingLeft:'15px'}}>Send individual emails to once someone applies</p>
          </div>

          <div className="email-input mt-5">
            <h3>Is there an application deadline? </h3>
            <select
              name="id_branch"
              id="id_branch"
              className="form-select"
              required
              placeholder="Yes"
            >
              <option selected disabled>
                Yes
              </option>
            </select>
          </div>

          <div className="col-5 mt-4">
            <input type="date" placeholder="date" className="form-control" />
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
export default SetPreferences;
