import Navbar from "./Navbar";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";

function Cdtreview() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="profile">Candidate Profile</div>
        <div className="profileBg">
          <div className="row">
            <div className="col-md-3">
              <div className="image">
                <img src="assets/css/boy 1.png"></img>
              </div>
            </div>
            <div className="col-md-9">
              <div className="dfx">
                <div className="heading">Smith</div>


              </div>
           
              <div className="border" style={{ width: '95%' }}></div>
              <div className="details">
                <div className="Name">
                  <div className="cc">
                    <p className="bold">Date of Birth</p>
                    <p className="text">19-12-1998</p>
                  </div>
                </div>
                <div className="Name">
                  <div className="cc">
                    <p className="bold">Gender</p>
                    <p className="text">Male</p>
                  </div>
                </div>
          
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
                  Email
                  <p className="email-p">Calvin@gmail.com </p>
                </div>
              </div>
              <div className="photo">
                <img src="\assets\css\line1.png"></img>
                <div className="emailAddress">
                  Address Line 1
                  <p className="email-p">
                    104, White Cross, 15, Patel Society Rd, Panchavati Society,
                    Gulbai Tekra, Ahmedabad, Gujarat 380006{" "}
                  </p>
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
                  Telephone number
                  <p className="email-p">+91 00001 00100 </p>
                </div>
              </div>
              <div className="photo">
                <img src="/assets/css/city.png"></img>
                <div className="emailAddress">
                  City
                  <p className="email-p">Ahmedabad </p>
                </div>
              </div>

            </div>

            <div className="contact">Employment Status</div>
            <div className="border"></div>
            <div className="col-md-6">
              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Current Employment
                  <p className="email-p">Sr. UI UX Designer May 2023 - Present </p>
                </div>
              </div>



            </div>
            <div className="col-md-6">

              <div className="photo">
                <img src="/assets/css/mailIcon.svg"></img>
                <div className="emailAddress">
                  Pervious Employment
                  <p className="email-p">Sr. Web Designer at XYZ PVT LTD.
                    March 2018 - May 2023</p>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="editing">Edit</button> */}
        </div>
        <div className="contactDetail">
          
       
          <div className="review-client">
            <div className="contact">Review</div>
            <div className="border"></div>
          </div>
          <div className="editButton">
            <button className="editing-2" onClick={togglePopup}>Add Review</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Leave a review for Vincent</h3>
            <form>
              <label>Name</label>
              <input type="text" placeholder="User" />

              <label>Email</label>
              <input type="email" placeholder="user@gmail.com" />

              <label>Review</label>
              <textarea placeholder="Describe what it was like working with Torbit and the reason behind your rating." />

              <div className="rating">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
              <div className="modal-buttons">
                <button className="next-button" type="button" onClick={togglePopup}>Cancel</button>
                <button className="cancel-button" type="submit">Post review</button>
              </div>


            </form>
          </div>
        </div>
      )}

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
        
        .popup-overlay {
            backdrop-filter: blur(5px);
            z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 600px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .popup h3 {
          margin-top: 0;
        }

        .popup form {
          display: flex;
          flex-direction: column;
        }

        .popup label {
          margin-top: 10px;
          font-weight: bold;
        }

        .popup input, .popup textarea {
          margin-top: 5px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
          width: 100%;
        }

        .popup .rating {
          margin: 10px 0;
        }

        .popup button {
          margin-top: 10px;
          padding: 10px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
        }

        .popup button[type="button"] {
          background: #ddd;
          color: #333;
        }

        .popup button[type="submit"] {
          background: #1d71b7;
          color: white;
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
export default Cdtreview;
