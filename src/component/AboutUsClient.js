import React from 'react';
import { Link } from "react-router-dom";


function AboutUsClient() {
  return (
    <div className="image-client">
      {/* {/ Navigation Header /} */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/ '>
            <img src="assets/img/rivetcare_logo.png" alt="Rivet Care Logo" />
          </Link>
          <ul className="nav-links">
            <li><a href="/" className="nav-link ">Home</a></li>
            <li><a href="AboutUsClient" className="nav-link active">About Us</a></li>
            <li><a href="ContactUsClient" className="nav-link ">Contact Us</a></li>
          </ul>
          <div className="nav-auth">
            <a href="GetStarted" className="nav-auth-link">Sign in / Sign up</a>
            <a href="creatyouraccount" className="nav-post-job">Employer/Post Job</a>
          </div>
        </div>
      </nav>

      {/* {/ About Us Section /} */}
      <div className='container'>
        <div className='aboutus-client-section'>
          <h1>Welcome to Rivet Jobs</h1>
          <h1>Your Direct platform to Link to Healthcare Opportunities and Talent</h1>

          {/* {/ For Healthcare Workers /} */}
          <div className='aboutus-for-workers'>
            <h3>For Healthcare Workers:</h3>
            <p>Are you a Nurse, Doctor, HCA, or other healthcare professional seeking new opportunities in the UK?
              Rivet Jobs is your gateway to a wide range of positions in care homes, nursing homes, and NHS hospitals.
              Our platform is designed to give you direct access to employers, allowing you to apply for jobs without
              the need for an agency or recruiter.</p>
          </div>

          {/* {/ Why Register with Rivet Jobs /} */}
          <div className='aboutus-why-register'>
            <h3>Why Register with Rivet Jobs?</h3>
            <ul>
              <li><span>Empower Your Career :</span> Take control of your job search with the ability to apply directly to the roles that interest you the most.</li>
              <li><span>Wide Range of Opportunities :</span> Whether you’re looking for a permanent position, a temporary shift, or locum work, Rivet Jobs has something for everyone.</li>
              <li><span>Profile Management :</span> Create a detailed profile that showcases your qualifications, experience, and availability, making it easy for employers to find you.</li>
              <li><span>Instant Notifications :</span> Get notified as soon as new job opportunities that match your skills become available, so you never miss out on the perfect role.</li>
              <li><span>Secure and Confidential :</span> Your personal information is protected, and you decide who gets to see your profile.</li>
            </ul>
          </div>

          {/* {/ For Employers /} */}
          <div className='aboutus-for-employers'>
            <h3>For Employers:</h3>
            <p>Rivet Jobs offers a platform for care homes, nursing homes, and hospitals across the UK to find and hire qualified healthcare professionals.
              Say goodbye to the hassle and costs associated with traditional recruitment methods, and connect with the candidates you need.</p>
          </div>

          <div className='aboutus-why-register'>
            <h3>Why Use Rivet Jobs for Your Hiring Needs?</h3>
            <ul>
              <li><span>Wide Range of Opportunities :</span>  Cut out the middleman and engage directly with healthcare      professionals, reducing time-to-hire and recruitment costs.</li>
              <li><span>Comprehensive Search : </span>   Access a diverse pool of vetted healthcare workers ready to meet      your staffing needs, whether for permanent roles, shift work, or temporary cover.</li>
              <li><span>Efficient  Matching :</span>Our advanced search and filtering tools allow you to find      candidates that precisely match your requirements, from specific skills to location and availability.</li>
              <li><span>Transparent  Process :</span>View candidate profiles, qualifications, and availability      upfront, enabling informed hiring decisions with confidence.</li>
              <li><span>Flexible  Workforce Management :</span>   Book shifts or hire long-term staff with ease, all      from one platform that adapts to your staffing strategy.</li>
            </ul>
          </div>

          <div className='aboutus-for-employers'>
            <h3>How Rivet Jobs Works :</h3>
          </div>

          <div className='aboutus-why-register'>
            <h3>For Healthcare Workers :</h3>
            <ol>
              <li><span>1 . Register  : </span>  Sign up and create your professional profile, highlighting your experience, skills, and certifications.</li>
              <li><span>2 . Explore Opportunities  : </span>  Browse through a variety of job listings tailored to your profession, location, and preferred work arrangements.</li>
              <li><span>3 . Apply and Connect : </span>Apply directly to jobs that interest you, and communicate with employers through our platform to secure your next role.</li>
            </ol>
          </div>

          <div className='aboutus-why-register mb-300'>
            <h3>For Employers :</h3>
            <ol>
              <li><span>1 . Sign Up  : </span>   Create your account and set up your company profile to start accessing our talent pool.</li>
              <li><span>2 . Post Jobs  : </span>   List your staffing needs, including job descriptions, required qualifications, and specific shift times.</li>
              <li><span>3 . Review and Hire :</span>  Review applications, conduct interviews if needed, and hire or book shifts directly through the platform.</li>
            </ol>
          </div>

          <div className='aboutus-for-employers'>
            <h3>Why Rivet Jobs?</h3>
            <p>Seamless Integration: Rivet Jobs integrates smoothly into your existing HR processes, providing a user-friendly interface that makes both job searching and hiring intuitive and efficient.</p>
          </div>

          <div className='aboutus-why-register'>
            <ul>
              <li><span>Cost-Effective :</span>   By eliminating recruitment agencies and mediators, Rivet Jobs reduces your costs while ensuring you still have access to top talent or the best job opportunities.</li>
              <li><span>Time-Saving : </span>   Our platform is designed to save you time, whether you're a healthcare professional looking for your next role or an employer trying to fill a position quickly.</li>
              <li><span>Continuous Support :</span>Our dedicated support team is always available to assist you with any questions or challenges you might face on the platform, ensuring a smooth and successful experience for all users.</li>
            </ul>
          </div>

          <div className='aboutus-why-register'>
            <h3 style={{paddingBottom:'11px'}}>Get Started with Rivet Jobs Today</h3>
            <span>Join Rivet Jobs today and unlock a world of opportunities. Whether you're a healthcare professional eager to advance your career or an employer in need of reliable staff, Rivet Jobs is the trusted platform that bridges the gap between talent and opportunity.</span>
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

export default AboutUsClient;
