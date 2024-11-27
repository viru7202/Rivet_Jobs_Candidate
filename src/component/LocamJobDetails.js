import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Navbar from "./Navbar";
function LocamJobDetails() {
  return (
    <div>
      <Navbar />
      <div className="dashbord-text">
        <h3>Permanent Job</h3>
        {/* <hr/> */}
      </div>
      <div className="clint-webpage-1">
        <div class="clint-main-inputs">
          <div className="clint-inputs">
            <div class="clint-input1">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              <input type="text" placeholder="Job title" />
            </div>
            <div className="clint-input2">
              <i class="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Location or postcode" />
            </div>
            <div className="clint-input3">
              <i class="fa-solid fa-calendar"></i>
              <input type="text" placeholder="Location or postcode" />
            </div>
            <div className="clint-search-button">
             
                <button data-id="model" data-target="#model">
                  <i class="fa-solid fa-magnifying-glass"></i>{" "}
                </button>
             
            </div>
          </div>
        </div>
      </div>
      {/* <div className="clintwebpage-button">
            <div className="clintpage-button1">
              <button style={{ backgroundColor: '#1D71B7', color: 'white' }}>Open and paused (6)</button>
            </div>
            <div className="clintpage-button2">
              <button>Expired (6)</button>
            </div>
          </div> */}

      <div className="container">
        <Tabs>
          <div className="permanent-job-tab-clint-webpg2">
            <TabList>
              <Tab>
                <p>Open  (6)</p>{" "}
              </Tab>
              <Tab>
                <p>Closed  (6)</p>
              </Tab>
              <Tab>
                <p>Cancelled  (10)</p>
              </Tab>
            </TabList>
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
                      
                        <p>Active</p>

                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                     
                        <p>Awaiting</p>
                      
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                     
                        <p>Hired</p>
                     
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
                          <a className="dropdown-item" href="#">
                            Edit Job{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View job details{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View public job page{" "}
                          </a>
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
                      
                        <p>Active</p>
                      
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      
                        <p>Awaiting</p>
                      
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      
                        <p>Hired</p>
                      
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
                          <a className="dropdown-item" href="#">
                            Edit Job{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View job details{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View public job page{" "}
                          </a>
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
                      
                        <p>Active</p>
                     
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      
                        <p>Awaiting</p>
                     
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                     
                        <p>Hired</p>
                      
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
                          <a className="dropdown-item" href="#">
                            Edit Job{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View job details{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View public job page{" "}
                          </a>
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
                     
                        <p>Active</p>
                    
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                      
                        <p>Awaiting</p>
                     
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                      
                        <p>Hired</p>
                      
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
                          <a className="dropdown-item" href="#">
                            Edit Job{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View job details{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View public job page{" "}
                          </a>
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
                     
                        <p>Active</p>
                    
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                    
                        <p>Awaiting</p>
                      
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                     
                        <p>Hired</p>
                      
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
                          <a className="dropdown-item" href="#">
                            Edit Job{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View job details{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View public job page{" "}
                          </a>
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
                      
                        <p>Active</p>
                      
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text2">
                      <h3>21</h3>
                    
                        <p>Awaiting</p>
                      
                    </div>
                  </div>
                  <div className="col-md-2 clint-box">
                    <div className="clientweb-text3">
                      <h3>0 of 1</h3>
                        <p>Hired</p>
                      
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
                          <a className="dropdown-item" href="#">
                            Edit Job{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View job details{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View public job page{" "}
                          </a>
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
    </div>
  );
}
export default LocamJobDetails;
