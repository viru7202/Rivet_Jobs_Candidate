import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// import './Form.css';

function PayrollInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    niNumber: "",
    gender: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postCode: "",
    firstJob: "",
    accountName: "",
    accountNumber: "",
    sortCode: "",
    bankName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container">
          <div className="profile" style={{ margin: "50px 0" }}>
            Payroll Information :
          </div>
          <div className="add-job-detail-form">
            <h2 class="upload-title" style={{ paddingBottom: "20px" }}>
              In order to register yourself to HMRCas a Agency Worker, we will
              require you to complete the below information.{" "}
            </h2>
            <form className="form-containerr" onSubmit={handleSubmit}>
              <div class="heding-profile">
                <h3>Basic Information :</h3>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>First Name</h4>
                    <div class="email-input">
                      <input
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>Middle Name</h4>
                    <div class="email-input">
                      <input
                        name="middleName"
                        placeholder="Middle Name"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>Last Name</h4>
                    <div class="email-input">
                      <input
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>Date of Birth</h4>
                    <div class="email-input">
                      <input
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div class="email-text">
                    <h4>NI Number</h4>
                    <div class="email-input">
                      <input
                        name="niNumber"
                        placeholder="NI Number"
                        value={formData.niNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div class="email-text">
                    <h4>Gender</h4>
                    <div
                      class="form-grouppp"
                      style={{ marginTop: "25px", gap: "50px" }}
                    >
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          onChange={handleChange}
                        />{" "}
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          onChange={handleChange}
                        />{" "}
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="email-text">
                    <h4>Home Address Line 1</h4>
                    <div class="email-input">
                      <input
                        name="address1"
                        placeholder="Home Address Line 1"
                        value={formData.address1}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="email-text">
                    <h4>Address Line 2</h4>
                    <div class="email-input">
                      <input
                        name="address2"
                        placeholder="Address Line 2"
                        value={formData.address2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>City/Town</h4>
                    <div class="email-input">
                      <input
                        name="city"
                        placeholder="City/Town"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>State</h4>
                    <div class="email-input">
                      <input
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="email-text">
                    <h4>Post Code</h4>
                    <div class="email-input">
                      <input
                        name="postCode"
                        placeholder="Post Code"
                        value={formData.postCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="compliance-title"
                style={{ padding: "0px !important" }}
              >
                <div className="form-grouppp">
                  <div class="email-text">
                    <h4>From 6th April 2024, is this your first job?</h4>
                  </div>
                  <label style={{ marginTop: "20px" }}>
                    <input
                      type="radio"
                      name="firstJob"
                      value="Yes"
                      onChange={handleChange}
                    />{" "}
                    Yes
                  </label>
                  <label style={{ marginTop: "20px" }}>
                    <input
                      type="radio"
                      name="firstJob"
                      value="No"
                      onChange={handleChange}
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              <div class="heding-profile" style={{ paddingTop: "10px" }}>
                <h3>Bank Details :</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="email-text">
                    <h4>Name on the Account</h4>
                    <div class="email-input">
                      <input
                        name="accountName"
                        placeholder="Name on the Account"
                        value={formData.accountName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="email-text">
                    <h4>Account Number</h4>
                    <div class="email-input">
                      <input
                        name="accountNumber"
                        placeholder="Account Number"
                        value={formData.accountNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="email-text">
                    <h4>Sort Code</h4>
                    <div class="email-input">
                      <input
                        name="sortCode"
                        placeholder="Sort Code"
                        value={formData.sortCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="email-text">
                    <h4>Name of the Bank</h4>
                    <div class="email-input">
                      <input
                        name="bankName"
                        placeholder="Name of the Bank"
                        value={formData.bankName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="terms">
                <label>
                  <input type="checkbox" required /> Please click here to sign
                  the terms of engagement.
                </label>
                <p>Terms of engagement will be provided</p>
              </div>
            </form>

            <div className="edidprofile-buttons">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <Link to="/Applicationformcdt">
                    <div className="editprofile-button">
                      <button>submit</button>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4">
                  <div className="editprofile-button">
                    <button>Save</button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .add-job-detail-form {
          margin: 0 0;
          padding: 30px 60px;
        }
      `}</style>
    </>
  );
}

export default PayrollInformation;
