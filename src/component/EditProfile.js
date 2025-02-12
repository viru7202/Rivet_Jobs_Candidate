import React from "react";
import Navbar from "./Navbar";

function EditProfile() {
  return (
    <div>
      <Navbar />
      <div className="container dashbord-text-editprofile">
        <h3>Edit Profile</h3>
      </div>
        <div className="container main-box-editprofile">
          <div className="heding-profile">
            <h3>Edit your profile</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="email-text">
                <h4>First Name </h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="First Name"></input>
              </div>
              <div className="email-text">
                <h4>Date Of Birth</h4>
              </div>
              <div className="job-type-date mt-2">
                <div className="job-datee">
                  <input type="date" placeholder="date" className="form-control" />
                </div>
              </div>
              <div className="email-text">
                <h4>Email </h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Email"></input>
              </div>
              <div className="email-text">
                <h4>Position</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Please Enter your Position"></input>
              </div>
              <div className="email-text">
                <h4>Position Duration</h4>
              </div>
              <div className="email-input">
                <div className="duration-inputs">
                  <input type="date" placeholder="Start Date"></input>
                  <span className="to-text">To</span>
                  <input type="date" placeholder="End Date"></input>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="email-text">
                <h4>Last Name</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Last Name"></input>
              </div>
              <div className="email-text">
                <h4>Gender</h4>
              </div>
              <div className="email-text mt-3">
                <select
                  name="id_branch"
                  id="id_branch"
                  className="form-select"
                  required
                  placeholder="Select an option"
                >
                  <option selected disabled>
                    Male
                  </option>
                  <option selected disabled>
                    Female
                  </option>
                </select>
              </div>
              <div className="email-text">
                <h4>Mobile Number</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Mobile Number"></input>
              </div>

              <div className="email-text">
                <h4>Previous Employment</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Sr. Web Designer"></input>
              </div>
              <div className="email-text">
                <h4>Previous Employment Duration</h4>
              </div>
              <div className="email-input">
                <div className="duration-inputs">
                  <input type="date" placeholder="Start Date"></input>
                  <span className="to-text">To</span>
                  <input type="date" placeholder="End Date"></input>
                </div>
              </div>
            </div>

            <hr className="hr"></hr>
            <div className="email-text">
              <h4>Address</h4>
            </div>
            <div className="email-input">
              <textarea placeholder="Address"></textarea>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="email-text">
                  <h4>City</h4>
                </div>
                <div className="email-input">
                  <input type="text" placeholder="Ahmedabad"></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="email-text">
                  <h4>Postcode</h4>
                </div>
                <div className="email-input">
                  <input type="text" placeholder="Postcode is Required"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="edidprofile-buttons">
            <div className="row">
              <div className="col-md-6">
                <div className="editprofile-button">
                  <button>Save</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="editprofile-button">
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <style jsx>{`

.duration-inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.duration-inputs input[type="date"] {
  width: 140px;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.to-text {
  font-size: 0.9rem;
  color: #666;
}

      `}</style>
    </div>
  );
}

export default EditProfile;
