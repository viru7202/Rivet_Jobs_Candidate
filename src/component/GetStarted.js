import { Link } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [showModal, setShowModal] = useState(false);

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [cadidate, setCandidate] = useState(false)
  return (
    <div>
      <div className="Login-page">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="Login">
                <img src="assets/img/login.png" alt="" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="part-2">
                <div className="login-2">
                  <img src="assets/img/rivetcare_logo.png" alt="" />
                </div>
                <div className="login-text">
                  <h3>Get Started</h3>
                </div>
                <Link to='/loginscreen'>
                  <div className="login-btn">
                    <button>Log in</button>
                  </div>
                </Link>
                {/* <Link to='/creatyouraccount'> */}
                  <div className="signup-btn">
                    <button onClick={handleSignUpClick}>Sign Up</button>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <div className="options">
              <label className="option-label">
                {/* <Link to={cadidate ? '/CreateYourAccount' : '/'}> */}
                <input type="radio" name="userType" value="candidate" onClick={() => { setCandidate(false) }} defaultChecked />
                <span>As a Candidate (looking for a job)</span>
                {/* </Link> */}
              </label>
              <label className="option-label" >
                {/* <a href="ClientCreateAC"> */}
                <input type="radio" name="userType" value="employer" onClick={() => { setCandidate(true) }} />
                <span>As an Employer (hiring, sourcing, candidates or advertising jobs)</span>
                {/* </a> */}
              </label>
            </div>
            <div className="modal-buttons">
              <Link to={cadidate ? '/ClientCreateAC' : '/CreateYourAccount'}>
                <button className="next-button" >Next</button>
              </Link>
              <button className="cancel-button" onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    width: 600px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-content h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
    text-align: left;
  }

  .option-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  .option-label input[type="radio"] {
    margin-right: 10px;
  }

  .modal-buttons {
    display: flex;
    justify-content: center;
    gap:  10%;
  }

.option-label input[type="radio"] {
    accent-color: #1D71B7;
    margin-right: 10px;
}
  .next-button {
    background-color: #1D71B7;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
button.next-button {
    width: 183px;
    height: 47px;
}
  .cancel-button {
    background-color: #ccc;
    color: #333;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
button.cancel-button {
    height: 47px;
    width: 183px;
}
  .next-button:hover {
    background-color: #0056b3;
  }

  .cancel-button:hover {
    background-color: #999;
  }
    @media only screen and (max-width: 768px) {
  .modal-content {
  scale: 0.7;
}
`}</style>

    </div>
  );
}
export default Login;
