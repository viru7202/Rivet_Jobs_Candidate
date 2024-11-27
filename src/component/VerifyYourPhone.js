import { Link } from "react-router-dom";

 function VerifyYourPhone() {
  return (
    <div>
       <div>
    <div className="email-verification">
    <img src="assets/img/rivetcare_logo.png" alt="" />
    </div>
    <div className="main-box">
      <div className="heding">
        <h3> Verify Your Phone</h3>
        <p>Enter your Mobile Number and OTP to access your account</p>
      </div>
      <div className="email-text">
        <h4>Phone</h4>
      </div>
      <div className="email-input">
        <input type="text" placeholder="Number"></input>
        <p>Verification Mail  Sent to rivet@gmail.com</p>
      </div>
      <div className="verify-button">
        <Link to='/otpverification'><button>Send OTP</button></Link>
        <p>Don’t have an account? <Link to='/'><span>Sign Up</span></Link></p>
        <hr></hr>
      </div>
    </div>
  </div>
    </div>
  )
}
export default VerifyYourPhone;