import React, { useState } from 'react';
import Navbar from "./Navbar";

const ApplicationForm3 = () => {
  // States for each checkbox group
  const [isRiskChecked, setIsRiskChecked] = useState({ yes: false, no: false });
  const [isSuspendedChecked, setIsSuspendedChecked] = useState({ yes: false, no: false });
  const [isInvestigatedChecked, setIsInvestigatedChecked] = useState({ yes: false, no: false });
  const [isFinancialChecked, setIsFinancialChecked] = useState({ yes: false, no: false });
  const [isVisaChecked, setIsVisaChecked] = useState({ UKNational: false, Eeanational: false, Visa: false, Other: false });

  // Handle checkbox change
  const handleCheckboxChange = (setter, value) => {
    setter(value);
  };

  return (
    <>
      <Navbar />
      <section className="form">
        <div className="container">
          <div className="form-wrap">
            <h2 className="form-heading">Application Form</h2>

            <div className="form-contain">
              <h3 className="form-subheading">Section 5: Investigations/Suspensions</h3>
              <div className="form-fieldwrap">
                <form>
                  <div className="form-containtbox">
                    <div className="form-group">
                      <ol className="is-ol">
                        {/* Question 1 */}
                        <li>
                          <div className="checkbox-group-two">
                            <label className="is-add">
                              Have you ever had any proceedings brought against you in work or personal life, in the UK or
                              any other country that could be considered a risk to safeguarding of children or vulnerable
                              adults?
                            </label>
                            <div className="checkbox-flex">
                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="yes"
                                  name="working"
                                  value="yes"
                                  checked={isRiskChecked.yes}
                                  onChange={() =>
                                    setIsRiskChecked({ yes: !isRiskChecked.yes, no: false })
                                  }
                                />
                                <label htmlFor="yes">Yes</label>
                              </div>

                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="no"
                                  name="working"
                                  value="no"
                                  checked={isRiskChecked.no}
                                  onChange={() =>
                                    setIsRiskChecked({ yes: false, no: !isRiskChecked.no })
                                  }
                                />
                                <label htmlFor="no">No</label>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* Question 2 */}
                        <li>
                          <div className="checkbox-group-two">
                            <label className="is-add">
                              Have you been suspended/terminated/had restrictions placed on your practice from
                              employment/organizations or Professional Regulatory Body(s) in the UK or any other country?
                            </label>
                            <div className="checkbox-flex">
                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="yes"
                                  name="working"
                                  value="yes"
                                  checked={isSuspendedChecked.yes}
                                  onChange={() =>
                                    setIsSuspendedChecked({ yes: !isSuspendedChecked.yes, no: false })
                                  }
                                />
                                <label htmlFor="yes">Yes</label>
                              </div>

                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="no"
                                  name="working"
                                  value="no"
                                  checked={isSuspendedChecked.no}
                                  onChange={() =>
                                    setIsSuspendedChecked({ yes: false, no: !isSuspendedChecked.no })
                                  }
                                />
                                <label htmlFor="no">No</label>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* Question 3 */}
                        <li>
                          <div className="checkbox-group-two">
                            <label className="is-add">
                              Are you aware of any current investigations by any employer/organization or Professional
                              Regulatory Body in the UK or any other country?
                            </label>
                            <div className="checkbox-flex">
                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="yes"
                                  name="working"
                                  value="yes"
                                  checked={isInvestigatedChecked.yes}
                                  onChange={() =>
                                    setIsInvestigatedChecked({ yes: !isInvestigatedChecked.yes, no: false })
                                  }
                                />
                                <label htmlFor="yes">Yes</label>
                              </div>

                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="no"
                                  name="working"
                                  value="no"
                                  checked={isInvestigatedChecked.no}
                                  onChange={() =>
                                    setIsInvestigatedChecked({ yes: false, no: !isInvestigatedChecked.no })
                                  }
                                />
                                <label htmlFor="no">No</label>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* Question 4 */}
                        <li>
                          <div className="checkbox-group-two">
                            <label className="is-add">
                              Have you any pending or previous financial or civil actions brought against you? <br />If ‘yes’ to
                              any of the above, please explain and include any current restrictions to your professional
                              registration below:
                            </label>
                            <div className="checkbox-flex">
                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="yes"
                                  name="working"
                                  value="yes"
                                  checked={isFinancialChecked.yes}
                                  onChange={() =>
                                    setIsFinancialChecked({ yes: !isFinancialChecked.yes, no: false })
                                  }
                                />
                                <label htmlFor="yes">Yes</label>
                              </div>

                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  id="no"
                                  name="working"
                                  value="no"
                                  checked={isFinancialChecked.no}
                                  onChange={() =>
                                    setIsFinancialChecked({ yes: false, no: !isFinancialChecked.no })
                                  }
                                />
                                <label htmlFor="no">No</label>
                              </div>
                            </div>
                          </div>
                          <div className="is-margin">
                            <input type="text" placeholder="Xyz Abc" />
                          </div>
                        </li>
                      </ol>
                    </div>

                    {/* RTW Status */}
                    <div className="form-line"></div>
                    <div className="form-box">
                      <h3 className="form-subheading">Section 6: Right to Work (RTW) in the UK</h3>
                      <div className="form-group">
                        <div className="checkbox-group-two">
                          <label className="is-add is-align">What is your RTW status in the UK?</label>
                          <div className="checkbox-flex">
                            <div className="checkbox-group">
                              <input
                                type="checkbox"
                                checked={isVisaChecked.UKNational}
                                onChange={() => handleCheckboxChange(setIsVisaChecked, { ...isVisaChecked, UKNational: !isVisaChecked.UKNational })}
                              />
                              <label>UK National</label>
                            </div>
                            <div className="checkbox-group">
                              <input
                                type="checkbox"
                                checked={isVisaChecked.Eeanational}
                                onChange={() => handleCheckboxChange(setIsVisaChecked, { ...isVisaChecked, Eeanational: !isVisaChecked.Eeanational })}
                              />
                              <label>EEA National</label>
                            </div>
                            <div className="checkbox-group">
                              <input
                                type="checkbox"
                                checked={isVisaChecked.Visa}
                                onChange={() => handleCheckboxChange(setIsVisaChecked, { ...isVisaChecked, Visa: !isVisaChecked.Visa })}
                              />
                              <label>Visa</label>
                            </div>
                            <div className="checkbox-group">
                              <input
                                type="checkbox"
                                checked={isVisaChecked.Other}
                                onChange={() => handleCheckboxChange(setIsVisaChecked, { ...isVisaChecked, Other: !isVisaChecked.Other })}
                              />
                              <label>Other</label>
                            </div>
                          </div>
                        </div>

                        <div className="checkbox-group-two">
                          <label className="is-add is-align">Biometric card :</label>
                          <div className="checkbox-flex">
                            <div className="checkbox-group">
                              <input type="checkbox" />
                              <label>Yes</label>
                            </div>
                            <div className="checkbox-group">
                              <input type="checkbox" />
                              <label>No</label>
                            </div>
                          </div>
                        </div>

                        <div className="checkbox-group-two">
                          <label className="is-add is-align">Visa: Visa/ILR in current passport:</label>
                          <div className="checkbox-flex">
                            <div className="checkbox-group">
                              <input type="checkbox" />
                              <label>Yes</label>
                            </div>
                            <div className="checkbox-group">
                              <input type="checkbox" />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row is-space">
                        <div className="form-group">
                          <label htmlFor="currentJobTitle">*Visa type :</label>
                          <input
                            type="text"
                            id="currentJobTitle"
                            name="currentJobTitle"
                            placeholder="Xyz Abc"

                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="currentPlaceOfWork">* Visa expiry :</label>
                          <input
                            type="text"
                            id="currentPlaceOfWork"
                            name="currentPlaceOfWork"
                            placeholder="05/2025"

                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group is-width">
                          <label htmlFor="specialtyDetails">*Visa restrictions:</label>
                          <input
                            type="text"
                            id="specialtyDetails"
                            name="specialtyDetails"
                            placeholder="Xyz Abc"

                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-line"></div>
                    <div className="form-box">
                      <h3 className="form-subheading">Section 7: Criminal Record Check (Please refer to point 1 at the end of this form for further information)</h3>
                      <p className="form-text">Disclosure and Barring Service (Access NI) the Rehabilitation of Offenders Exceptions Order 1975 (2013) (England and Wales)</p>
                      <p className="form-text">*For health and social care workers applying to work in Scotland you will need to complete an additional form. Please ask your RIVET JOBS representative for a copy of this form.</p>
                      <div className="form-group">


                        <ol className="is-ol" type="1">
                          <li>
                            <label>Access NI check required for role (confirmed with RIVET JOBS representative for job role type applied):</label>
                            <div className="form-group" id="checkbox-groupbox-two">
                              {['Enhanced with barred list check', 'Enhanced not on the barred list', 'Standard'].map(area => (
                                <div className="checkbox-group" key={area}>
                                  <input
                                    type="checkbox"
                                    value={area}
                                    onChange={handleCheckboxChange}
                                  />
                                  <label>{area}</label>
                                </div>
                              ))}
                            </div>
                          </li>
                          {/* Question 1 */}
                          <li>
                            <div className="checkbox-group-two">
                              <label className="is-add">
                                Access NI Update Service - registered with appropriate Access NI level and workforce type :
                              </label>
                              <div className="checkbox-flex">
                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="yes"
                                    name="working"
                                    value="yes"
                                    checked={isRiskChecked.yes}
                                    onChange={() =>
                                      setIsRiskChecked({ yes: !isRiskChecked.yes, no: false })
                                    }
                                  />
                                  <label htmlFor="yes">Yes</label>
                                </div>

                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="no"
                                    name="working"
                                    value="no"
                                    checked={isRiskChecked.no}
                                    onChange={() =>
                                      setIsRiskChecked({ yes: false, no: !isRiskChecked.no })
                                    }
                                  />
                                  <label htmlFor="no">Not registered</label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group-two">
                              <label htmlFor="accountHolderName">Account Holder Name:</label>
                              <input
                                type="text"
                                placeholder="ABC XYZ"
                              />
                            </div>
                          </li>


                          {/* Question 2 */}
                          <li>
                            <div className="checkbox-group-two">
                              <label className="is-add">
                                For enhanced with or without barred list/Standard Access NI check: Do you have any convictions, cautions, reprimands, warnings or additional information that are not ‘protected’ as defined by the Rehabilitation of Offenders Act 1974 (Exceptions) Order 1975 (as amended in 2013)?
                              </label>
                              <div className="checkbox-flex">
                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="yes"
                                    name="working"
                                    value="yes"
                                    checked={isSuspendedChecked.yes}
                                    onChange={() =>
                                      setIsSuspendedChecked({ yes: !isSuspendedChecked.yes, no: false })
                                    }
                                  />
                                  <label htmlFor="yes">Yes</label>
                                </div>

                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="no"
                                    name="working"
                                    value="no"
                                    checked={isSuspendedChecked.no}
                                    onChange={() =>
                                      setIsSuspendedChecked({ yes: false, no: !isSuspendedChecked.no })
                                    }
                                  />
                                  <label htmlFor="no">No</label>
                                </div>
                              </div>
                            </div>
                          </li>

                          {/* Question 3 */}
                          <li>
                            <div className="checkbox-group-two">
                              <label className="is-add">
                                Are you aware of any previous, current or pending investigations, police enquiries or legal proceedings following allegations made against you (in the UK or any other country)?
                              </label>
                              <div className="checkbox-flex">
                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="yes"
                                    name="working"
                                    value="yes"
                                    checked={isInvestigatedChecked.yes}
                                    onChange={() =>
                                      setIsInvestigatedChecked({ yes: !isInvestigatedChecked.yes, no: false })
                                    }
                                  />
                                  <label htmlFor="yes">Yes</label>
                                </div>

                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="no"
                                    name="working"
                                    value="no"
                                    checked={isInvestigatedChecked.no}
                                    onChange={() =>
                                      setIsInvestigatedChecked({ yes: false, no: !isInvestigatedChecked.no })
                                    }
                                  />
                                  <label htmlFor="no">No</label>
                                </div>
                              </div>
                            </div>
                          </li>

                          {/* Question 4 */}
                          <li>
                            <div className="checkbox-group-two">
                              <label className="is-add">
                                For temporary workers who will be working in Scotland only (PVG Scheme – Disclosure Scotland): <br />     Do you have any spent or unspent convictions?
                                <br />      If answered ‘yes’ to any of the above, please provide details in your own words below  </label>
                              <div className="checkbox-flex">
                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="yes"
                                    name="working"
                                    value="yes"
                                    checked={isFinancialChecked.yes}
                                    onChange={() =>
                                      setIsFinancialChecked({ yes: !isFinancialChecked.yes, no: false })
                                    }
                                  />
                                  <label htmlFor="yes">Yes</label>
                                </div>

                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="no"
                                    name="working"
                                    value="no"
                                    checked={isFinancialChecked.no}
                                    onChange={() =>
                                      setIsFinancialChecked({ yes: false, no: !isFinancialChecked.no })
                                    }
                                  />
                                  <label htmlFor="no">No</label>
                                </div>
                              </div>
                            </div>
                            <div className="is-margin">
                              <input type="text" placeholder="Xyz Abc" />
                            </div>
                          </li>
                        </ol>
                        <p className="form-text">Overseas Police Checks (Please refer to point 2 at the end of this form for further information)</p>
                        <ol className="is-ol" type="1">
                          {/* Question 1 */}
                          <li>
                            <div className="checkbox-group-two">
                              <label className="is-add">
                                 Have you been outside of the UK for 6 months or more in the past 5 years?<br /> *If ‘yes’, overseas police check(s) will be required
                              </label>
                              <div className="checkbox-flex">
                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="yes"
                                    name="working"
                                    value="yes"
                                    checked={isRiskChecked.yes}
                                    onChange={() =>
                                      setIsRiskChecked({ yes: !isRiskChecked.yes, no: false })
                                    }
                                  />
                                  <label htmlFor="yes">Yes</label>
                                </div>

                                <div className="checkbox-group">
                                  <input
                                    type="checkbox"
                                    id="no"
                                    name="working"
                                    value="no"
                                    checked={isRiskChecked.no}
                                    onChange={() =>
                                      setIsRiskChecked({ yes: false, no: !isRiskChecked.no })
                                    }
                                  />
                                  <label htmlFor="no">No</label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="form-group-two">
                              <label htmlFor="accountHolderName">Dates (months and/years outside the UK in past 5 yrs.):</label>
                              <input
                                type="text"
                                placeholder="2 years and 6 months"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="form-group-two">
                              <label htmlFor="accountHolderName">Location(s) :</label>
                              <input
                                type="text"
                                placeholder="Vxhvaucvjkwcg"
                              />
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="edidprofile-buttons">
                      <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                          <div className="editprofile-button">
                            <button>Save</button>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="editprofile-button">
                            <button>Next</button>
                          </div>
                        </div>
                        <div className="col-md-2"></div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
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
#checkbox-groupbox-two {
    display: grid
