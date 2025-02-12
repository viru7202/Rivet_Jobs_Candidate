import React, { useState } from 'react';
import { Link } from "react-router-dom";

function HomeClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="image-client">
      {/* {/ Navigation Header /} */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="assets/img/rivetcare_logo.png" alt="Rivet Care Logo" />
          </Link>
          {/* Hamburger Icon for Mobile Screens */}
          <button className="hamburger-icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </button>
          {/* Navigation Links */}
          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><Link to={'/'} className="nav-link active">Home</Link></li>
              <li><Link to={'/AboutUsClient'} className="nav-link">About Us</Link></li>
              <li><Link to={'/ContactUsClient'} className="nav-link">Contact Us</Link></li>
            </ul>
            <div className="nav-auth">
              <Link to={'/GetStarted'}  className="nav-auth-link">Sign in / Sign up</Link>
              <Link to={'/ClientCreateAC'} className="nav-post-job">Employer/Post Job</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='container'>
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
              <div className="search-button">
                <button data-id="model" data-target="#model">
                  Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-client-body">
        <p>
          <Link to={'/https://www.rivetjobs.com'}className="image-client-link">
            Upload your CV swiftly
          </Link>{' '}
          - Boost your Career. It takes only a moment.
        </p>
        <p>
          Create more effective job descriptions with AI -{' '}
          <Link to={'/https://www.rivetjobs.com'}className="image-client-link">
            Post a Job on Rivet Care
          </Link>
        </p>
      </div>
      <div className='image-client-body-2'>
        <p>For India jobs, visit <Link to={'/' } href="https://www.rivetjobs.com" className="image-client-link">https://www.rivetjobs.com</Link></p>
        <p>What's trending on Rivet Jobs</p>
      </div>
      <div className="image-client-illustration">
        <img src="/assets/img/Group 1008.png" alt="Job Search Illustration" />
      </div>
      </div>
      {/* {/ Footer /} */}
      <div className="footer-home">
        <ul className="footer-links">
          <li>&copy; 2024 Rivet Jobs</li>
          <li><Link to={'/' } href="#">Anti-Slavery statement</Link></li>
          <li><Link to={'/' } href="#">Accessibility at Rivet Jobs</Link></li>
          <li><Link to={'/' } href="#">Privacy Centre and Ad Choices</Link></li>
          <li><Link to={'/' } href="#">Terms</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default HomeClient;
