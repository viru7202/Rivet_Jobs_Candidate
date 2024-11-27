import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from "react-router-dom";

export default function ClientTime1() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    navigate("/clintwebpage2");
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
            <Tab><p>Reveiw (8)</p></Tab>
            <Tab><p>Approved  (6)</p></Tab>
            <Tab><p>Rejected (1)</p></Tab>
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
                  <th>Reason For Booking</th>
                  <th>Permission</th>
                  <th>Edit</th>
                  <th>Review</th>
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
                  <td>Vacancy Cover</td>
                  <td>
                    <button
                      style={{
                        display: "block",
                        width: "100px",
                        height: "29px",
                        backgroundColor: "#24A56F",
                        color: "white",
                        borderRadius: "5px",
                        border: "none",
                      }}
                    >
                      Accept
                    </button>
                    <button
                      style={{
                        display: "block",
                        width: "100px",
                        height: "29px",
                        background: "#CE4747",
                        color: "white",
                        borderRadius: "5px",
                        border: "none",
                        marginTop: "15px",
                      }}
                    >
                      Rejecte
                    </button>
                  </td>
                  <td>
                    <img src="Vector (11).png" alt=""/>
                  </td>
                  <td width={"45px"}>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.503 11.002C4.37039 11.002 4.24321 11.0547 4.14945 11.1484C4.05568 11.2422 4.003 11.3694 4.003 11.502V14.502C4.003 14.6346 4.05568 14.7618 4.14945 14.8556C4.24321 14.9493 4.37039 15.002 4.503 15.002C4.63561 15.002 4.76279 14.9493 4.85655 14.8556C4.95032 14.7618 5.003 14.6346 5.003 14.502V14.002H5.5C5.89782 14.002 6.27936 13.844 6.56066 13.5627C6.84196 13.2814 7 12.8998 7 12.502C7 12.1042 6.84196 11.7226 6.56066 11.4413C6.27936 11.16 5.89782 11.002 5.5 11.002H4.503ZM5.5 13.002H5.003V12.002H5.5C5.63261 12.002 5.75979 12.0547 5.85355 12.1484C5.94732 12.2422 6 12.3694 6 12.502C6 12.6346 5.94732 12.7618 5.85355 12.8556C5.75979 12.9493 5.63261 13.002 5.5 13.002ZM11.998 11.502C11.998 11.3694 12.0507 11.2422 12.1444 11.1484C12.2382 11.0547 12.3654 11.002 12.498 11.002H14.003C14.1356 11.002 14.2628 11.0547 14.3566 11.1484C14.4503 11.2422 14.503 11.3694 14.503 11.502C14.503 11.6346 14.4503 11.7618 14.3566 11.8556C14.2628 11.9493 14.1356 12.002 14.003 12.002H12.997L12.996 13.004H14.003C14.1356 13.004 14.2628 13.0567 14.3566 13.1504C14.4503 13.2442 14.503 13.3714 14.503 13.504C14.503 13.6366 14.4503 13.7638 14.3566 13.8576C14.2628 13.9513 14.1356 14.004 14.003 14.004H12.996L12.998 14.501C12.9981 14.5667 12.9853 14.6317 12.9603 14.6924C12.9353 14.7531 12.8986 14.8083 12.8523 14.8548C12.7587 14.9488 12.6316 15.0017 12.499 15.002C12.3664 15.0023 12.2391 14.9498 12.1452 14.8563C12.0512 14.7627 11.9983 14.6356 11.998 14.503L11.995 13.505V13.503L11.998 11.502ZM8.5 11.002H8.998C9.52843 11.002 10.0371 11.2127 10.4122 11.5878C10.7873 11.9629 10.998 12.4716 10.998 13.002C10.998 13.5324 10.7873 14.0411 10.4122 14.4162C10.0371 14.7913 9.52843 15.002 8.998 15.002H8.5C8.36739 15.002 8.24021 14.9493 8.14645 14.8556C8.05268 14.7618 8 14.6346 8 14.502V11.502C8 11.3694 8.05268 11.2422 8.14645 11.1484C8.24021 11.0547 8.36739 11.002 8.5 11.002ZM9 14.002C9.26522 14.002 9.51957 13.8966 9.70711 13.7091C9.89464 13.5216 10 13.2672 10 13.002C10 12.7368 9.89464 12.4824 9.70711 12.2949C9.51957 12.1074 9.26522 12.002 9 12.002V14.002ZM9 6V0H3C2.46957 0 1.96086 0.210714 1.58579 0.585786C1.21071 0.960859 1 1.46957 1 2V8.668C0.409 8.949 0 9.552 0 10.25V15.75C0 16.448 0.409 17.05 1 17.332V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17.332C17.591 17.051 18 16.448 18 15.75V10.25C18 9.552 17.591 8.95 17 8.668V8H11C10.4696 8 9.96086 7.78929 9.58579 7.41421C9.21071 7.03914 9 6.53043 9 6ZM1.75 10H16.25C16.3163 10 16.3799 10.0263 16.4268 10.0732C16.4737 10.1201 16.5 10.1837 16.5 10.25V15.75C16.5 15.8163 16.4737 15.8799 16.4268 15.9268C16.3799 15.9737 16.3163 16 16.25 16H1.75C1.6837 16 1.62011 15.9737 1.57322 15.9268C1.52634 15.8799 1.5 15.8163 1.5 15.75V10.25C1.5 10.1837 1.52634 10.1201 1.57322 10.0732C1.62011 10.0263 1.6837 10 1.75 10ZM10.5 6V0.5L16.5 6.5H11C10.8674 6.5 10.7402 6.44732 10.6464 6.35355C10.5527 6.25979 10.5 6.13261 10.5 6Z"
                        fill="#1D71B7"
                      />
                    </svg>
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
                  <th>Reason For Booking</th>
                  <th>Approved Timesheet</th>
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
                  <td>Vacancy Cover</td>
                  <td width={"45px"}>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.503 11.002C4.37039 11.002 4.24321 11.0547 4.14945 11.1484C4.05568 11.2422 4.003 11.3694 4.003 11.502V14.502C4.003 14.6346 4.05568 14.7618 4.14945 14.8556C4.24321 14.9493 4.37039 15.002 4.503 15.002C4.63561 15.002 4.76279 14.9493 4.85655 14.8556C4.95032 14.7618 5.003 14.6346 5.003 14.502V14.002H5.5C5.89782 14.002 6.27936 13.844 6.56066 13.5627C6.84196 13.2814 7 12.8998 7 12.502C7 12.1042 6.84196 11.7226 6.56066 11.4413C6.27936 11.16 5.89782 11.002 5.5 11.002H4.503ZM5.5 13.002H5.003V12.002H5.5C5.63261 12.002 5.75979 12.0547 5.85355 12.1484C5.94732 12.2422 6 12.3694 6 12.502C6 12.6346 5.94732 12.7618 5.85355 12.8556C5.75979 12.9493 5.63261 13.002 5.5 13.002ZM11.998 11.502C11.998 11.3694 12.0507 11.2422 12.1444 11.1484C12.2382 11.0547 12.3654 11.002 12.498 11.002H14.003C14.1356 11.002 14.2628 11.0547 14.3566 11.1484C14.4503 11.2422 14.503 11.3694 14.503 11.502C14.503 11.6346 14.4503 11.7618 14.3566 11.8556C14.2628 11.9493 14.1356 12.002 14.003 12.002H12.997L12.996 13.004H14.003C14.1356 13.004 14.2628 13.0567 14.3566 13.1504C14.4503 13.2442 14.503 13.3714 14.503 13.504C14.503 13.6366 14.4503 13.7638 14.3566 13.8576C14.2628 13.9513 14.1356 14.004 14.003 14.004H12.996L12.998 14.501C12.9981 14.5667 12.9853 14.6317 12.9603 14.6924C12.9353 14.7531 12.8986 14.8083 12.8523 14.8548C12.7587 14.9488 12.6316 15.0017 12.499 15.002C12.3664 15.0023 12.2391 14.9498 12.1452 14.8563C12.0512 14.7627 11.9983 14.6356 11.998 14.503L11.995 13.505V13.503L11.998 11.502ZM8.5 11.002H8.998C9.52843 11.002 10.0371 11.2127 10.4122 11.5878C10.7873 11.9629 10.998 12.4716 10.998 13.002C10.998 13.5324 10.7873 14.0411 10.4122 14.4162C10.0371 14.7913 9.52843 15.002 8.998 15.002H8.5C8.36739 15.002 8.24021 14.9493 8.14645 14.8556C8.05268 14.7618 8 14.6346 8 14.502V11.502C8 11.3694 8.05268 11.2422 8.14645 11.1484C8.24021 11.0547 8.36739 11.002 8.5 11.002ZM9 14.002C9.26522 14.002 9.51957 13.8966 9.70711 13.7091C9.89464 13.5216 10 13.2672 10 13.002C10 12.7368 9.89464 12.4824 9.70711 12.2949C9.51957 12.1074 9.26522 12.002 9 12.002V14.002ZM9 6V0H3C2.46957 0 1.96086 0.210714 1.58579 0.585786C1.21071 0.960859 1 1.46957 1 2V8.668C0.409 8.949 0 9.552 0 10.25V15.75C0 16.448 0.409 17.05 1 17.332V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17.332C17.591 17.051 18 16.448 18 15.75V10.25C18 9.552 17.591 8.95 17 8.668V8H11C10.4696 8 9.96086 7.78929 9.58579 7.41421C9.21071 7.03914 9 6.53043 9 6ZM1.75 10H16.25C16.3163 10 16.3799 10.0263 16.4268 10.0732C16.4737 10.1201 16.5 10.1837 16.5 10.25V15.75C16.5 15.8163 16.4737 15.8799 16.4268 15.9268C16.3799 15.9737 16.3163 16 16.25 16H1.75C1.6837 16 1.62011 15.9737 1.57322 15.9268C1.52634 15.8799 1.5 15.8163 1.5 15.75V10.25C1.5 10.1837 1.52634 10.1201 1.57322 10.0732C1.62011 10.0263 1.6837 10 1.75 10ZM10.5 6V0.5L16.5 6.5H11C10.8674 6.5 10.7402 6.44732 10.6464 6.35355C10.5527 6.25979 10.5 6.13261 10.5 6Z"
                        fill="#1D71B7"
                      />
                    </svg>
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
                  <th>Edit</th>
                  <th>PDF</th>
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
                  <td>Vacancy Cover</td>
                  <td>
                    <img src="Vector (11).png" alt=""/>
                  </td>
                  <td width={"45px"}>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.503 11.002C4.37039 11.002 4.24321 11.0547 4.14945 11.1484C4.05568 11.2422 4.003 11.3694 4.003 11.502V14.502C4.003 14.6346 4.05568 14.7618 4.14945 14.8556C4.24321 14.9493 4.37039 15.002 4.503 15.002C4.63561 15.002 4.76279 14.9493 4.85655 14.8556C4.95032 14.7618 5.003 14.6346 5.003 14.502V14.002H5.5C5.89782 14.002 6.27936 13.844 6.56066 13.5627C6.84196 13.2814 7 12.8998 7 12.502C7 12.1042 6.84196 11.7226 6.56066 11.4413C6.27936 11.16 5.89782 11.002 5.5 11.002H4.503ZM5.5 13.002H5.003V12.002H5.5C5.63261 12.002 5.75979 12.0547 5.85355 12.1484C5.94732 12.2422 6 12.3694 6 12.502C6 12.6346 5.94732 12.7618 5.85355 12.8556C5.75979 12.9493 5.63261 13.002 5.5 13.002ZM11.998 11.502C11.998 11.3694 12.0507 11.2422 12.1444 11.1484C12.2382 11.0547 12.3654 11.002 12.498 11.002H14.003C14.1356 11.002 14.2628 11.0547 14.3566 11.1484C14.4503 11.2422 14.503 11.3694 14.503 11.502C14.503 11.6346 14.4503 11.7618 14.3566 11.8556C14.2628 11.9493 14.1356 12.002 14.003 12.002H12.997L12.996 13.004H14.003C14.1356 13.004 14.2628 13.0567 14.3566 13.1504C14.4503 13.2442 14.503 13.3714 14.503 13.504C14.503 13.6366 14.4503 13.7638 14.3566 13.8576C14.2628 13.9513 14.1356 14.004 14.003 14.004H12.996L12.998 14.501C12.9981 14.5667 12.9853 14.6317 12.9603 14.6924C12.9353 14.7531 12.8986 14.8083 12.8523 14.8548C12.7587 14.9488 12.6316 15.0017 12.499 15.002C12.3664 15.0023 12.2391 14.9498 12.1452 14.8563C12.0512 14.7627 11.9983 14.6356 11.998 14.503L11.995 13.505V13.503L11.998 11.502ZM8.5 11.002H8.998C9.52843 11.002 10.0371 11.2127 10.4122 11.5878C10.7873 11.9629 10.998 12.4716 10.998 13.002C10.998 13.5324 10.7873 14.0411 10.4122 14.4162C10.0371 14.7913 9.52843 15.002 8.998 15.002H8.5C8.36739 15.002 8.24021 14.9493 8.14645 14.8556C8.05268 14.7618 8 14.6346 8 14.502V11.502C8 11.3694 8.05268 11.2422 8.14645 11.1484C8.24021 11.0547 8.36739 11.002 8.5 11.002ZM9 14.002C9.26522 14.002 9.51957 13.8966 9.70711 13.7091C9.89464 13.5216 10 13.2672 10 13.002C10 12.7368 9.89464 12.4824 9.70711 12.2949C9.51957 12.1074 9.26522 12.002 9 12.002V14.002ZM9 6V0H3C2.46957 0 1.96086 0.210714 1.58579 0.585786C1.21071 0.960859 1 1.46957 1 2V8.668C0.409 8.949 0 9.552 0 10.25V15.75C0 16.448 0.409 17.05 1 17.332V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17.332C17.591 17.051 18 16.448 18 15.75V10.25C18 9.552 17.591 8.95 17 8.668V8H11C10.4696 8 9.96086 7.78929 9.58579 7.41421C9.21071 7.03914 9 6.53043 9 6ZM1.75 10H16.25C16.3163 10 16.3799 10.0263 16.4268 10.0732C16.4737 10.1201 16.5 10.1837 16.5 10.25V15.75C16.5 15.8163 16.4737 15.8799 16.4268 15.9268C16.3799 15.9737 16.3163 16 16.25 16H1.75C1.6837 16 1.62011 15.9737 1.57322 15.9268C1.52634 15.8799 1.5 15.8163 1.5 15.75V10.25C1.5 10.1837 1.52634 10.1201 1.57322 10.0732C1.62011 10.0263 1.6837 10 1.75 10ZM10.5 6V0.5L16.5 6.5H11C10.8674 6.5 10.7402 6.44732 10.6464 6.35355C10.5527 6.25979 10.5 6.13261 10.5 6Z"
                        fill="#1D71B7"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>

    </div>
  )
}
