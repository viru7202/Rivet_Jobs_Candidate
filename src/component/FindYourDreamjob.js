import React from 'react'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


 function FindYourDreamjob() {
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
          </div>
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
              <Link to='/webpage2'>

                  <button data-id="model" data-target="#model" onClick={handleClick}>
                    Find Job
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="webpage1-text mt-5">
            <h2>Find Your Dream Job!! </h2>
            <p>Explore High - Satisfaction Jobs</p>
          </div>
          <div className="webpage1-img mt-5">
            <img src="assets/img/Group 1414.png" alt="" />
          </div>
        </div>
      );
}
export default FindYourDreamjob;