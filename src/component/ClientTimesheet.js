import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import Navbar from "./Navbar";

export default function ClientTimesheet() {
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
                    <div className="edidprofile-buttons">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <div className="editprofile-button">
                                    <button
                                        style={{


                                            backgroundColor: "#24A56F",
                                            color: "white",
                                            borderRadius: "5px",
                                            border: "none",
                                        }}
                                    >
                                        Accept
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="editprofile-button">
                                    <button
                                        style={{
                                            backgroundColor: "#CE4747", color: "white", borderRadius: "5px", border: "none",
                                        }} onClick={openModal} >
                                        Rejecte
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
                {/* Modal for Cancellation */}
                {isModalOpen && (
                    <div className="popup-overlay">
                        <div className="modal-content">
                            <h3>Give Reason of Rejection</h3>
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
                                <button onClick={closeModal}>Cancel</button>
                                <button onClick={confirmCancellation}>Confirm</button>
                            </div>



                        </div>
                    </div>
                )}
                {/* Submit Button */}
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
  display: flex;
      padding-top: 30px;
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
            .reason-container input, .reason-container textarea {
          margin-top: 5px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
          width: 294px;
              margin-left: 14px;
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


