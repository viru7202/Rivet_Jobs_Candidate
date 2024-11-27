import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from "react-router-dom";

function Clientbooking() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    navigate("/clintwebpage2");
  };

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

  // popup2
  const [isModalOpennn, setIsModalOpennn] = useState(false);

  const openModalll = () => {
    setIsModalOpennn(true);
  };
  const closeModalll = () => {
    setIsModalOpennn(false);
  };


  // popup3
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
      <div className="dashbord-text">
        <h3>Booking</h3>
      </div>

      <div className='webpage2'>
        <div className="webpage-1">
          <div className="main-inputs">
            <div className="inputs">
              <div className="input1">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <input type="text" placeholder="Job title, keywords or company" />
              </div>
              <div className="input2">
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" placeholder="Location or postcode" />
              </div>
              <div className="clint-search-button">
                <button data-id="model" data-target="#model" onClick={handleClick}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs>
        <div className='permanent-job-tab-clint-webpg2'>
          <TabList>
            <Tab><p>Active (6)</p></Tab>
            <Tab><p>Expired (6)</p></Tab>
            <Tab><p>Revoked (10)</p></Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="vacancies">
            <div className='permanent_job_dropdown'>


              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Client
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business Unit
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Candidate
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Post Date
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booking Period
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booked By
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Booked By</th>
                  <th>Candidate</th>
                  <th>Client</th>
                  <th>Business Unit</th>
                  <th>Job</th>
                  <th>Booked Period</th>
                  <th>Created Date</th>
                  <th>Cancel</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Sue Barker</td>
                  <td>God’stime ... </td>
                  <td>Beaumount Care Ho..</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am</td>
                  <td>
                    <img src="assets/img/Vector (3).png" alt="" onClick={openModal} style={{ cursor: 'pointer' }} />
                  </td>
                  <td>
                    <img src="Vector (11).png" alt="" onClick={openModalll} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>



              </tbody>
            </table>
          </div>
        </TabPanel>


        <TabPanel>
          <div className="vacancies">
            <div className='permanent_job_dropdown'>


              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Client
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business Unit
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Candidate
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Post Date
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booking Period
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booked By
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Booked By</th>
                  <th>Candidate</th>
                  <th>Client</th>
                  <th>Business Unit</th>
                  <th>Job</th>
                  <th>Booked Period</th>
                  <th>Created Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Sue Barker</td>
                  <td>God’stime ... </td>
                  <td>Beaumount Care Ho..</td>
                  <td>Beaumount Care Ho...</td>
                  <td>Healthcare Assis...</td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="vacancies">
            <div className='permanent_job_dropdown'>


              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Client
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business Unit
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Candidate
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Post Date
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booking Period
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Booked By
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Booked By</th>
                  <th>Candidate</th>
                  <th>Client</th>
                  <th>Business Unit</th>
                  <th>Job</th>
                  <th>Booked Period</th>
                  <th>Created Date</th>
                  <th>Reason For Booking</th>
                  <th>Reject Reason</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Sue Barker</td>
                  <td>God’stime ... </td>
                  <td>Beaumount Care Ho..</td>
                  <td>Beaumount Care Ho...</td>
                  <td>Healthcare Assis...</td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>Test Booking</td>
                  <td>
                    <img src="Vector (7).png" alt="" onClick={openModall} style={{ cursor: 'pointer' }} />
                  </td>
                  <td>
                    <img src="Vector (11).png" alt="" onClick={openModalll} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>

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


      {/* popup3 */}
      {/* Modal for Cancellation */}
      {isModalOpennn && (
        <div className="popup-overlay">
          <div className="modal-contenttt">
            <h3>Edit Booking Date and Time</h3>

            <div className="container">
              <div className='row'>
                <div className="col-md-6">
                  <div className="email-text">
                    <h4>Start Date</h4>
                  </div>
                  <div className="job-type-date mt-3">
                    <div className="col-md-6 job-date">
                      <input
                        type="date"
                        placeholder="date"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="email-text">
                    <h4>End Date</h4>
                  </div>
                  <div className="job-type-date mt-3">
                    <div className="col-md-6 job-date">
                      <input
                        type="date"
                        placeholder="date"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="email-text">
                    <h4>Start Time</h4>
                  </div>
                  <div className="job-type-date mt-3">
                    <div className="col-md-6 job-date">
                      <input
                        type="time"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="email-text">
                    <h4>End Time</h4>
                  </div>
                  <div className="job-type-date mt-3">
                    <div className="col-md-6 job-date">
                      <input
                        type="time"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="popup-buttons">
              <button onClick={closeModalll}>Cancel</button>
              <button >Confirm</button>
            </div>
          </div>
        </div>
      )}


      {/* popup3 */}
      {/* Modal for Cancellation */}
      {isModalOpenn && (
        <div className="popup-overlay">
          <div className="modal-contentt">
            <h3>Reason for Rejection</h3>

            <div className="reason-containerr">

              <input type="text" placeholder="The Reason for rejection is..." />

            </div>
            <div className="popup-buttonss">
              <button onClick={closeModall}>Back</button>
            </div>
          </div>
        </div>
      )}


      <style jsx>{`
    .modal-content h3{
         margin: 30px 0;
        font-size: 24px;
            font-weight: 700;
    color: #3E3E3E;
    }
      .clint-search-button button {
        height: 42px;
        width: 66px;
        margin-left: 20px;
        border: none;
        background-color: #1D71B7;
        color: white;
        border-radius: 5px;
        font-weight: 600;
        margin-top: 2px;
        margin-right: 12px;
      }
.vacancies {
  padding: 0 3% 3% 3%;
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
            

      


     .modal-contentt h3{
          font-size: 24px;
              font-weight: 700;
      color: #3E3E3E;
      }
   .modal-contentt {
       margin: 15px;
    height: 307px;
    background-color: white;
    padding: 47px;
    border-radius: 10px;
    width: 600px;
    text-align: center;
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
.job-date {
    width: auto;
}
    `}</style>
    </div>
  )
}
export default Clientbooking;