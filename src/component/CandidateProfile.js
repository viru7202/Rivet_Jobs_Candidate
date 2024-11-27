import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function CandidateProfile() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleClick = () => {
    navigate("/editprofile");
  };


  return (
    <>
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
                <button className="market" onClick={handleUploadClick}>
                  <img className="pdf" src="\assets\css\pdf.png" alt="Upload" />
                  Upload Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contactDetail">
          <div className="contact">Candidate Contact</div>
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
          <div className="review-client">
            <div className="contact">Review</div>
            <div className="border"></div>
          </div>
          <Link to="/EditProfile">
          <div className="editButton my-4">
            <button className="editing-2"> Edit Profile </button>
          </div>
          </Link>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Upload Resume</h3>
            <div className="upload-area">
              <p>Drag and Drop here or</p>
              <button>Select file</button>
            </div>
            <div className="popup-buttons">
              <button onClick={handleClosePopup}>Cancel</button>
              <button>Confirm</button>
            </div>
          </div>
        </div>
      )}
<style jsx>{`
        .market {
          margin-bottom: 20px;
          font-size: 16px;
          color: #1d71b7;
          font-weight: 700;
          background-color: #fff;
          border: none;
          margin-left: 90px;
          padding: 5px 40px;
        }

        .popup-overlay {
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
          width: 400px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .popup h3 {
          margin-top: 0;
        }

        .upload-area {
          border: 2px dashed #ddd;
          padding: 30px;
          margin: 20px 0;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .upload-area button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          margin-top: 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .popup-buttons {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .popup-buttons button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .popup-buttons button:first-child {
          background: #ddd;
          color: #333;
        }

        .popup-buttons button:last-child {
          background: #1d71b7;
          color: white;
        }
      `}</style>

    </>
  );
}

export default CandidateProfile;