;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
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
    gap: 20px;
}
.form-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}



.form-group  label {
padding-top: 8px;
    line-height: 1.8;
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
font-style: normal;
font-weight: 500;
font-size: 12px;
display: flex;
align-items: center;
color: #999999;
}


.is-margin{
    margin-top: 15px;
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
.is-width{
 width: 85% !important;
}

.is-post{
    width: 24% !important;
   }
.checkbox-group{
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
        padding-top: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    align-items: center;
    color: #303030; 
}
.is-flex{
    display: flex;
}
.is-align{
    width: 30%;
}
.form-box{
    display: flex;
    flex-direction: column;
    gap: 0px;
}
.checkbox-group-two{
    display: flex !important;
    flex-direction: row;
    gap: 25px; 
}

.is-ol{
list-style: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
   
}
.is-list{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 16px !important;
}
.is-row{
    display: flex;
    flex-direction: row !important;
}
#is-width{
    width: 50%;
}
#is-auto{
    width: auto;
}
#is-smallwidth{
    width: 40%;
}
.checkbox-flex{
    display: flex;
align-items: center;
justify-content: center;
gap: 30px;
}

.checkbox-group-three{
    display: flex;
    flex-direction: column;
    width: 100%;
    
}
.checkbox-wrap{
    display: flex;
    gap: 30px;
    margin-top: 12px;
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
.gap{
    gap: 20px !important;
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
    #is-width {
        width: 100%;
    }
    #is-smallwidth {
        width: 100%;
    }
    #checkbox-group {
        display: grid;
        grid-template-columns: 1fr 1fr ;
    }
    .is-radio {
        display: flex;
        flex-direction: column;
    }
    .is-width{
        width: 100% !important;
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
}

@media (max-width: 730px) {
.form-group-two {
    display: block;
             }
    .gap{
        gap: 20px !important;
    }
       #checkbox-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
    } 
    #checkbox-groupbox-two {
    display: grid;
      grid-template-columns: 1fr;
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
    #is-width {
        width: 100%;
    }
    #is-smallwidth {
        width: 100%;
    }
    .is-row {
        display: flex;
        flex-direction: column !important;
    }
    .is-width{
        width: 100% !important;
       }
       
       .is-post{
           width: 70% !important;
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
}
      `}</style>
    </>

  );
};

export default ApplicationForm3;
