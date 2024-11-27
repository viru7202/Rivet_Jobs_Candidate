import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateYourAccount() {
  const [showModal, setShowModal] = useState(false);

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className={`email-verificationn ${showModal ? "blur" : ""}`}>
        <img src="assets/img/rivetcare_logo.png" alt="" />
      </div>
      <div className="main">
      <div className={`main-box ${showModal ? "blur" : ""}`}>
        <div className="heading"style={{textAlign:'center'}}>
          <h3>Create Your Account</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="email-text">
              <h4>First Name</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter First Name"></input>
            </div>
            <div className="email-text">
              <h4>Email</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Mann@gmail.com"></input>
            </div>
            <div className="email-text">
              <h4>Position</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter Position"></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="email-text">
              <h4>Last Name</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter Last Name"></input>
            </div>
            <div className="email-text">
              <h4>Mobile Number</h4>
            </div>
            <div className="email-input">
              <input type="number" placeholder="+91 9662266556"></input>
            </div>
          </div>

          <div className="email-text">
            <h4>Address</h4>
          </div>
          <div className="email-input">
            <textarea placeholder="Please Enter Address"></textarea>
          </div>
          <div className="col-md-6">
            <div className="email-text">
              <h4>Postcode</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter Postcode"></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="email-text">
              <h4>City</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter City"></input>
            </div>
          </div>

          <div className="verify-button">
            <Link to={'/emailverification'}>
            <button >Sign Up</button>
            </Link>
            <hr />
          </div>
        </div>
      </div>
      </div>





    </div>
  );
}

export default CreateYourAccount;
