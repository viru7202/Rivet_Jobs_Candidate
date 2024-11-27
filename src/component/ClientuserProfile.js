import Navbar from "./Navbar";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";

function ClientuserProfile() {

 

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="profile">Profile</div>
        <div className="profileBg">
          <div className="row">
            <div className="col-md-3">
              <div className="image">
                <img src="assets/css/boy 1.png"></img>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dfx">
                <div className="heading">Vincent Howard</div>


              </div>
              <div className="cinnamon-care-collectionn">
                <p style={{ display: 'flex' }}>  <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                /><span className="revv" style={{ paddingLeft: '10px', paddingTop: '10px' }}>4.0 </span><span className="revv" style={{ paddingLeft: '10px', paddingTop: '10px' }} >  ( Reviews 0/2 )</span></p>

              </div>
              <div className="border" style={{ width: '95%' }}></div>
              <div className="details">
                <div className="Name">
                  <div className="cc">
                    <p className="bold">Company Name</p>
                    <p className="text">Rivet care</p>
                  </div>
                </div>
                <div className="Name">
                  <div className="cc">
                    <p className="bold">Email Address</p>
                    <p className="text">Calvin@gmail.com</p>
                  </div>
                </div>
                <div className="Name">
                  <div className="cc">
                    <p className="bold">Telephone Number</p>
                    <p className="text">20002 00022</p>
                  </div>
                </div>
              </div>
              <div className="dob">
                <div className="Name">
                  <div className="icon">
                    <img className="iconImg" src="/assets/css/Group 48.png"></img>
                    <div className="logo">Are you part of a Group?</div>
                  </div>
                </div>
                {/* <button className="marketPlace">Market Place</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="contactDetail">
          <div className="contact">Client's Profile</div>
          <div className="border"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Branch Name
                  <p className="email-p">RIvet care Ahmedabad </p>
                </div>
              </div>
              <div className="photo">
                <img src="\assets\css\line1.png"></img>
                <div className="emailAddress">
                  Position
                  <p className="email-p">Designer</p>
                </div>
              </div>
              <div className="photo">
                <img src="\telephone.png"></img>
                <div className="emailAddress">
                  City
                  <p className="email-p">380051 </p>
                </div>
              </div>
              {/* <div className="photo ph1">
                <img className="pdf" src="\assets\css\pdf.png"></img>
                <div className="emailAddress">Create CV</div>
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Company Reg. Number
                  <p className="email-p">Reg00555RC585 </p>
                </div>
              </div>
              <div className="photo">
                <img src="/assets/css/city.png"></img>
                <div className="emailAddress">
                  Post Code
                  <p className="email-p">380051</p>
                </div>
              </div>
              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Address Line 1
                  <p className="email-p">
                    104, White Cross, 15, Patel Society Rd, Panchavati Society,
                    Gulbai Tekra, Ahmedabad, Gujarat 380006{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="editing">Edit</button> */}
        </div>
        <div className="contactDetail">
          <div className="contact">Head Office Details</div>
          <div className="border"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Name of Procurement Manager
                  <p className="email-p">Vincent Howard </p>
                </div>
              </div>
              <div className="photo">
                <img src="\assets\css\line1.png"></img>
                <div className="emailAddress">
                  Telephone number
                  <p className="email-p">+91 00001 00100</p>
                </div>
              </div>
              <div className="photo">
                <img src="\telephone.png"></img>
                <div className="emailAddress">
                  City
                  <p className="email-p">Ahmdabad </p>
                </div>
              </div>
              <div className="photo">
                <img src="\telephone.png"></img>
                <div className="emailAddress">
                  Post Code
                  <p className="email-p">380051 </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Email address
                  <p className="email-p">Calvin@gmail.com </p>
                </div>
              </div>
              <div className="photo">
                <img src="/assets/css/city.png"></img>
                <div className="emailAddress">
                  Address Line 1
                  <p className="email-p">
                    104, White Cross, 15, Patel Society Rd, Panchavati Society,
                    Gulbai Tekra, Ahmedabad, Gujarat 380006{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="review-client">
            <div className="contact">Review</div>
            <div className="border"></div>
          </div>
          <div className="editButton">
            <button className="editing-2">Add New User</button>
            <button className="editing-2">Edit</button>
          </div>
        </div>
      </div>

   

      <style jsx>{`
        .editing-2 {
          margin-top: 95px;
          width: 290px;
          height: 45px;
          border-radius: 5.73px;
          color: #1d71b7;
          background-color: #eaf5ff;
          border: none;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 41px 10px 45px;
        }
        
  .modal-buttons {
    display: flex;
    justify-content: center;
    gap:  10%;
  }

  .next-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
button.next-button {
    width: 183px;
    height: 47px;
}
  .cancel-button {
    background-color: #ccc;
    color: #333;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
button.cancel-button {
    height: 47px;
    width: 183px;
}
  .next-button:hover {
    background-color: #0056b3;
  }

  .cancel-button:hover {
    background-color: #999;
  }
      `}</style>
    </div>
  );
}
export default ClientuserProfile;
