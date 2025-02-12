import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ClintWebPage2() {
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
                                        Post a job</span>
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
      <div className="container">
        <div className="dashbord-text">
          <h3>Permanent Jobs</h3>
        </div>
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
                <button data-id="model" data-target="#model" >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>

        <Tabs>
          <div className='permanent-job-tab-clint-webpg2'>
            <TabList>
              <Tab><p>Open and paused    (6)</p> </Tab>
              <Tab><p>Expired (6)</p></Tab>
              <Tab><p>Pending for Review  (10)</p></Tab>
            </TabList>
          </div>
          <div className="container">
                <div className="permanent_job_dropdown">
                    <div className="btn-group">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Date Posted
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
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
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
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
                            Pay
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
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
                            Status
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                            <li>
                                   <Link to={'/'} className="dropdown-item" >
                                    Menu item
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          <TabPanel>
            <div className="clintwebpage2-sec2">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clientweb-text1">
                      <h3>Sales Executive</h3>
                      <p>Denning House, Ge...</p>
                      <p>Posted: February 5, 2024 </p>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Active</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Awaiting</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      <Link to='/webpage4'><p>Hired</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2">
                  <div className="btn-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Open
                      </button>
                      <ul className="dropdown-menu lk">
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Open{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Expired{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                           Paused{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 menu-icon">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                 
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="clintwebpage2-sec2">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clientweb-text1">
                      <h3>Sales Executive</h3>
                      <p>Denning House, Ge...</p>
                      <p>Posted: February 5, 2024 </p>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Active</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Awaiting</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      <Link to='/webpage4'><p>Hired</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="btn-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Open
                      </button>
                      <ul className="dropdown-menu lk">
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Open{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Expired{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                           Paused{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 menu-icon">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="clintwebpage2-sec2">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clientweb-text1">
                      <h3>Sales Executive</h3>
                      <p>Denning House, Ge...</p>
                      <p>Posted: February 5, 2024 </p>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Active</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Awaiting</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      <Link to='/webpage4'><p>Hired</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2">
                  <div className="btn-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Open
                      </button>
                      <ul className="dropdown-menu lk">
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Open{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Expired{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                           Paused{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 menu-icon">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>

          </TabPanel>

          <TabPanel>
            <div className="clintwebpage2-sec2">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clientweb-text1">
                      <h3>Sales Executive</h3>
                      <p>Denning House, Ge...</p>
                      <p>Posted: February 5, 2024 </p>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Active</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Awaiting</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      <Link to='/webpage4'><p>Hired</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="btn-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Open
                      </button>
                      <ul className="dropdown-menu lk">
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Edit Job{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            View job details{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            View public job page{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 menu-icon">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="clintwebpage2-sec2">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clientweb-text1">
                      <h3>Sales Executive</h3>
                      <p>Denning House, Ge...</p>
                      <p>Posted: February 5, 2024 </p>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Active</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Awaiting</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      <Link to='/webpage4'><p>Hired</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="btn-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Open
                      </button>
                      <ul className="dropdown-menu lk">
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Edit Job{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            View job details{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            View public job page{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 menu-icon">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="clintwebpage2-sec2">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="clientweb-text1">
                      <h3>Sales Executive</h3>
                      <p>Denning House, Ge...</p>
                      <p>Posted: February 5, 2024 </p>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Active</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      <Link to='/webpage4'><p>Awaiting</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      <Link to='/webpage4'><p>Hired</p></Link>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="btn-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Open
                      </button>
                      <ul className="dropdown-menu lk">
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            Edit Job{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            View job details{" "}
                          </Link>
                        </li>
                        <li>
                               <Link to={'/'} className="dropdown-item" >
                            View public job page{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1 menu-icon">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
              </div>
            </div>

          </TabPanel>
        </Tabs>

      </div>


      <style jsx>{`
      .clientweb-text1 h3 {
    padding-bottom: 12px;
    font-size: 16px;
    font-weight: 700;
    color: #1D71B7;
    padding-top: 20px;
    border-bottom: 1px dotted;
}
    .col-md-2.clint-box {
    background-color: white;
    margin: 0px -3px;
    border-radius: 10px;
 
    margin: 11px 0px 14px 0px;
}
    
      button.ref-btt {
    background: #1D71B7;
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 42px;
        color: #FFFFFF;
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 700;
}
        .detail-events {
          display: flex;
          justify-content: space-between;
          background-color: white;
          padding: 25px 35px;
          border-top: 2px solid #b4d3e0;
          border-bottom: 1px solid #b4d3e0;
        }

        /* Style for alternating colors */
        .detail-events:nth-child(odd) {
          background-color: white;
        }

        .detail-events:nth-child(even) {
          background-color: #edf4f9;
        }

        .detail-events:hover {
          width: 100%;
        }

        .row.detial-even:hover {
          background-color: none !important;
        }
      `}</style>



    </div>
  );
}
export default ClintWebPage2;
