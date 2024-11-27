import React from "react";
import Navbar from "./Navbar";

function AddShiftTimeandPay() {
  return (
    <div>
      <Navbar />
      <div className="add-job-detail-img">
        <img src="assets/img/Group 87666.png" alt="" />
      </div>

     
      <div>
        <div className="main-box-editprofile">
        
          <div className="row">
            <div className="col-md-6">
              <div className="email-text">
                <h4>Shift Start Date</h4>
              </div>
              <div className="email-input">
                <select
                  name="id_branch"
                  id="id_branch"
                  className="form-select"
                  required
                  placeholder="Select an option "
                >
                  <option selected disabled>
                    Yes
                  </option>
                </select>
              </div>
              <div className="job-type-date mt-3">
                <div className="col-md-6 job-date">
                  <input
                    type="date"
                    placeholder="date"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="email-text">
                <h4>Shift Start Time</h4>
              </div>
              <div className="email-input">
                <select
                  name="id_branch"
                  id="id_branch"
                  className="form-select"
                  required
                  placeholder="Select an option "
                >
                  <option selected disabled>
                    Yes
                  </option>
                </select>
              </div>
              <div className="job-type-date mt-3">
                <div className="col-md-6 job-date">
                  <input
                    type="date"
                    placeholder="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="email-text">
                <h4>Shift End Date</h4>
              </div>
              <div className="email-input">
                <select
                  name="id_branch"
                  id="id_branch"
                  className="form-select"
                  required
                  placeholder="Select an option "
                >
                  <option selected disabled>
                    Yes
                  </option>
                </select>
              </div>
              <div className="job-type-date mt-3">
                <div className="col-md-6 job-date">
                  <input
                    type="date"
                    placeholder="date"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="email-text">
                <h4>Shift End Time</h4>
              </div>
              <div className="email-input">
                <select
                  name="id_branch"
                  id="id_branch"
                  className="form-select"
                  required
                  placeholder="Select an option "
                >
                  <option selected disabled>
                    Yes
                  </option>
                </select>
              </div>
              <div className="job-type-date mt-3">
                <div className="col-md-6 job-date">
                  <input
                    type="date"
                    placeholder="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="job-type-pay">
              <h3>Pay</h3>
              <p>
                Review the pay we estimated for your job and adjust it as
                needed. Check your local minimum wage.
              </p>
            </div>
            <div className="job-type">
              <div className="col-md-4">
                <h4>Hourly Pay Rate</h4>
                <div className="from-group-job-type">
                  <select
                    name="id_board"
                    id="id_board"
                    className="form-select"
                    required=""
                  >
                    <option value="-- Select Board--">(£) 250</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="job-type-pay">
              <h3>Reason for vacancy </h3>
              <div className="email-input">
                <select
                  name="id_branch"
                  id="id_branch"
                  className="form-select"
                  required
                  placeholder="Select an option "
                >
                  <option selected disabled>
                    Reason
                  </option>
                </select>
              </div>
            </div>
            <div className="edidprofile-buttons">
              <div className="row">
                <div className="col-md-6">
                  <div className="editprofile-button">
                    <button>Back </button>
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
      </div>
    </div>
  );
}
export default AddShiftTimeandPay;
