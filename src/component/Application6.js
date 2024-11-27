import React from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ApplicationForm6 = () => {
    return (
        <>
            <Navbar />
            <section className="form">
                <div className="container">
                    <div className="form-wrap">
                        <h2 className="form-heading">Application Form</h2>
                        <div className="form-contain">
                            <h3 className="form-subheading">Section 13: Next of Kin (NOK) and Emergency Contact</h3>
                            <div className="form-fieldwrap">
                                <form>
                                    <div className="form-containtbox">
                                        <div className="form-group">
                                            <div className="form-group-two">
                                                <label>NOK Name :</label>
                                                <input type="text" placeholder="cbavcjkavcjhv akclqaclkbcla" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group is-add">
                                                <label>Relationship :</label>
                                                <input type="text" placeholder="Father / Mother / Brother etc." />
                                            </div>
                                            <div className="form-group is-post">
                                                <label htmlFor="currentpostcode">Post Code</label>
                                                <input type="text" id="currentpostcode" name="currentpostcode" placeholder="380015" />
                                            </div>
                                        </div>

                                        <p className="form-text">In case of emergency please provide name and contact details (if different from NOK):</p>

                                        <div className="form-group">
                                            <div className="form-group-two">
                                                <label>Name :</label>
                                                <input type="text" placeholder="cbavcjkavcjhv akclqaclkbcla" />
                                            </div>
                                        </div>

                                        <div className="form-row is-largegap">
                                            <div className="form-group">
                                                <label>Relationship :</label>
                                                <input type="text" placeholder="Father / Mother / Brother etc." />
                                            </div>
                                            <div className="form-group">
                                                <label>Contact Number :</label>
                                                <input type="number" placeholder="125412366552" />
                                            </div>
                                        </div>

                                        <div className="form-line"></div>

                                        <h3 className="form-subheading">Section 14: Conflict of Interest</h3>
                                        <p className="form-text">Please confirm if a potential or actual conflict of interest exists, whereby commitments and obligations are likely to be compromised by your other material interests, business interests or relationships (economic or otherwise) whilst undertaking temporary work assignments through RIVET JOBS (this includes but not limited to: providing contacts to services that you or a close relative or affiliate would gain from, any personal gain, financial or otherwise from business services provided outside your agreed assignment)..</p>

                                        <div className="form-group">
                                            <div className="form-group is-biggap">
                                                <div className="checkbox-group">
                                                    <input type="checkbox" />
                                                    <label>I have no conflict of interest to report, but I will immediately notify RIVET JOBS if this changes</label>
                                                </div>

                                                <p className="form-text">OR</p>
                                                <div>
                                                    <div className="checkbox-group">
                                                        <input type="checkbox" />
                                                        <label>I have the following conflict of interest to report (please provide further information below):</label>
                                                    </div>
                                                    <input type="text" className="is-add" placeholder="bvwvclkbkakjgoib kjabcgkwbcjgoih clwblhlnclkqblhl" />
                                                </div>

                                                <div className="form-line"></div>

                                                <h3 className="form-subheading">Section 15: Working Time Regulations (WTR) Opt Out Agreement</h3>
                                                <p className="form-text">Please indicate below if you wish to be exempt or not from Section 2(2) of the Working Time (amendment) Regulations 2003, which limits the average working week to 48 hours.</p>

                                                <div className="form-group">
                                                    <div className="form-group is-biggap">
                                                        <div className="checkbox-group">
                                                            <input type="checkbox" />
                                                            <label> Yes - I agree that I may work for more than an average of 48 hours a week. If I change my mind, I will give RIVET JOBS 7 days’ notice in writing to end this agreement.</label>
                                                        </div>

                                                        <div className="checkbox-group">
                                                            <input type="checkbox" />
                                                            <label>No - If you do not wish to be exempt from WTR, RIVET JOBS will not be responsible for collating hours of work other than those worked for RIVET JOBS.</label>
                                                        </div>
                                                    </div>

                                                    <div className="form-line"></div>

                                                    <h3 className="form-subheading">Section 16: Diversity and Inclusion</h3>
                                                    <p className="form-text">As an Equal Opportunities employer our aim is to ensure all employees, temporary workers and applicants do not receive less than favorable treatment through discrimination on the grounds of age, disability, gender, reassignment, marriage and civil partnerships, race, religion or belief, sex or sexual orientation. To enable us to monitor the effectiveness of our policy, we would ask that all applicants complete the questionnaire provided on our website. All information provided will be kept confidential and will be used only for statistical monitoring.</p>
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
                                <Link to="/ApplicationForm7">

                                    <button>Next</button>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                        </div>
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

.gap{
  gap: 15px !important;
  display: flex;
  flex-direction: column;
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
.is-add{
  width: 76% !important;
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
 
  .is-add{
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
  .gap{
      gap: 20px !important;
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
      .is-add{
          width: 100% !important;
         }
}
`}</style>

        </>
    );
};

export default ApplicationForm6;
