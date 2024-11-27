import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function OtpSignup() {
  const inputRefs = useRef([]);

  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    if (value.length === 1) {
      focusNextInput(index);
    }
  };

  return (
    <div>
      <div className="email-verification">
        <img src="assets/img/rivetcare_logo.png" alt="" />
      </div>
      <div className='main'>
      <div className="main-box">
        <div className="heding">
          <h3>Welcome Back</h3>
          <p>Enter your Mobile Number and OTP to access your account</p>
        </div>
        <div className="otp-text">
          <h4>Enter Verification Code</h4>
        </div>
        <div className="otp-input">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="number"
              maxLength={1}
              minLength={1}
              ref={(input) => (inputRefs.current[index] = input)}
              onChange={(event) => handleInputChange(event, index)}
            />
          ))}
        </div>
        <div className="otp-p">
          <p>OTP Sent to +91 00010 00010 </p>
        </div>
        <div className="verify-button">
          <Link to="/CdtDashboard">
            <button>Submit</button>
          </Link>
          {/* <p>
            Don’t have an account? <Link to="/"><span>Sign Up</span></Link>
          </p> */}
          <hr />
        </div>
      </div>
      </div>
    </div>
  );
}

export default OtpSignup;
