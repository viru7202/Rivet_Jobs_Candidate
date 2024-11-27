
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


// Popup component
function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Upload Covering Letter</h3>

        <div className="popup-section">
          <label>Writing Covering Letter :</label>
          <textarea placeholder="Enter Text here"></textarea>
        </div>

        <div className="popup-section">
          <p style={{textAlign:'center', marginBottom:'13px'}}>or</p>
          <div className="drag-drop-area">
            <i className="fa fa-upload"></i>
            <p>Drag and Drop here</p>
            <button>Select file</button>
          </div>
        </div>

        <div className="popup-section">
          <h3>Pre-Interview Questionnaires :-</h3>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="question-section">
              <label>Question for candidate that client upload ?</label>
              <input type="text" placeholder="Answer that candidate writing here" />
            </div>
          ))}
        </div>

        <div className="popup-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="confirm-button">Confirm</button>
        </div>
      </div>
    </div>
  );
}

function Webpage3() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="health-care-card-main">
          <div className="health-care-img">
            <img src="assets/img/brand-3 1.png" alt="" />
          </div>

          <div className="health-care-text">
            <div className="health-care-aist">
              <div className="heath-aist">
                <h3>Healthcare Assistant</h3>
              </div>
              <div className="health-collection-text">
              <Link to="/ClientProfile">
                <div className="cinnamon-care-collection">
                  <p> <span className="cl">Cinnamon Care Collection</span><img src="assets/img/Group 653.png" alt="" /></p>
                </div>
                </Link>

                <div className="cinnamon-care-collection">
                  <p> <img src="assets/img/Group 627.png" alt="" /><span className="rev">84 Reviews</span><img src="assets/img/Group 653.png" alt="" /></p>
                </div>
              </div>
              <div className="london">
                <p>London</p>
              </div>
              <div className="london-year">
                <p>£28,844 a year - Permanent</p>
              </div>

              <div className="health-apply-now">
                <div className="apply-now">
                  <button onClick={handleOpenPopup}>
                    <p>Apply now</p>
                  </button>
                </div>
                <div className="apply-now-img">
                  <img src="assets/img/Group 768.png" alt="" />
                </div>
              </div>
              <div className="job-detial">
                <h3>Job details </h3>
                <p>Here’s how the job details align with your <span>profile.</span> <img src="assets/img/Group 655.png" alt="" /> </p>
              </div>
              <div className="pay-health">
                <div className="pay-img">
                  <img src="assets/img/Group 661.png" alt="" />
                </div>
                <div className="pay-text">
                  <p>Pay</p>
                  <button>$28,250 a year</button>
                </div>
              </div>
              <div className="pay-health">
                <div className="pay-img">
                  <img src="assets/img/Group 662.png" alt="" />
                </div>
                <div className="pay-text">
                  <p>Schedule</p>
                  <button>Day Shift</button>
                </div>

              </div>
              <div className="pay-health">
                <div className="pay-img">
                  <img src="assets/img/Group 4399.png" alt="" />
                </div>
                <div className="pay-text">
                  <p>Schedule</p>
                  <button>Day Shift</button>
                </div>

              </div>
            </div>

            <div className="health-line"></div>

            <div className="health-care-aist">
              <div className="job-detial-location">
                <h3>Location </h3>
                <p> <i class="fa-solid fa-location-dot"></i>    66 Commercial Street, London E1    </p>
              </div>
            </div>

            <div className="health-line"></div>

            <div className="health-care-aist">
              <div className="job-detial-benefit">
                <h3>Benefits </h3>
                <p> Pulled from the full job description </p>
                <ul>
                  <li>Company pension</li>
                  <li>Cycle to work scheme</li>
                </ul>
              </div>
            </div>

            <div className="health-care-aist">
              <div className="job-detial-benefit">
                <h3>Key Qualification </h3>

                <ul>
                  <li>English ( Must Have)</li>
                  <li>Medical terminology  ( Preferred )</li>
                  <li>Driving license ( Must Have)</li>
                </ul>
              </div>
            </div>

            <div className="health-line"></div>

            <div className="health-care-aist">
              <div className="job-detial-about">
                <h3>About us</h3>
                <p> Crisis is the national charity for people experiencing homelessness. We know that homelessness is not inevitable.
                  We know that together we can end it. </p>

                <p>  This is a brilliant opportunity for you to join a dynamic and ambitious team as we deliver
                  a consistently excellent experience to our supporters.</p>
              </div>
            </div>

          </div>
        </div>
        {/* Popup */}
        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </div>
      <style jsx>{`
/* Overlay for popup */
.popup-overlay {
     backdrop-filter: blur(5px);
     z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
   .popup-content h3{
    text-align: center;
          font-size: 24px;
              font-weight: 700;
      color: #3E3E3E;
      }
/* Popup content box */
.popup-content {
  background: white;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  border-radius: 8px;

      scale: 0.8;
}

/* Popup section styling */
.popup-section {
  margin-bottom: 13px;
}

.popup-section label {
  font-weight: bold;
}

.popup-section textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 5px;
  resize: none;
}

.drag-drop-area {
  border: 1px dashed #ddd;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  color: #666;
}

.drag-drop-area button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #1D71B7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.question-section {
  margin-bottom: 10px;
 
}

.question-section label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.question-section input {
 background: #F5F7FA;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
}

.cancel-button, .confirm-button {
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button {
  background-color: #f0f0f0;
  color: #555;
}

.confirm-button {
  background-color: #1D71B7;
  color: white;
}

        `}</style>
    </div >
  );
}
export default Webpage3;
