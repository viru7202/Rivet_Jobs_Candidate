import React from "react";
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Link, useNavigate } from "react-router-dom";

function Vacancies() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/clintwebpage2");
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="container">
          <div className="dashbord-text">
            <h3>Vacancies</h3>
            {/* <hr/> */}
          </div>
        </div>
        <div className="webpage2">
          <div className="webpage-1">
            <div class="main-inputs">
              <div className="inputs">
                <div class="input1">
                  <i class="fa fa-briefcase" aria-hidden="true"></i>
                  <input
                    type="text"
                    placeholder="Job title, keywords or company"
                  />
                </div>
                <div className="input2">
                  <i class="fa-solid fa-location-dot"></i>
                  <input type="text" placeholder="Location or postcode" />
                </div>
                <div className="clint-search-button">
                  {/* Pass the handleClick function to onClick */}
                  <button
                    data-id="model"
                    data-target="#model"
                    onClick={handleClick}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs>
          <div className="permanent-job-tab-clint-webpg2">
            <TabList>
              <Tab>
                <p>Open (6)</p>{" "}
              </Tab>
              {/* <Tab><p>Booking (6)</p></Tab>
              <Tab><p>All Jobs (10)</p></Tab> */}
            </TabList>
          </div>
          <TabPanel></TabPanel>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>
        </Tabs>
        <div className="vacancies">
          <div className="permanent_job_dropdown">
            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Booking Period
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Client
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Miles
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business Unit
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
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
                <th>Client / Business Unit</th>
                <th>Job</th>
                <th>Booking Period </th>
                <th>Shift Type</th>
                <th>Pay Rate</th>
                <th>Created Date</th>
                <th>Apply</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                  <td>
                <Link to="/Vacanciesdetail">

                    {" "}
                    <div className="clint-search-button">
                      {" "}
                      <button data-id="model" data-target="#model">
                        Apply
                      </button>
                    </div>
                </Link>

                  </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td class="your-class-name">
                  Lifeways health care West End - London Medi...
                </td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
              <tr>
                <td>1000584...</td>
                <td>Lifeways health care West End - London Medi...</td>
                <td>Training Session</td>
                <td>8 March 2024 - 09:00</td>
                <td>Day / Night</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {" "}
                  <div className="clint-search-button">
                    {" "}
                    <button data-id="model" data-target="#model">
                      Apply
                    </button>
                  </div>
                </td>
                <td>
                  <img src="assets/img/Group (4).png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .clint-search-button button {
          height: 42px;
          width: 66px;
          margin-left: 20px;
          border: none;
          background-color: #1d71b7;
          color: white;
          border-radius: 5px;
          font-weight: 600;
          margin-top: 2px;
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
}
export default Vacancies;
