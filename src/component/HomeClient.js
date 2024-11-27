import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


function HomeClient() {




  return (
    <div className="image-client">
      {/* {/ Navigation Header /} */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/ '>
            <img src="assets/img/rivetcare_logo.png" alt="Rivet Care Logo" />
          </Link>
          <ul className="nav-links">
            <li><a href="HomeClient" className="nav-link active">Home</a></li>
            <li><a href="AboutUsClient" className="nav-link">About Us</a></li>
            <li><a href="ContactUsClient" className="nav-link">Contact Us</a></li>
          </ul>
          <div className="nav-auth">
            <a href="GetStarted" className="nav-auth-link">Sign in / Sign up</a>
            <a href="ClientCreateAC" className="nav-post-job">Employer/Post Job</a>
          </div>
        </div>
      </nav>

      {/* {/ Search and Body /} */}
      {/* <div className="image-client-header">
        <div className="image-client-search-bar">
          <input
            type="text"
            className="image-client-input"
            placeholder="Job title, keywords or company"
          />
          <input
            type="text"
            className="image-client-location"
            placeholder="Location or post code"
          />
          <button className="image-client-button">Find Job</button>
        </div>
      </div> */}
             <div className='webpage2'>
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
                                <button data-id="model" data-target="#model" >
                                    Find Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <div className="image-client-body">
        <p>
          <a href="https://www.rivetjobs.com" className="image-client-link">
            Upload your CV swiftly
          </a>{' '}
          - Boost your Career. It takes only a moment.
        </p>
        <p>
          Create more effective job descriptions with AI -{' '}
          <a href="https://www.rivetjobs.com" className="image-client-link">
            Post a Job on Rivet Care
          </a>
        </p>
      </div>
      <div className='image-client-body-2'>
        <p>For India jobs, visit <a href="https://www.rivetjobs.com" className="image-client-link">https://www.rivetjobs.com</a></p>
        <p>What's trending on Rivet Jobs</p>
      </div>
      <div className="image-client-illustration">
        <img src="/assets/img/Group 1008.png" alt="Job Search Illustration" />
      </div>

      {/* {/ Footer /} */}
      <div className="footer-home">
        <ul className="footer-links">
          <li>&copy; 2024 Rivet Jobs</li>
          <li><a href="#">Anti-Slavery statement</a></li>
          <li><a href="#">Accessibility at Rivet Jobs</a></li>
          <li><a href="#">Privacy Centre and Ad Choices</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HomeClient;
