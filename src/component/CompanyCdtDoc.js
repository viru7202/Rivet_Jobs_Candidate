import React, { useState } from "react";
import Navbar from "./Navbar";
import { Table, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { FaEye, FaUpload } from "react-icons/fa";

function CompanyCdtDoc() {
  const [files, setFiles] = useState({});
  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [key]: file,
      }));
      alert(`File "${file.name}" uploaded successfully for ${key}`);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="dashbord-text">
          <h3>Compliance Documents :</h3>
        </div>
        <div className="table-responsive">
          <div className="vacancies">
            <Table>
              <thead>
                <tr>
                  <th>Documents Name</th>
                  <th>Number</th>
                  <th>Issue Date</th>
                  <th>Expiry Date</th>
                  <th>Action</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Updated CV</td>
                  <td></td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <FormControl type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-success">Submitted</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Application Form</td>
                  <td>
                    <Form.Control type="text" placeholder="01236521" disabled />
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <Button variant="primary" size="sm">
                      Complete
                    </Button>
                  </td>
                  <td>
                    <span className="badge bg-danger">Rejected</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Passport</td>
                  <td>
                    <Form.Control type="text" placeholder="01236522" disabled />
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-secondary">Approved</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Do you require a Visa?</td>
                  <td colSpan={5}>
                    <Form.Select style={{ width: "196px" }}>
                      <option>Yes</option>
                      <option>No</option>
                    </Form.Select>
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td>Visa Details</td>
                  <td>
                    <Form.Control type="text" placeholder="01236524" disabled />
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-success">Submitted</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>BRP Share Code</td>
                  <td>
                    <Form.Control type="text" placeholder="01236525" disabled />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Do you have UK valid driving license?</td>

                  <td colSpan={5}>
                    <Form.Control
                      type="text"
                      placeholder="01236526"
                      disabled
                      style={{ width: "196px" }}
                    />
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td>Driving License</td>
                  <td>
                    <Form.Control type="text" placeholder="01236527" disabled />
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-secondary">Approved</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>NISCC</td>
                  <td>
                    <Form.Control type="text" placeholder="01236528" disabled />
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-danger">Rejected</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Access NI</td>
                  <td>
                    <Form.Control type="text" placeholder="01236529" disabled />
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <Form.Control type="date" placeholder="DD/MM/YYYY" />
                    </InputGroup>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-danger">Rejected</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>
                    Don’t you have an Access NI?
                    <br></br> Request one with our Team. Click On...
                  </td>

                  <td colSpan={5}>
                    <Form.Control
                      type="text"
                      placeholder="REQUEST ANI"
                      disabled
                      style={{
                        width: "196px",
                        background: "#1D71B7",
                        border: "none",
                        color: "white",
                        textAlign: "center",
                      }}
                    />
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td>Reference 1</td>
                  <td></td>
                  <td></td>
                  <td>
                    <h3>Only for Admin</h3>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-secondary">Received</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Reference 2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-success">Requested</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Reference 3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <span className="badge bg-success">Requested</span>
                  </td>
                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>

                <tr>
                  <td>Proof Of Address</td>

                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td>
                    <label className="btn btn-primary btn-sm">
                      <FaUpload /> Upload
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handleFileChange(e, "Practical Trainings")
                        }
                      />
                    </label>
                  </td>
                  <td colSpan={3}></td>

                  <td>
                    <img src="View.png" alt="View Document" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="edidprofile-buttons">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <div class="editprofile-button">
                <button>Continue</button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="editprofile-button">
                <button>Save</button>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 50px;
        }
        h3 {
          font-weight: bold;
          color: #333;
        }
        .badge {
          padding: 5px 10px;
          font-size: 0.9rem;
        }
        .btn-primary {
          background-color: #1d71b7;
          border-color: #1d71b7;
          border-width: 2px;
          padding: 9px 20px;
        }
        .input-group .form-control {
          background-color: #dddddd;
          height: 40px;
          border: 1px solid #a4a4a4;
        }
        .form-control:disabled {
          background-color: #dddddd;
          opacity: 1;
          border: 1px solid #a4a4a4;
        }
        .form-select {
          border: 1px solid #a4a4a4;
          display: block;
          width: 100%;
          padding: 0.375rem 2.25rem 0.375rem 0.95rem;
          -moz-padding-start: calc(0.75rem - 3px);
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.5;
          color: #212529;
          background-color: #dddddd;
          background-image: url(
            data:image/svg + xml,
            %3csvgxmlns="http://www.w3.org/2000/svg"viewBox=""%3e%3cpathfill="none"stroke="%23343a40"stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="m2 5 6 6 6-6"/%3e%3c/svg%3e
          );
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 16px 12px;

          border-radius: 0.375rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        .bg-success {
          --bs-bg-opacity: 1;
          background-color: rgb(25 135 80 / 0%) !important;
          color: #1d71b7;
          border: 1px solid #1d71b7;
        }
        .bg-danger {
          color: red;
          --bs-bg-opacity: 1;
          background-color: rgb(25 135 80 / 0%) !important;
          border: 1px solid;
        }
        .bg-secondary {
          border: 1px solid;
          color: #256425;
          --bs-bg-opacity: 1;
          background-color: rgb(25 135 80 / 0%) !important;
        }
      `}</style>
    </>
  );
}

export default CompanyCdtDoc;
