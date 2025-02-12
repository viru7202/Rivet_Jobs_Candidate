import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import Navbar from "./Navbar";

export default function CandidateTime2() {
  const signaturePadRef = useRef(null);
  const [signature, setSignature] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    clientName: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setSignature(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signaturePadRef.current) {
      setSignature(signaturePadRef.current.toDataURL());
    }
    console.log("Form Submitted:", formData, signature);
  };

  const [isModalOpenn, setIsModalOpenn] = useState(false);

  const openModall = () => {
    setIsModalOpenn(true);
  };
  const closeModall = () => {
    setIsModalOpenn(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="profile">Timesheet</div>
        <div className="row">
          {/* Full Name */}
          <div className="col-md-4">
            <div className="email-text">
              <h4>Candidate’s Full Name</h4>
            </div>
            <div className="email-input">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Position */}
          <div className="col-md-4">
            <div className="email-text">
              <h4>Position</h4>
            </div>
            <div className="email-input">
              <input
                type="text"
                name="position"
                placeholder="Please Enter your Position"
                value={formData.position}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Client's Name */}
          <div className="col-md-4">
            <div className="email-text">
              <h4>Client’s Name</h4>
            </div>
            <div className="email-input">
              <input
                type="text"
                name="clientName"
                placeholder="Enter Name"
                value={formData.clientName}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Address */}
          <div className="col-md-12">
            <div className="email-text">
              <h4>Address</h4>
            </div>
            <div className="email-input">
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="firstrow">
                <th>Day</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>Break</th>
                <th>Extra Break</th>
                <th>End Time</th>
                <th>Total Hours</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => (
                <tr key={day} className="secrow">
                  <td>{day}</td>
                  <td>DD-MM-YR</td>
                  <td>00:00 AM</td>
                  <td>00 mins</td>
                  <td>00:00 PM</td>
                  <td>00 mins</td>
                  <td>00.00 Hr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="profile">Sleep-in (if applicable)</div>

        <table className="table">
          <thead>

            <tr className='firstrow'>
              <th>DD-MM-YR</th>
              <th>Start Time</th>
              <th>End Time</th>

            </tr>
          </thead>
          <tbody>

            <tr className='secrow'>

              <td>DD-MM-YR</td>
              <td>00:00 AM</td>
              <td>00:00 AM</td>

            </tr>
            <tr>
              <td>DD-MM-YR</td>
              <td>00:00 AM</td>
              <td>00:00 AM</td>

            </tr>
            <tr>
              <td>DD-MM-YR</td>
              <td>00:00 AM</td>
              <td>00:00 AM</td>

            </tr>
            <tr>
              <td>DD-MM-YR</td>
              <td>00:00 AM</td>
              <td>00:00 AM</td>

            </tr>
            <tr>
              <td>DD-MM-YR</td>
              <td>00:00 AM</td>
              <td>00:00 AM</td>
            </tr>


          </tbody>
        </table>


        {/* Signature Section */}
        <div className="row">
          <div className="profile">Authorized by</div>
          <div className="col-md-4">
            <div className="email-text">
              <h4>Full Name</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Enter Full Name" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="email-text">
              <h4>Position</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Enter your Position" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="email-text">
              <h4>Date</h4>
            </div>
            <div className="email-input">
              <input type="date" placeholder="date" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="email-text">
              <h4>Signature</h4>
            </div>
            <div className="form-group my-3">
              <SignaturePad
                ref={signaturePadRef}
                canvasProps={{ className: "signature" }}
              />
            </div>
          </div>
          {/* <div className="col-md-4">
          
           <div
      className="email-input my-5"
      style={{
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
      />
      <label
        htmlFor="fileUpload"
        style={{
          backgroundColor: "#F5F7FA",
          color: "#999999",
          fontWeight: "400",
          padding: "27px",
          width: "100%",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
        // onMouseEnter={(e) =>
        //   (e.target.style.backgroundColor = "#45a049")
        // }
        // onMouseLeave={(e) =>
        //   (e.target.style.backgroundColor = "#4CAF50")
        // }
      >
       Upload a  Signature
      </label>
      
    </div>
          </div> */}
          <div className="col-md-4">
            <div
              className="email-input my-5"
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <input type="file" id="fileUpload" style={{ display: "none" }} />
              <label
                htmlFor="fileUpload"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F5F7FA",
                  color: "#999999",
                  fontWeight: "400",
                  padding: "13px",
                  width: "100%",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_312_49)">
                    <rect
                      x="10"
                      y="8"
                      width="22"
                      height="22"
                      rx="5"
                      fill="#1D71B7"
                    />
                  </g>
                  <path
                    d="M21.7071 12.2929C21.3166 11.9024 20.6834 11.9024 20.2929 12.2929L13.9289 18.6569C13.5384 19.0474 13.5384 19.6805 13.9289 20.0711C14.3195 20.4616 14.9526 20.4616 15.3431 20.0711L21 14.4142L26.6569 20.0711C27.0474 20.4616 27.6805 20.4616 28.0711 20.0711C28.4616 19.6805 28.4616 19.0474 28.0711 18.6569L21.7071 12.2929ZM22 25L22 13L20 13L20 25L22 25Z"
                    fill="#B4D3E0"
                  />
                  <defs>
                    <filter
                      id="filter0_d_312_49"
                      x="0"
                      y="0"
                      width="42"
                      height="42"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_312_49"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_312_49"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                Upload a Signature
              </label>
            </div>
          </div>
          <div className="edidprofile-buttons">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <div className="editprofile-button">
                  <button onClick={openModall} style={{ cursor: 'pointer' }}>Submit</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="editprofile-button">
                  <button>Cancel</button>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
      </div>

      {/* Modal for Cancellation */}
      {isModalOpenn && (
        <div className="popup-overlay">
          <div className="modal-contentt">
            <h3>Verify Your Details</h3>

            <div className="reason-containerr">

              <p style={{fontWeight:'700', fontSize:'16px', color:'#3E3E3E', lineHeight:'30px', paddingTop: '3%'}}> <strong>Note</strong>: Please review the details you have entered carefully. By clicking 'Confirm', you acknowledge that you are responsible for the accuracy of the information provided. Any errors or inaccuracies may result in consequences for which you will be liable.</p>

            </div>
            <div className='bt-reject-hire' style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <div className="popup-buttonss">
                <button
                  style={{
                    display: "block",
                    width: "159.16px",
                    height: "42px",
                    background: "#ECF3F8",
                    color: "#1D71B7",
                    borderRadius: "5px",
                    border: "none",
                    marginTop: "15px",
                    fontWeight: '700',
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="popup-buttonss">
                <button onClick={closeModall}
                  style={{
                    display: "block",
                    width: "159.16px",
                    height: "42px",
                    background: "#1D71B7",
                    color: "#fff",
                    borderRadius: "5px",
                    border: "none",
                    marginTop: "15px",
                    fontWeight: '700',
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`

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
     .modal-contentt h3{
          font-size: 24px;
              font-weight: 700;
      color: #3E3E3E;
      text-align: center;
      }
   .modal-contentt {
       margin: 15px;
  
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    width: 600px;
    
}
        .reason-containerr {
  display: flex;
  align-items: center;
}
       .popup-buttonss {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .popup-buttonss button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .popup-buttonss button:first-child {
          background: #ddd;
          color: #333;
        }
        .popup-buttonss button:last-child {
          background: #1d71b7;
          color: white;
              width: 150px;
        }
     .reason-containerr input, .reason-containerr textarea {
    margin-top: 30px;
    padding: 25px 0 50px 25px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%;
    margin-left: 14px;
}

     .modal-contenttt h3{
     text-align: center;
  margin: 30px 0;
        font-size: 24px;
            font-weight: 700;
    color: #3E3E3E;
      }
      .modal-contenttt {
          margin: 15px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        width: 600px;
      }


        .signature {
          width: 100%;
          height: 64px !important;
          background: #f5f7fa;
          border-radius: 4px;
        }
        .firstrow {
          border: 1px solid #1d71b7;
          padding: 5px;
        }

        .secrow {
          margin-top: 20px;
        }

        .table th {
          background-color: #edf4f9 !important;
          color: black;
          font-weight: bold;

          color: #1d71b7;
          font-family: Roboto;
          font-size: 14px;
          font-weight: 700;
          line-height: 15px;
        }

        .finelraw {
          background: #edf4f9;
        }

        .firstadd {
          background: #edf4f9;
        }

        .table td:nth-child(1) {
          background-color: #edf4f9 !important;
          color: #1c1c1c;
          font-weight: 700;
          padding: 19px;
        }

        .table td:nth-child(2) {
          background-color: #edf4f9 !important;
          color: #1c1c1c;
          font-weight: 700;
        }

        .table td:nth-child(3),
        .table td:nth-child(4),
        .table td:nth-child(5),
        .table td:nth-child(6) {
          color: #1d71b7;
        }

        .cancel-btn,
        .edit-btn {
          background-color: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.2em;
        }

        .cancel-btn {
          color: #007bff;
        }

        .edit-btn {
          color: #007bff;
        }

        .table-responsive {
          overflow-x: initial;
        }

        .client_bok {
          padding-bottom: 30px;
        }

        .secbox {
          max-width: 229px;
          width: 100%;
          height: 23px;
          top: 1018px;
          left: 86px;
          gap: 0px;
          opacity: 0px;
        }

        .secbox p {
          font-family: Roboto;
          font-size: 20px;
          font-weight: 800;
          line-height: 11.47px;
          color: #1d71b7;
        }

        .secbox p {
          margin-left: 140px;
          margin-top: 30px;
        }

        @media screen and (max-width: 768px) {
          .table-responsive {
            overflow-x: auto;
          }

          .table th,
          .table td {
            padding: 5px;
            font-size: 12px;
            line-height: 30px;
          }
        }

        @media screen and (max-width: 500px) {
          .table th,
          .table td {
            padding: 5px;
            font-size: 12px;
            line-height: 20px;
          }

          .table th {
            line-height: 13px;
            font-size: 12px;
          }
        }

        @media screen and (max-width: 400px) {
          .secbox p {
            margin-left: 10px;
            margin-top: 30px;
          }
        }
      `}</style>
    </div>
  );
}


