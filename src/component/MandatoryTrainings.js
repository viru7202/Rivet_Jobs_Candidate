import React, { useState } from "react";
import Navbar from "./Navbar";
import { Form, Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { FaEye, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";

function MandatoryTrainings() {
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
          <h3>Mandatory Trainings :</h3>
        </div>
        <div className="container-fluid ">
          <div className="row w-100">
            <div className="col-md-2 col-sm-12 col-xs-12"></div>
            <div className="col-lg-2 ">
              <div className="dashbord-text">
                <p
                  style={{
                    color: "#1D71B7",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Select Training :
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group ">
                <div className="custom-select-container">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Document"
                  />
                  <div className="training-options mt-2">
                    <div className="d-flex justify-content-between">
                      <span className="select-all">Select All</span>
                      <span className="clear">Clear</span>
                    </div>
                    <Form.Check
                      type="checkbox"
                      label="Fire and Safety"
                      className="mt-2"
                    />
                    <hr />
                    <Form.Check
                      type="checkbox"
                      label="Basic Life Support"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 ">
              <Button variant="primary" className="request-training">
                Request Training
              </Button>
            </div>
          </div>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
                  <td>Updated CV</td>
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
              </tbody>
            </Table>
          </div>
        </div>
        <div className="edidprofile-buttons">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                            <Link to="/PayrollInformation">
                                <div className="editprofile-button">
                                    <button>Continue</button>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <div className="editprofile-button">
                                    <button>Save</button>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
      </div>

      <style jsx>{`
        .btn-primary {
          background-color: #1d71b7;
          border-color: #1d71b7;
          border-width: 2px;
          padding: 9px 20px;
        }
        .form-label {
          font-weight: bold;
          margin-bottom: 10px;
          display: block;
        }
        .form-check-input[type="checkbox"] {
          border-radius: 0.25em;
          height: auto;
          margin-left: 0;
        }
        .form-group label {
          padding: 5px 0 0 40px;
          display: block;
          font-size: 15px;
          margin-bottom: 5px;
        }
        .form-group {
          display: flex;
          flex-direction: row;
          gap: 12px;
          width: 100%;
        }
        .custom-select-container {
          background: #f9f9f9;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          width: 309px;
        }
        .training-options {
          font-size: 14px;
        }
        .select-all,
        .clear {
          cursor: pointer;
          font-size: 14px;
          color: #1d71b7;
        }
        .select-all:hover,
        .clear:hover {
          text-decoration: underline;
        }
        .request-training {
          height: 40px;
          width: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          margin-top: 50px;
        }
        h3 {
          font-weight: bold;
          color: #333;
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
        .badge {
          padding: 5px 10px;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}

export default MandatoryTrainings;
