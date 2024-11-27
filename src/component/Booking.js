import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from "react-router-dom";

function Booking() {
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
                  Miles
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

            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Booked By</th>
                  <th>Client</th>
                  <th>Business Unit</th>
                  <th>Job</th>
                  <th>Shift Type</th>
                  <th>Booked Period</th>
                  <th>Created Date</th>
                  <th>Hourly Pay</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care West End - London Medi...</td>
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...)</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am</td>
                  <td>12345</td>
                  <td>
                    <img src="assets/img/Vector (3).png" alt="" onClick={openModal} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>


                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care West End - London Medi...</td>
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...)</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am</td>
                  <td>12345</td>
                  <td>
                    <img src="assets/img/Vector (3).png" alt="" onClick={openModal} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care West End - London Medi...</td>
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...)</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am</td>
                  <td>12345</td>
                  <td>
                    <img src="assets/img/Vector (3).png" alt="" onClick={openModal} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care West End - London Medi...</td>
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...)</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am</td>
                  <td>12345</td>
                  <td>
                    <img src="assets/img/Vector (3).png" alt="" onClick={openModal} style={{ cursor: 'pointer' }} />
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
                  Miles
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
              {/* 
<div className="btn-group">
<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Education
</button>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">Menu item</a></li>
<li><a className="dropdown-item" href="#">Menu item</a></li>
<li><a className="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>

<div className="btn-group">
<div className='more-filter'>
<p>More Filters</p>
</div>
</div> */}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Booked By</th>
                  {/* <th>Candidate</th> */}
                  <th>Client </th>
                  <th>Business Unit</th>
                  <th>Job</th>
                  <th>Shift Type</th>
                  <th>Booked Period</th>
                  <th>Created Date</th>
                  <th>Hourly Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td class="your-class-name">Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>



                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>


                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>



                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
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
                  Miles
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
              {/* 
<div className="btn-group">
<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Education
</button>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">Menu item</a></li>
<li><a className="dropdown-item" href="#">Menu item</a></li>
<li><a className="dropdown-item" href="#">Menu item</a></li>
</ul>
</div>

<div className="btn-group">
<div className='more-filter'>
<p>More Filters</p>
</div>
</div> */}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Booked By</th>
                  {/* <th>Candidate</th> */}
                  <th>Client </th>
                  <th>Business Unit</th>
                  <th>Job</th>
                  <th>Shift Type</th>
                  <th>Booked Period</th>
                  <th>Created Date</th>
                  <th>Hourly Pay</th>
                  <th>Reason for Cancellation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td class="your-class-name">Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>


                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>

                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>



                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>
                </tr>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care
                    West End - London Medi...
                  </td>
                  {/* <td>Training Session</td> */}
                  <td>8 March 2024 - 09:00</td>
                  <td>Parkview(NI) (#100...</td>
                  <td>Healthcare Assis...</td>
                  <td>Day / Night </td>
                  <td>8/03/24 09:15am <br></br>8/03/24 12:00pm</td>
                  <td>02/03/24 09:15am </td>
                  <td>12345</td>
                  <td>This is reason for cancel</td>
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
          border-radius: 5px;
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
      `}</style>
    </div>
  );
}

export default Booking;




