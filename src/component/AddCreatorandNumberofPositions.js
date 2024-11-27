import React from "react";
import Navbar from "./Navbar";
function AddCreatorandNumberofPositions() {
  return (
    <div>
      <Navbar />
      <div className="add-job-detail-img">
        <img src="assets/img/Group 87899.png" alt="" />
      </div>
      <div className="main-box-editprofile">
        <div className="email-text">
          <h4>Vacancy  creator</h4>
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
            Admin
            </option>
          </select>
        </div>
        <div className="email-text">
          <h4>No of Position</h4>
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
           2
            </option>
          </select>
        </div>
        <div className="email-text">
              <h4>Notes</h4>
            </div>
            <div className="email-input">
              {/* <input type="textarea" placeholder="Please Enter Postcode"></input> */}
              <textarea placeholder="Notes....."></textarea>
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
                    <button>Post Job</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default AddCreatorandNumberofPositions;
