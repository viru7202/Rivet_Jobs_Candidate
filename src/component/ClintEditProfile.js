import React from 'react'
import Navbar from './Navbar';

 function ClintEditProfile() {
  return (
    <div>
       <div>
      <Navbar />
      <div className="dashbord-text-editprofile">
        <h3>Edit Profile</h3>
        {/* <hr/> */}
      </div>
      <div>
        <div className="main-box-editprofile">
          <div className="heding-profile">
            <h3>Edit Client's Profile</h3>
       
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="email-text">
                <h4>Email address</h4>
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="Please Enter Company Name"
                ></input>
              </div>
              <div className="email-text">
                <h4>Position</h4>
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="Please Enter Company Reg number"
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="email-text">
                <h4>Telephone number</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Please Enter Branch"></input>
              </div>
              <div className="email-text">
                <h4>City</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Please Enter Your Name"></input>
              </div>
            </div>

            <div className="email-text">
              <h4>Address</h4>
            </div>
            <div className="email-input">
              {/* <input type="textarea" placeholder="Please Enter Postcode"></input> */}
              <textarea placeholder="Please Enter Postcode"></textarea>
            </div>
            <div className="email-text">
                <h4>Postcode</h4>
              </div>
            
            <div className="email-input">
              <input type="text" placeholder="Please Enter Your Name"></input>
            </div>
            
          </div>
          <hr></hr>


          <div className="heding-profile edit-profile">
            <h3>Edit Head Office Contact</h3>
       
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="email-text">
                <h4>Email address</h4>
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="Please Enter Company Name"
                ></input>
              </div>
              <div className="email-text">
                <h4>Position</h4>
              </div>
              <div className="email-input">
                <input
                  type="text"
                  placeholder="Please Enter Company Reg number"
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="email-text">
                <h4>Telephone number</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Please Enter Branch"></input>
              </div>
              <div className="email-text">
                <h4>City</h4>
              </div>
              <div className="email-input">
                <input type="text" placeholder="Please Enter Your Name"></input>
              </div>
            </div>

            <div className="email-text">
              <h4>Address</h4>
            </div>
            <div className="email-input">
              {/* <input type="textarea" placeholder="Please Enter Postcode"></input> */}
              <textarea placeholder="Please Enter Postcode"></textarea>
            </div>
            <div className="email-text">
                <h4>Postcode</h4>
              </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter Your Name"></input>
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
      </div>
    </div>
    </div>
  )
}
export default ClintEditProfile;