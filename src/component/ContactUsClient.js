import React from 'react';
import { Link } from "react-router-dom";

function ContactUsClient() {
  return (
    <div className="image-client">
      {/* {/ Navigation Header /} */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/webdeshbord'>
            <img src="assets/img/rivetcare_logo.png" alt="Rivet Care Logo" />
          </Link>
          <ul className="nav-links">
            <li><a href="/ " className="nav-link ">Home</a></li>
            <li><a href="AboutUsClient" className="nav-link ">About Us</a></li>
            <li><a href="ContactUsClient" className="nav-link active">Contact Us</a></li>
          </ul>
          <div className="nav-auth">
            <a href="GetStarted" className="nav-auth-link">Sign in / Sign up</a>
            <a href="creatyouraccount" className="nav-post-job">Employer/Post Job</a>
          </div>
        </div>
      </nav>

      {/* {/ Contact Us Section /} */}
      <div className='container'>
        <div className='contactus-client-section' style={{marginTop:'57px'}}>
          {/* {/ Contact Information (Left Side) /} */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>We’re here to help you find the perfect solution for your staffing needs. Whether you have questions, need support, or want to learn more about our services, we’re just a message or call away. Reach out to us, and we’ll get back to you as soon as possible.</p>
            
            <ul>
              <li><img src="Vector (4).png" alt="" style={{marginRight: '15px' }} /><span style={{ position: "relative", top: '-5px' }}>https://www.rivetjobs.com</span></li>
              <li><img src="Vector (5).png" alt="" style={{marginRight: '15px' }} /><span style={{ position: "relative", top: '-5px' }}>mailto:info@rivetjobs.com </span></li>
              <li><img src="Vector (6).png" alt="" style={{ marginRight: '15px'}} /><span style={{ position: "relative", top: '-5px' }}>Denning House 1a, George Street, Wolverhampton, England, WV2 4DP</span></li>
            </ul>

            {/* {/ Social Media Icons /} */}
            <div className="social-media" style={{paddingTop:'20px'}}>
              <a href="#"><img src="Group 1000001749.png" alt="" style={{ }} /></a>
              <a href="#"><img src="Group 1000001750.png" alt="" style={{ }} /></a>
              <a href="#"><img src="Group 1000001751.png" alt="" style={{ }} /></a>
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
                  <input type="text" placeholder="+91 1234567890" />
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
          <li><a href="#">Anti-Slavery statement</a></li>
          <li><a href="#">Accessibility at Rivet Jobs</a></li>
          <li><a href="#">Privacy Centre and Ad Choices</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUsClient;
