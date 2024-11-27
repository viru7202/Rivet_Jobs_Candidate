import React from 'react'
import { Link } from 'react-router-dom';
 function VerifyYourEmail() {
  return (
    <div>
    <div className="email-verification">
    <img src="assets/img/rivetcare_logo.png" alt="" />
    </div>
    <div className="main-box">
      <div className="heding">
        <h3>Welcome Back</h3>
        <p>Enter your email and verify it to access your account</p>
      </div>
      <div className="email-text">
        <h4>Email</h4>
      </div>
      <div className="email-input">
        <input type="email" placeholder="email"></input>
        <p>Verification Mail  Sent to rivet@gmail.com</p>
      </div>
      <div className="verify-button">
        <Link to='/verifyyourphone'><button>Verify</button></Link>
        {/* <p>Don’t have an account? <Link to='/'><span>Sign Up</span></Link></p> */}
        <hr></hr>
      </div>
    </div>
  </div>
  )
}
export default VerifyYourEmail;