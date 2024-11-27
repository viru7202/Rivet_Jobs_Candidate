import React, { useState } from 'react';
import Navbar from "./Navbar";

export default function LocamjobCandidateDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const confirmCancellation = () => {
    // Add your confirmation logic here
    alert("Cancellation confirmed!");
    closeModal();
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dashbord-text" style={{padding: '40px 0'}}>
          <h3>Candidate Detail</h3>
          {/* <hr style={{ border: "2px solid #B4D3E0" }} /> */}
        </div>

        <div className="container">
          <div className="candetail">
            <button className="detail-approve">Approve</button>
            <div className="detail-reject" onClick={openModal} style={{ cursor: 'pointer' }}>
              <h4 >Reject</h4>
            </div>
          </div>
          <div className="mainbox">
            <div className="firstbox">
              <div className="one">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>

                <div className="data">
                  <h4>smith</h4>
                  <h5>Healthcare Assistant </h5>
                  <h6>smith@gmail.com</h6>
                </div>
              </div>
              <div className="para2">
                <h6>Applied to Healthcare Assistant - Cinnamon  </h6>
              </div>
              <div className="para3">
                <h6>
                  Address : 104, White Cross, 15, Patel Society Rd, Panchavati
                  Society, Gulbai Tekra, Ahmedabad, Gujarat 380006
                </h6>
              </div>
            </div>
            <div className="secondbox">
              <div className="curruntbox">
                <h4>Current Position : SUi/Ux Designer May 2022 - Present </h4>

                <h4>
                  Current Position : Sr. Ui/Ux Designer May 2022 - Present{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="interviews">
            <div>
              <h4 className="preinterviews">Pre-interviews Questionnaires</h4>
            </div>

            <h4 className="para5">
              Will you be able to reliably commute to cinnamon for this job ?
            </h4>

            <div className="parent">
              <div className="yes">
                <div>
                  <img src="assets/images/Vector (5).png"></img>
                </div>
                <div>
                  <h4>yes</h4>
                </div>
              </div>
              <div className="requirment">
                <h5>Your requirement: yes (Required)</h5>
              </div>
            </div>
          </div>

          <div className="interviews">
            <h4 className="para5">
              Will you be able to relocate to be within reasonable commuting
              distance from cinnamon ?
            </h4>

            <div className="parent">
              <div className="yes">
                <div>
                  <img src="assets/images/Vector (5).png"></img>
                </div>
                <div>
                  <h4>yes</h4>
                </div>
              </div>
              <div className="requirment">
                <h5>Your requirement: yes (Required)</h5>
              </div>
            </div>
          </div>
          <div className="interviews">
            <h4 className="para5">
              Please list 2-3 dates and time ranges when you could do and
              interviews{" "}
            </h4>
            <div className="parent">
              <div className="yes">
                <div>
                  <img src="assets/images/Vector (5).png"></img>
                </div>
                <div>
                  <h4>yes</h4>
                </div>
              </div>
              <div className="requirment">
                <h5>Your requirement: yes (Required)</h5>
              </div>
            </div>
          </div>

          <div className="interviews">
            <h4 className="para5">
              Please list 2-3 dates and time ranges when you could do and
              interviews{" "}
            </h4>

            <div className="parent">
              <div className="yes">
                <div>
                  <img src="assets/images/Vector (5).png"></img>
                </div>
                <div>
                  <h4>yes</h4>
                </div>
              </div>
              <div className="requirment">
                <h5>Your requirement: yes (Required)</h5>
              </div>
            </div>
          </div>
          <div className="interviews">
            <h4 className="para5">
              Will you be able to reliably commute to cinnamon for this job ?
            </h4>
            <div className="parent">
              <div className="yes">
                <div>
                  <img src="assets/images/Vector (5).png"></img>
                </div>
                <div>
                  <h4>yes</h4>
                </div>
              </div>
              <div className="requirment">
                <h5>Your requirement: yes (Required)</h5>
              </div>
            </div>
          </div>
          <div className="interviews">
            <h4 className="para5">
              Will you be able to reliably commute to cinnamon for this job ?
            </h4>
            <div className="parent">
              <div className="yes">
                <div>
                  <img src="assets/images/Vector (5).png"></img>
                </div>
                <div>
                  <h4>yes</h4>
                </div>
              </div>
              <div className="requirment">
                <h5>Your requirement: yes (Required)</h5>
              </div>
            </div>
          </div>
          <div className="edidprofile-buttons">
          <div className="row">
           
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Download CV </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Preview CV</button>
              </div>
            </div>
          </div>
          </div>

 {/* Modal for Cancellation */}
 {isModalOpen && (
        <div className="popup-overlay">
          <div className="modal-content">
            <h3>Select a valid Reason for Cancellation</h3>
            <div className="reason-container">
              <label className="reason-label">Reason :</label>
              <select className="reason-select">
                <option>Select a Reason</option>
                <option>Sickness</option>
                <option>Double Shift</option>
                <option>Other Reason</option>
              </select>
            </div>
            <div className="reason-container">
              <label className="reason-label">Other :</label>
              <input type="text" placeholder="Enter any other reason." />

            </div>
            <div className="popup-buttons">
              <button onClick={closeModal}>Back</button>
              <button onClick={confirmCancellation}>Confirm</button>
            </div>



          </div>
        </div>
      )}

        </div>
        <style jsx>{`

   .modal-content h3{
         margin: 30px 0;
        font-size: 24px;
            font-weight: 700;
    color: #3E3E3E;
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

      .modal-content {
          margin: 15px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        width: 600px;
        text-align: center;
      }

      .reason-container {
        padding-top: 30px;
display: flex;
align-items: center;
}

.reason-label {
color: #1D71B7;
font-size: 16px;
margin-right: 10px; /* Spacing between label and select */
}

.reason-select {
  background: #ECECEC;
padding: 8px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 16px;
width: 294px;
}


     .popup-buttons {
               display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
        margin-bottom: 35px;
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
         .reason-container input,.reason-container textarea {
        margin-top: 5px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
        width: 294px;
            margin-left: 14px;
      }
 

          .mainbox {
            width: 100%;
            margin: auto;
            margin-top: 40px;
            display: flex;
            gap: 150px;
          }
          .candetail {
            //   max-width: 800px;

            height: 51px;
            display: flex;
            justify-content: space-between;
          }
          .detail-approve {
            width: 199px;
            height: 51px;
            background: #24a56f;
            border-radius: 5px;
            border: none;
            color: #ffff;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 700;
          }
          .detail-approve h4 {
            padding: 13px 15px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 700;
            text-align: center;

            color: #f5f7fa;
          }
          .detail-reject {
            width: 166px;
            height: 51px;
            background: #ce4747;
            border-radius: 5px;
          }

          .detail-reject h4 {
            padding: 13px 15px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 700;
            text-align: center;

            color: #f5f7fa;
          }
          .firstbox {
            width: 50%;
            margin-left: 20px;
            margin-top: 20px;
          }
          .secondbox {
            width: 28%;
            margin-left: 20px;
            margin-top: 20px;
          }
          .one {
            display: flex;
            gap: 10px;
          }

          .currunt {
            margin-right: 20px;
          }

          .currunt h4 {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 30px;
            text-align: right;
            color: #3e3e3e;
          }

          .data h4 {
            font-family: Roboto;
            font-size: 20px;
            font-weight: 700;
            //   line-height: 11.47px;

            color: #1d71b7;
          }
          .data h5 {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 700;
            //   line-height: 11.47px;

            margin-top: 14px;
            color: #3e3e3e;
          }

          .data h6 {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 700;
            //   line-height: 11.47px;
            text-align: left;
            margin-top: 12px;
          }
          .para2 {
            margin-top: 20px;
          }
          .para2 h6 {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            //   line-height: 11.47px;
            text-align: left;
          }

          .para3 {
            margin-top: 15px;
            font-family: Plus Jakarta Sans;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            text-align: left;
          }

          .para3 h6 {
            font-family: Plus Jakarta Sans;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            text-align: left;
          }

          .curruntbox h4 {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            line-height: 30px;

            color: #3e3e3e;
          }

          .interviews {
            margin-top: 40px;
            width: 100%;
            border-bottom: 2px solid #b4d3e0;
            boder-top: 10px;
            padding-bottom: 20px;
          }

          .preinterviews {
            font-family: Roboto;
            font-size: 16px;
            font-weight: 700;

            text-align: left;
            color: #3e3e3e;
          }

          .interviews h4 {
            margin-left: 10px;
            font-family: Roboto;
            font-size: 15px;
            font-weight: 500;

            text-align: left;
          }

          .qestions {
            margin-top: 30px;
            max-width: 100%;
          }
          .yes {
            margin-left: 20px;
            margin-top: 20px;
            display: flex;
            border: 1px solid #b4d3e0;
            width: 7%;
            justify-content: center;
          }

          .yes h4 {
            font-family: Roboto;
            font-size: 12px;
            font-weight: 500;
            line-height: 20px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #24a56f;
          }
          .requirment {
            margin-top: 20px;
          }
          .qustion {
            display: flex;

            width: 10%;

            margin-left: 20px;
            margin-top: 10px;
          }

          .yaa {
            width: 10%;
          }

          .parent {
            display: flex;
            gap: 12px;
          }

          // .lines{
          //   margin-top: 20px;
          //   width: 100%;

          // }

          .para5 {
            margin-top: 10px;
          }

          /* media quary start */

          @media (max-width: 1280px) {
            //   .container {
            //     max-width: 800px;
            //   }
          }

          @media (max-width: 770px) {
            .secondbox {
              width: 50%;
            }
          }

          @media (max-width: 720px) {
            .secondbox {
              width: 50%;
            }
          }
          @media (max-width: 670px) {
            .secondbox {
              width: 50%;
            }
          }
          @media (max-width: 665px) {
            .mainbox {
              width: 100%;
              margin: auto;
              margin-top: 40px;
              display: flex;
              gap: 10px;
              flex-direction: column;
            }

            .para2 h6 {
              font-size: 13px;
              line-height: 20px;
            }

            .para3 h6 {
              font-family: Plus Jakarta Sans;
              font-size: 13px;
              font-weight: 500;
              line-height: 20px;
              text-align: left;
            }

            .yes {
              width: 15%;
            }

            .firstbox {
              width: 100%;
              margin-left: 20px;
              margin-top: 20px;
            }

            .secondbox {
              width: 100%;
            }
          }

          @media (max-width: 590px) {
          }
          @media (max-width: 520px) {
            .mainbox {
              margin-top: 0px;
            }
            .detail-approve {
              width: 120px;
              height: 40px;
            }
            .detail-reject {
              width: 120px;
              height: 40px;
            }
            .detail-approve h4 {
              padding: 10px;
            }
            .detail-reject h4 {
              padding: 10px;
            }

            .yes {
              width: 30%;
            }
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @media (max-width: 410px) {
          }
        `}</style>
      </div>
    </div>
  );
}
