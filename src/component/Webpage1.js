import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Webpage1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/clintwebpage2");
  };

  return (
    <div>
      <Navbar />
      <div className="dashbord-text">
        <h3>Find Jobs</h3>
      </div>
      <div className="webpage-1">
        <div class="main-inputs">
          <div className="inputs">
            <div class="input1">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              <input type="text" placeholder="Job title, keywords or company" />
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
              Company
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
      </div>

      <div className="webpage1-text">
        <h2>Sorry! </h2>
        <p>We Haven't Found Any Data</p>
      </div>
      <div className="webpage1-img">
        <img src="assets/img/OBJECTS.png" alt="" />
      </div>
    </div>
  );
}

export default Webpage1;
