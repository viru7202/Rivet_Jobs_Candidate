import React, { useState } from "react";
import { Link } from "react-router-dom";

function ClientCreateAC() {
  const [showModal, setShowModal] = useState(false);

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className={`email-verificationn ${showModal ? "blur" : ""}`}>
        <img src="assets/img/rivetcare_logo.png" alt="" />
      </div>
      <div className="main">
      <div className={`main-box ${showModal ? "blur" : ""}`}>
        <div className="heading" style={{textAlign:'center'}}>
          <h3>Create Your Account</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="email-text">
              <h4>Company Name</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Please Enter Company Name"></input>
            </div>
            <div className="email-text">
            <h4>Company Reg number</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="RIC1222667 "></input>
            </div>
            <div className="email-text">
              <h4>Position</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Admin"></input>
            </div> 
            <div className="email-text">
              <h4>Telephone number</h4>
            </div>
            <div className="email-input">
              <input type="number" placeholder="+91 00001 00100"></input>
            </div> 
          </div>
          <div className="col-md-6">
            <div className="email-text">
              <h4>Branch</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Ahmedabad"></input>
            </div>
            <div className="email-text">
              <h4>Your Name</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Calvin"></input>
            </div>
            <div className="email-text">
              <h4>Company email</h4>
            </div>
            <div className="email-input">
              <input type="text" placeholder="Calvin@gmail.com"></input>
            </div>
            <div className="email-text">
              <h4>Postcode</h4>
            </div>
            <div className="email-input">
              <input type="number" placeholder="000000"></input>
            </div>
          </div>

          <div className="email-text">
            <h4>Address</h4>
          </div>
          <div className="email-input">
            <textarea placeholder="Please Enter Address"></textarea>
          </div>
    

          <div className="verify-button">
          <Link to={'/emailverification'}>
            <button >Sign Up</button>
            </Link>
           
            <div className="ac-sign">
              <p>Already have an account ? <a href="/login">Sign in</a></p>
            </div>
            <hr />
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
          <input type="radio" name="userType" value="candidate" defaultChecked />
          <span>As a Candidate (looking for a job)</span>
        </label>
        <label className="option-label">
          <input type="radio" name="userType" value="employer" />
          <span>As an Employer (hiring, sourcing, candidates or advertising jobs)</span>
        </label>
      </div>
      <div className="modal-buttons">
        <button className="next-button" >Next</button>
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

export default ClientCreateAC;
