import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, NavLink } from "react-router-dom";

export default function LocamjobVacancies() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><img src="assets/img/rivetcare_logo.png" alt="" /></Link>

          <div className="nav-bar-top-section">
            <div className="notification">
              <i class="fa-regular fa-bell" style={{ color: '#1d71b7' }}></i>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul> */}

              <div className="ref-bt">
                <button className="ref-btt">
                  <img src="Vector (12).png" alt="" style={{ paddingRight: '10px' }} />
                  <span style={{ position: "relative", top: '-2px' }}>
                    Add Vacancies</span>
                </button>
              </div>

              <form className="d-flex" role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link to={'/'} className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="profilenav">
                        <div className="pic">
                          <img src="assets/img/provider/provider-02.jpg" alt="" />
                        </div>
                        <div className="profiletext">
                          <h6><b>John Smith</b></h6>
                          <p>Demo user</p>
                        </div>
                        <div className="aero"><i class="fa-solid fa-caret-down"></i></div>
                      </div>
                    </Link>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/candidateprofile"><i class="fa-solid fa-user"></i>Profile</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa fa-briefcase" aria-hidden="true"></i>My Jobs</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa-solid fa-users"></i>Interview</NavLink></li>

                      <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa-solid fa-gear"></i>Setting</NavLink></li>
                      <li><Link to={'/'} className="dropdown-item" ><i class="fa-solid fa-right-from-bracket"></i>Sign out</Link></li>
                    </ul>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="container dashbord-text">
        <h3>Vacancies</h3>
      </div>

      <Tabs>
        <div className="permanent-job-tab-clint-webpg2">
          <TabList>
            <Tab>
              <p>Open (6)</p>
            </Tab>
            <Tab>
              <p>Filled (6)</p>
            </Tab>
            <Tab>
              <p>Cancelled (10)</p>
            </Tab>
          </TabList>

        </div>

        <TabPanel>

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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Client / Business Unit</th>
                  <th>Job</th>
                  <th>Booked Period</th>
                  <th>Shift Type</th>
                  <th>Required</th>
                  <th> <img src="application 1.png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th> <img src="Vector (1).png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th> <img src="choice 1.png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th> <img src="Vector (2).png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th>Edit</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care <br />  Sue Barker</td>
                  <td>Training Session</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>Day / Night</td>
                  <td>0 | 1</td>
                  <td>5</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>
                    <img
                      src="Vector (11).png"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <img
                      src="assets/img/Vector (3).png"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="vacancies">
            <div className="permanent_job_dropdown">
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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                  Candidate
                </button>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                  Post Date
                </button>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                  Booking Period
                </button>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                  Booked By
                </button>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
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
                  <td>
                    8/03/24 09:15am <br /> 8/03/24 12:00pm
                  </td>
                  <td>02/03/24 09:15am</td>
                  <td>
                    <img
                      src="assets/img/Vector (3).png"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <img
                      src="Vector (11).png"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>

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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
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
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/"} className="dropdown-item">
                      Menu item
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Client / Business Unit</th>
                  <th>Job</th>
                  <th>Booked Period</th>
                  <th>Shift Type</th>
                  <th>Required</th>
                  <th> <img src="application 1.png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th> <img src="Vector (1).png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th> <img src="choice 1.png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th> <img src="Vector (2).png" alt="" style={{ cursor: "pointer" }} /></th>
                  <th>Reason of Canceling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000584...</td>
                  <td>Lifeways health care <br />  Sue Barker</td>
                  <td>Training Session</td>
                  <td>8/03/24 09:15am <br /> 8/03/24 12:00pm</td>
                  <td>Day / Night</td>
                  <td>0 | 1</td>
                  <td>5</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>Cancel reason</td>

                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>

      <style jsx>{`
     
      button.ref-btt {
 background: #1D71B7;
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 55px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 700;
}
    `}</style>
    </div>
  );
}
