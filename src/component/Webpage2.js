import React from "react";
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";

function Webpage2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/clintwebpage2");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dashbord-text">
          <h3>Permanent Jobs</h3>
          {/* <hr/> */}
        </div>
      </div>
      {/* <!-- Example single danger button --> */}
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
              <div className="search-button">
                {/* Pass the handleClick function to onClick */}
                <button
                  data-id="model"
                  data-target="#model"
                  onClick={handleClick}
                >
                  Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
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
              Post By
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
              Pay
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
        </div>

        <div className="permanent-job-card">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
               
                  <div className="card-permanent">
                    <img src="assets/img/brand-3 1.png" alt="" />
                    <h3>Healthcare Assistant</h3>
                    <h4>Naintwich</h4>
                    <div className="time-day">
                      <div className="time">
                        <button>
                          <p>Full time</p>
                        </button>
                      </div>
                      <div className="time">
                        <button>
                          <p>Mon - Fri</p>
                        </button>
                      </div>
                    </div>
                    <div className="usd-year">
                      <button>
                        <p>$28,805 a year</p>
                      </button>
                    </div>
                    <p className="usd-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae architecto eveniet, dolor quo repellendus
                      pariatur.
                    </p>
                    <div className="today-readmore">
                      <div className="today">
                        <p>Today</p>
                      </div>
                    </div>
                    
                    <div className="apply-now" style={{ textAlign: "center" }}>
                    <Link to="/webpage3">
                      <button>
                        <p>Apply now</p>
                      </button>
                </Link>
                    </div>
                  </div>
              </div>
              <div className="col-md-4">
               
               <div className="card-permanent">
                 <img src="assets/img/brand-3 1.png" alt="" />
                 <h3>Healthcare Assistant</h3>
                 <h4>Naintwich</h4>
                 <div className="time-day">
                   <div className="time">
                     <button>
                       <p>Full time</p>
                     </button>
                   </div>
                   <div className="time">
                     <button>
                       <p>Mon - Fri</p>
                     </button>
                   </div>
                 </div>
                 <div className="usd-year">
                   <button>
                     <p>$28,805 a year</p>
                   </button>
                 </div>
                 <p className="usd-text">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Recusandae architecto eveniet, dolor quo repellendus
                   pariatur.
                 </p>
                 <div className="today-readmore">
                   <div className="today">
                     <p>Today</p>
                   </div>
                 </div>
                 
                 <div className="apply-now" style={{ textAlign: "center" }}>
                 <Link to="/webpage3">
                   <button>
                     <p>Apply now</p>
                   </button>
             </Link>
                 </div>
               </div>
           </div>
           <div className="col-md-4">
               
               <div className="card-permanent">
                 <img src="assets/img/brand-3 1.png" alt="" />
                 <h3>Healthcare Assistant</h3>
                 <h4>Naintwich</h4>
                 <div className="time-day">
                   <div className="time">
                     <button>
                       <p>Full time</p>
                     </button>
                   </div>
                   <div className="time">
                     <button>
                       <p>Mon - Fri</p>
                     </button>
                   </div>
                 </div>
                 <div className="usd-year">
                   <button>
                     <p>$28,805 a year</p>
                   </button>
                 </div>
                 <p className="usd-text">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Recusandae architecto eveniet, dolor quo repellendus
                   pariatur.
                 </p>
                 <div className="today-readmore">
                   <div className="today">
                     <p>Today</p>
                   </div>
                 </div>
                 
                 <div className="apply-now" style={{ textAlign: "center" }}>
                 <Link to="/webpage3">
                   <button>
                     <p>Apply now</p>
                   </button>
             </Link>
                 </div>
               </div>
           </div>
           
              
            </div>
          </div>
        </div>

        <div className="permanent-job-card">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
               
                  <div className="card-permanent">
                    <img src="assets/img/brand-3 1.png" alt="" />
                    <h3>Healthcare Assistant</h3>
                    <h4>Naintwich</h4>
                    <div className="time-day">
                      <div className="time">
                        <button>
                          <p>Full time</p>
                        </button>
                      </div>
                      <div className="time">
                        <button>
                          <p>Mon - Fri</p>
                        </button>
                      </div>
                    </div>
                    <div className="usd-year">
                      <button>
                        <p>$28,805 a year</p>
                      </button>
                    </div>
                    <p className="usd-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae architecto eveniet, dolor quo repellendus
                      pariatur.
                    </p>
                    <div className="today-readmore">
                      <div className="today">
                        <p>Today</p>
                      </div>
                    </div>
                    
                    <div className="apply-now" style={{ textAlign: "center" }}>
                    <Link to="/webpage3">
                      <button>
                        <p>Apply now</p>
                      </button>
                </Link>
                    </div>
                  </div>
              </div>
              <div className="col-md-4">
               
               <div className="card-permanent">
                 <img src="assets/img/brand-3 1.png" alt="" />
                 <h3>Healthcare Assistant</h3>
                 <h4>Naintwich</h4>
                 <div className="time-day">
                   <div className="time">
                     <button>
                       <p>Full time</p>
                     </button>
                   </div>
                   <div className="time">
                     <button>
                       <p>Mon - Fri</p>
                     </button>
                   </div>
                 </div>
                 <div className="usd-year">
                   <button>
                     <p>$28,805 a year</p>
                   </button>
                 </div>
                 <p className="usd-text">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Recusandae architecto eveniet, dolor quo repellendus
                   pariatur.
                 </p>
                 <div className="today-readmore">
                   <div className="today">
                     <p>Today</p>
                   </div>
                 </div>
                 
                 <div className="apply-now" style={{ textAlign: "center" }}>
                 <Link to="/webpage3">
                   <button>
                     <p>Apply now</p>
                   </button>
             </Link>
                 </div>
               </div>
           </div>
           <div className="col-md-4">
               
               <div className="card-permanent">
                 <img src="assets/img/brand-3 1.png" alt="" />
                 <h3>Healthcare Assistant</h3>
                 <h4>Naintwich</h4>
                 <div className="time-day">
                   <div className="time">
                     <button>
                       <p>Full time</p>
                     </button>
                   </div>
                   <div className="time">
                     <button>
                       <p>Mon - Fri</p>
                     </button>
                   </div>
                 </div>
                 <div className="usd-year">
                   <button>
                     <p>$28,805 a year</p>
                   </button>
                 </div>
                 <p className="usd-text">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Recusandae architecto eveniet, dolor quo repellendus
                   pariatur.
                 </p>
                 <div className="today-readmore">
                   <div className="today">
                     <p>Today</p>
                   </div>
                 </div>
                 
                 <div className="apply-now" style={{ textAlign: "center" }}>
                 <Link to="/webpage3">
                   <button>
                     <p>Apply now</p>
                   </button>
             </Link>
                 </div>
               </div>
           </div>
           
              
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}
export default Webpage2;
