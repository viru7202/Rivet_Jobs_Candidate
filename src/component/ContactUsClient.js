import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ContactUsClient() {
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
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/AboutUsClient'} className="nav-link">About Us</Link></li>
              <li><Link to={'/ContactUsClient'} className="nav-link active">Contact Us</Link></li>
            </ul>
            <div className="nav-auth">
              <Link to={'/GetStarted'} className="nav-auth-link">Sign in / Sign up</Link>
              <Link to={'/ClientCreateAC'} className="nav-post-job">Employer/Post Job</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* {/ Contact Us Section /} */}
      <div className='container'>
      <div className="contactus-client-section" style={{ margin: '5.5% 0' }}>
          {/* {/ Contact Information (Left Side) /} */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>We’re here to help you find the perfect solution for your staffing needs. Whether you have questions, need support, or want to learn more about our services, we’re just a message or call away. Reach out to us, and we’ll get back to you as soon as possible.</p>

            <ul>
  <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src="Vector (4).png" alt="" style={{ marginRight: '15px' }} />
    <div>
      <span style={{ position: "relative",  }}>
        https://www.rivetjobs.com
      </span>
    </div>
  </li>
  <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src="Vector (5).png" alt="" style={{ marginRight: '15px' }} />
    <div>
      <span style={{ position: "relative", left: '2px'  }}>
        <Link to={'/mailto:info@rivetJobs.com'} style={{ color: 'white' }}>
          info@rivetJobs.com
        </Link>
      </span>
    </div>
  </li>
  <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src="Vector (6).png" alt="" style={{ marginRight: '15px' }} />
    <div>
      <span style={{ position: "relative", left: '5px' }}>
        Denning House 1A, George Street, Wolverhampton, England, WV2 4DP
      </span>
    </div>
  </li>
</ul>


            {/* {/ Social Media Icons /} */}
            <div className="social-media" style={{ paddingTop: '20px' }}>
              <Link to={'/'}><img src="Group 1000001749.png" alt="" style={{}} /></Link>
              <Link to={'/'}><img src="Group 1000001750.png" alt="" style={{}} /></Link>
              <Link to={'/'}><img src="Group 1000001751.png" alt="" style={{}} /></Link>
            </div>
          </div>

          {/* {/ Contact Form (Right Side) /} */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Lorem Ipsum" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Lorem Ipsum" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="loremipsum@mail.com" />


                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="number" placeholder="+91 1234567890" />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message.."></textarea>
              </div>

              <button type="submit" className="send-message-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* {/ Footer /} */}
      <div className="footer-home">
        <ul className="footer-links">
          <li>&copy; 2024 Rivet Jobs</li>
          <li><Link to={'/'} href="#">Anti-Slavery statement</Link></li>
          <li><Link to={'/'} href="#">Accessibility at Rivet Jobs</Link></li>
          <li><Link to={'/'} href="#">Privacy Centre and Ad Choices</Link></li>
          <li><Link to={'/'} href="#">Terms</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUsClient;
