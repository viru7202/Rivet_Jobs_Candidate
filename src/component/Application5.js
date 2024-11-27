import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ApplicationForm5 = () => {



  // States for form inputs
  const [paymentType, setPaymentType] = useState({
    paye: false,
    umbrellaCompany: false,
    ltdCompany: false,
  });

  const [typicalRates, setTypicalRates] = useState('');
  const [comments, setComments] = useState('');
  const [niNumber, setNiNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [currentPostcode, setCurrentPostcode] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [sortCode, setSortCode] = useState('');

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPaymentType(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Handle text field change
  const handleTextChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <>
      <Navbar />
      <section className="form">
        <div className="container">
          <div className="form-wrap">
            <h2 className="form-heading">Application Form</h2>
            <div className="form-contain">
              <h3 className="form-subheading">Section 11: Payment Engagement</h3>
              <div className="form-fieldwrap">
                <form>
                  <div className="form-containtbox">
                    <div className="form-group">
                      <div className="form-group is-biggap">
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            name="paye"
                            checked={paymentType.paye}
                            onChange={handleCheckboxChange}
                          />
                          <label>PAYE (Please refer to the Terms of Engagement for information regarding pension arrangements)</label>
                        </div>
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            name="umbrellaCompany"
                            checked={paymentType.umbrellaCompany}
                            onChange={handleCheckboxChange}
                          />
                          <label>Umbrella company</label>
                        </div>
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            name="ltdCompany"
                            checked={paymentType.ltdCompany}
                            onChange={handleCheckboxChange}
                          />
                          <label>Ltd. Company*(Non VAT/VAT) Umbrella and Ltd Companies are responsible for managing their own pension arrangements)</label>
                        </div>
                        <div className="form-group-two">
                          <label htmlFor="typicalRates">Typical rates discussed for roles:</label>
                          <input
                            type="text"
                            id="typicalRates"
                            value={typicalRates}
                            onChange={(e) => handleTextChange(e, setTypicalRates)}
                            placeholder="125.000"
                          />
                        </div>
                        <div className="form-group-two">
                          <label htmlFor="comments">Comments:</label>
                          <input
                            type="text"
                            id="comments"
                            value={comments}
                            onChange={(e) => handleTextChange(e, setComments)}
                            placeholder="cbavcjkavcjhv akclqaclkbcla"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-line"></div>

                    <h3 className="form-subheading">Section 12: Bank/Payment Details</h3>
                    <div className="form-group">
                      <div className="form-group-two">
                        <label htmlFor="niNumber">NI Number:</label>
                        <input
                          type="number"
                          id="niNumber"
                          value={niNumber}
                          onChange={(e) => handleTextChange(e, setNiNumber)}
                          placeholder="1651132156461"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="checkbox-group-two">
                        <label className="is-add is-align">Payment type:</label>
                        <div className="checkbox-flex">
                          <div className="checkbox-group">
                            <input
                              type="checkbox"
                              name="paye"
                              checked={paymentType.paye}
                              onChange={handleCheckboxChange}
                            />
                            <label>PAYE</label>
                          </div>
                          <div className="checkbox-group">
                            <input
                              type="checkbox"
                              name="umbrellaCompany"
                              checked={paymentType.umbrellaCompany}
                              onChange={handleCheckboxChange}
                            />
                            <label>Umbrella company</label>
                          </div>
                          <div className="checkbox-group">
                            <input
                              type="checkbox"
                              name="ltdCompany"
                              checked={paymentType.ltdCompany}
                              onChange={handleCheckboxChange}
                            />
                            <label>Ltd. Company*(Non VAT/VAT)</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="form-text">
                      Please provide Certificate of Incorporation, VAT registration certificate (If VAT registered) and proof of limited bank account
                      e.g. blank cheque on letter headed paper from the bank your limited company is run through.
                    </p>

                    <div className="form-group">
                      <div className="form-group-two">
                        <label htmlFor="bankName">Name of bank or building society:</label>
                        <input
                          type="text"
                          id="bankName"
                          value={bankName}
                          onChange={(e) => handleTextChange(e, setBankName)}
                          placeholder="cbavcjkavcjhv akclqaclkbcla"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group is-add">
                        <label htmlFor="currentaddress">Current Address</label>
                        <input
                          type="text"
                          id="currentaddress"
                          value={currentAddress}
                          onChange={(e) => handleTextChange(e, setCurrentAddress)}
                          placeholder="Denning House 1a, George Street, Wolverhampton, England, WV2 4DPWolverhampton, England, WV2...."
                        />
                      </div>
                      <div className="form-group is-post">
                        <label htmlFor="currentpostcode">Post Code</label>
                        <input
                          type="text"
                          id="currentpostcode"
                          value={currentPostcode}
                          onChange={(e) => handleTextChange(e, setCurrentPostcode)}
                          placeholder="380015"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-group-two">
                        <label htmlFor="accountHolderName">Account Holder Name:</label>
                        <input
                          type="text"
                          id="accountHolderName"
                          value={accountHolderName}
                          onChange={(e) => handleTextChange(e, setAccountHolderName)}
                          placeholder="cbavcjkavcjhv akclqaclkbcla"
                        />
                      </div>
                    </div>

                    <div className="form-row is-largegap">
                      <div className="form-group">
                        <label htmlFor="accountNumber">Account no:</label>
                        <input
                          type="number"
                          id="accountNumber"
                          value={accountNumber}
                          onChange={(e) => handleTextChange(e, setAccountNumber)}
                          placeholder="12345678912563"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sortCode">Sort code:</label>
                        <input
                          type="number"
                          id="sortCode"
                          value={sortCode}
                          onChange={(e) => handleTextChange(e, setSortCode)}
                          placeholder="75314232"
                        />
                      </div>
                    </div>

                    <div className="edidprofile-buttons">
                        <div className="row">
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Save</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                <Link to="/ApplicationForm6">

                                    <button>Next</button>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                        </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
.form{
    padding: 0;
}
         .container {
    padding: 0 ;
}
.form-wrap{
  padding-top: 25px;
}
.form-heading{
font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 28px;
align-items: center;
text-decoration-line: underline;
color: #1D71B7;
}

.form-contain{
margin-top: 60px;
background: #FFFFFF;
border: 1px solid #ECECEC;
box-shadow: 0px 10px 10px rgba(104, 104, 104, 0.05);
border-radius: 20px;
padding: 60px 48px 90px 48px;
}
.form-subheading{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
align-items: center;
color: #1D71B7;
}


.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-containtbox{
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.form-group-two {
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
}

.form-group-two input{
  max-width: 50%;
  width: 100%;
}

.form-group  label {
padding-top: 8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 14px;
display: flex;
align-items: center;
color: #303030;
gap: 5px;
}


.form-group input {
height: 36px;
background: #F5F7FA;
border-radius: 5px;
border: none;
padding: 10px  ;

/* Mr/Mrs./Miss. */
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
display: flex;
align-items: center;
color: #999999;
}

.form-row {
  display: flex;
  justify-content: space-between;
gap: 30px;

}

.is-biggap{

      gap: 30px !important;
}
.is-largegap{
  gap: 80px;
  display: flex;
  flex-direction: row;
}


.form-group input[type="text"], 
.form-group input[type="email"], 
.form-group input[type="tel"] {
  width: 100%;
}

.form-line{
  border: 1.5px solid #B4D3E0;
  margin-top: 10px;
}

#checkbox-group{
  display: flex;
  flex-direction: row ;
  justify-content: space-between;

}


.checkbox-group{
  /* Group 1000001775 */

display: flex;
flex-direction: row;
gap: 8px;
}
.checkbox-group label{
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
align-items: center;
color: #303030;
}
.form-text{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 5px  0;
  align-items: center;
  color: #303030; 
}

.form-box{
  display: flex;
  flex-direction: column;
  gap:15px;
}
.checkbox-group-two{
  display: flex !important;
  flex-direction: row;
  gap: 25px;
  
}


.checkbox-flex{
  display: flex;
align-items: center;
justify-content: center;
gap: 30px;
}


.checkbox-wrap{
  display: flex;
  gap: 30px;
  margin-top: 12px;
}

.form-fieldwrap{
  margin-top: 40px;
}

.last-field {
  display: flex;
  gap: 10px;

}

.button-group{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top:  110px;
}

.save{
  /* button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5.73474px 7.64632px;
gap: 4.78px;
width: 290.93px;
height: 45px;
background: #1D71B7;
border-radius: 5.73474px;
border: 1px solid #1D71B7;


font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 11px;
display: flex;
align-items: center;
color: #FEFEFE;
}

.next{
  /* button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5.73474px 7.64632px;
gap: 4.78px;
width: 290.93px;
height: 45px;

background: #ECF3F8;
border-radius: 5.73474px;
border: 1px solid #ECF3F8;
}


@media (max-width: 996px) and (min-width:730px) {
  .form-row {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-direction: column;
  }

  .form-group-two {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
  }

  .container {
      padding: 0 60px 0 60px;
  }

  .form-containtbox {
     
      gap: 20px;
  }
  .checkbox-group-three {
      flex-direction: column;
  }
  .checkbox-group-two {
      display: flex !important;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
  }
 
 
     .is-post{
         width: 50% !important;
        }
        .checkbox-flex {
          display: grid;
          grid-template-columns: 1fr 1fr;
      }
      .is-align {
          width: 100%;
      }
      .checkbox-wrap {
          width: 100%;
          flex-direction: column;
          gap: 10px;
      }   
      .is-row {
          display: flex;
          flex-direction: column !important;
      }
      .form-group-two input{
          max-width: 100%;
          width: 100%;
      }
      .is-biggap {
          gap: 15px !important;
      }
}

@media (max-width: 730px) {
  .is-biggap {
      gap: 15px !important;
  }
  .form-group-two {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
  }
  .form-group-two input{
      max-width: 100%;
      width: 100%;
  }
  
  
      .form-containtbox {
         
          gap: 20px;
      }
  .form {
      padding: 50px 0;
  }
  .form-row {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-direction: column;
  }
  .is-radio {
      display: flex;
      flex-direction: column;
  }
  .container {
      padding: 0 20px 0 20px;
  }
  .checkbox-group-three {
      flex-direction: column;
  }
  .checkbox-group-two {
      display: flex !important;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
  }
  .checkbox-flex {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
 
 
   

        .form-contain {
          padding: 40px 28px 60px 28px;
      }

      #checkbox-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
      }
      #form-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
      }
      .checkbox-wrap {
          width: 100%;
          flex-direction: column;
          gap: 10px;
      }

      .button-group {
          margin-top: 50px;
      }
      .is-align {
          width: 100%;
      }
      #is-flex {
          display: flex;
          flex-direction: column;
          gap: 10PX;
      }
}
`}</style>

    </>
  );
};

export default ApplicationForm5;

