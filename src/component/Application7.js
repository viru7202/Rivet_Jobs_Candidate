import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ApplicationForm7 = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    applicantSignature: "",
    date: "",
    printName: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission (you can add logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Navbar />
      <section className="form">
        <div className="container">
          <div className="form-wrap">
            <h2 className="form-heading">Application Form</h2>
            <div className="form-contain">
              <h3 className="form-subheading">Section 17: Temporary Worker Declaration</h3>
              <div className="form-fieldwrap">
                <form onSubmit={handleSubmit}>
                  <div className="form-containtbox">
                    <div className="text-wrap">
                      <ol className="text-list">
                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>1. Sharing of information :</b> RIVET JOBS is committed to operating under the Guidance to Employers (NHS Employers) in relation to the sharing of appropriate and relevant information between healthcare and/or social care organizations about the conduct or performance of a temporary worker where there is an identified risk to public and/or patient safety. In the event that a risk to public or patient safety is identified by the authority/organization where I am supplied, then Authority/organization shall be entitled to share appropriate and relevant information with other organizations where I provide services, either under a contract of employment or a contract of services. I will ensure I keep RIVET JOBS updated on my places of employment/contract of services for this purpose.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>2. Personal Data :</b> I agree that any data, which is ‘personal data’ under the Data
                            Protection Act, may be shared with RIVET JOBS group companies, clients, existing or prospective
                            payroll providers, contracted third parties for ID document checking or auditing bodies, for the
                            purpose of securing agency/locum/temporary work and ensuring I am compliant to standards required
                            and paid appropriately.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>3. Employment Checks :</b> I consent for employment checks to take place, electronic or otherwise,
                            and I understand that failure to provide accurate information may result in my application not
                            being progressed.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>4. Confidentiality Declaration :</b> At no time shall I divulge to any person, nor use for my own or
                            any other person’s benefit, any confidential or personal information of a Client/Patient, the
                            Company or in relation to any of their employees, business affairs, transactions or finances.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>5. Right to Work :</b>  I confirm I am legally permitted to work in the UK. I provide my express consent for RIVET JOBS to undertake any relevant checks with the UKBA or other Government Agencies, including but not limited to the Home Office on-line Biometric Visa or Employer Checking Services, against my employment status using any personal information and documents as reasonably required. I will immediately inform RIVET JOBS if my right to work status changes at any time.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>6. Occupational Health :</b> I agree to RIVET JOBS storing and supplying the following health information to their Occupational Health provider (as required for the role I am applying): Health Declarations, Occupational Health Questionnaire, Immunisation Records, Blood reports and any other health related information I have supplied for the purpose of securing agency/locum/temporary work for me. I am aware that I should not attend any shifts if I am not well enough to carry out my duties. This includes but is not limited to vomiting and diarrhea, ear, nose and throat infections or unidentified skin conditions/rashes. I agree to inform RIVET JOBS immediately.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>7. For female workers :</b> I agree to immediately inform RIVET JOBS if I am a new or expectant
                            mother.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>8. Review of Registration and Criminal Activity : </b>  I understand that my registration with RIVET JOBS is subject to the receipt of: satisfactory references, an occupational health review for fitness to work and satisfactory ACCESS NI disclosure/status checks as required for the role applied. I will inform RIVET JOBS immediately if my fitness to work/health status changes, if I am under investigation by the police, professional body or other organization, if I am convicted of an offence or receive cautions in the future, and if there are any changes or limitations placed on my professional registration, or circumstances which may affect my fitness to practice or ability in my professional capacity. I understand that failure to do so will prevent any further work being offered to me through RIVET JOBS. I am aware that I should not attend any shifts if I am not well enough to carry out my duties. This includes but is not limited to vomiting and diarrhea, ear, nose and throat infections or unidentified skin conditions/rashes. I agree to inform RIVET JOBS immediately.
                          </p>
                        </li>

                        <p className="text">
                          <b style={{ fontWeight: '600' }}>ACCESS NI consent for application, storage and use:</b>
                        </p>
                        <ul className="text-list list-gap">
                          <li style={{listStyle:'outside'}}>
                            <p className="text">
                              I give consent to RIVET JOBS to provide my personal details to ACCESS NI or Disclosure Scotland
                              as applicable, in order to obtain an ACCESS NI or PVG check for the purpose of obtaining and
                              maintaining agency / locum / temporary work for me.
                            </p>
                          </li>
                          <li style={{listStyle:'outside'}}>
                            <p className="text">
                            I agree to a copy of my ACCESS NI certificate to be submitted to organizations by RIVET JOBS for the purpose of obtaining agency/locum/temporary work for me. I understand this will be done in accordance with the Data ProtectionAct1998 and the ACCESS NI Code of Practice.
                            </p>
                          </li>

                          <li style={{listStyle:'outside'}}>
                            <p className="text">
                            I will provide the original copy of my ACCESS NI for inspection when required by RIVET JOBS. I give consent to RIVET JOBS holding a copy of my ACCESS NI and any other ACCESS NI related paper or electronic versions, on my personal file and sharing this information in accordance with the ACCESS NI Code of Practice for the purpose of obtaining and maintaining agency/locum/temporary work for me.
                            </p>
                          </li>

                          <li style={{listStyle:'outside'}}>
                            <p className="text">
                            If registered with the ACCESS NI Update Service, I give RIVET JOBS consent to check my ACCESS NI status updates part of this registration process and at regular intervals as and when required for the purpose of obtaining and maintaining agency/locum/temporary work for me.
                            </p>
                          </li>
                          <li style={{listStyle:'outside'}}>
                            <p className="text">
                            I declare that the information I have provided relating to criminal activity is accurate to the best of my knowledge.
                            </p>
                          </li>
                        </ul>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>9 . Scope of Practice :</b> I will only work within my scope of practice and under the policy
                            guidelines and instruction of the client’s authorized personnel.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>10 . Policies and Compliance :</b> I will comply with all RIVET JOBS Policies and Client’s Policies including but not limited to Data Protection Act, Health and Safety at Work Act, Caldecott Principles, Whistleblowing, Clinical Governance and all RIVET JOBS initial and on-going compliance requirements.
                          </p>
                        </li>
                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>11 . CV and References :</b> My CV submitted is current and otherwise.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>12 . Car Insurance: (If required for business purposes) :</b> I confirm that if I am using my vehicle for
                            business purposes whilst engaged by RIVET JOBS that I will ensure that I have insurance cover for
                            business purposes and I will provide RIVET JOBS with the certificate of insurance when requested.
                          </p>
                        </li>

                        <li>
                          <p className="text">
                            <b style={{ fontWeight: '500' }}>13 . Offer of permanent employment :</b> I will inform RIVET JOBS, if through introduction by RIVET JOBS
                            to an agency/locum/temporary assignment, I am offered permanent employment.
                          </p>
                        </li>
                        <li>
                          <p className="text">
                           14 . I understand that by accepting work through RIVET JOBS I am accepting and will adhere to the Terms of
                            Engagement and declarations with this registration form regardless of my payment methods, i.e. PAYE,
                            Umbrella or Limited company.
                          </p>
                        </li>

                        <p className="text">
                          <b style={{ fontWeight: '500' }}>Please note that any inconsistencies or non-disclosure of information provided in relation to previous
                            employment, investigations, convictions, criminal activity, fitness to practice, professional suspensions
                            or safeguarding related matters, will immediately render this application invalid.</b>
                        </p>

                        <p className="text">
                          <b style={{ fontWeight: '500' }}>I declare that all information supplied in this application is true to the best of my knowledge and I
                            agree to comply with all of the declarations and requirements listed throughout this registration form
                            and will notify RIVET JOBS immediately of any changes.</b>
                        </p>
                      </ol>

                      <div className="form-row is-largegap">
                        <div className="form-group">
                          <label>Applicant Signature :</label>
                          <input
                            type="text"
                            placeholder="Lorem Ipsum"
                            name="applicantSignature"
                            value={formData.applicantSignature}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Date :</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row is-largegap">
                        <div className="form-group">
                          <label>Print name :</label>
                          <input
                            type="text"
                            id="is-halfwidth"
                            placeholder="Lorem Ipsum"
                            name="printName"
                            value={formData.printName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-line"></div>

                    <h3 className="form-subheading">Further information :</h3>

                    <ol className="text-list">
                      <li className="sub-heading">
                        <h4 className="sub-heading">ACCESS NI consent for application, storage and use:</h4>
                        <ul className="text-list list-gap">
                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                            As you are applying to work in the health and social care sector, an ACCESS NI check will be required at the level appropriate for the role. If you are unsure of the level of ACCESS NI your role requires, please refer to www.gov.uk/ACCESS NI .
                            </p>
                          </li>
                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                              Information held on your ACCESS NI check may require disclosure to a client/authority prior to
                              commencing an assignment. Information held on your ACCESS NI check will only be disclosed with
                              your signed consent and in accordance with the ACCESS NI Code of Practice.
                            </p>
                          </li>

                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                              Most health and social care roles are subject to a Standard or Enhanced ACCESS NI check and are
                              therefore included in the Rehabilitation of Offenders Act 1974 Exceptions Order 1975 (amended
                              2013) for England and Wales.
                            </p>
                          </li>

                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">*The amendments to the Exceptions Order 1975 (2013) provide that certain convictions and cautions are ‘protected’ and are not subject to disclosure to employers and cannot be taken into account when making recruitment decisions. Guidance and criteria on the filtering of these cautions, warnings and convictions can be found on the Disclosure and Barring Service website: www.gov.uk/ government/organizations/disclosure-and-barring-service</p>
                          </li>

                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                            It is your responsibility to ensure that you disclose all convictions, warnings, cautions or additional information contained on your ACCESS NI certificate that are not subject to the ‘protected’ filtering by ACCESS NI . Failure to do so will render your application invalid. Confidential advice on the filtering and ‘protected’ convictions and cautions for workforce types can be obtained from NACRO, a crime reduction charity. www.nacro.org.uk
                            </p>
                          </li>

                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                              All members of the RIVET JOBS group fully comply with the ACCESS NI Code of Practice and undertake
                              to treat all applicants for positions fairly.
                            </p>
                          </li>
                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                            Please note: Any convictions and other criminal record information obtained through this Registration Form and the ACCESS NI checking service will not necessarily prevent employment through RIVET JOBS. A risk assessment will be carried out in conjunction with further information from you. This may be in the form of a written statement or interview to determine suitability for the nature of work you will be engaged. Any inconsistencies in the information provided throughout your ACCESS NI application process will render your registration invalid.</p>
                          </li>

                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                              In order to proceed with your registration, we require your consent for the application and disclosure of an ACCESS NI or PVG check, as per role requirements.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ol>

                

                    <ol className="text-list">
                      <li className="sub-heading">
                        <h4 className="sub-heading">2 . Overseas Police Check:</h4>
                        <ul className="text-list list-gap">
                          <li className="is-color"style={{listStyle:'outside'}}>
                            <p className="text">
                            In addition to the ACCESS NI disclosure check, all overseas applicants or any applicant (UK resident included) who have spent a continuous period of 6 months or more outside of the UK in the last 5 years prior to their registration with RIVET JOBS or during their engagement with RIVET JOBS, must provide an Overseas Police check. The Overseas Police check must be in accordance with that Country’s justice system and UK’s requirements and not be more than 3 months old at the time of their application or assignment for the position being offered. 
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ol>

                    <div className="edidprofile-buttons">
                        <div className="row">
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Confirm</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                
                                    <button>Save</button>
                                    
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
    
.form-wrap {
  padding-top: 25px;
}

.form-heading {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  align-items: center;
  text-decoration-line: underline;
  color: #1D71B7;
}

.form-contain {
  margin-top: 60px;
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  box-shadow: 0px 10px 10px rgba(104, 104, 104, 0.05);
  border-radius: 20px;
  padding: 60px 48px 90px 48px;
}

.form-subheading {
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

.form-containtbox {
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

.form-group-two input {
  max-width: 50%;
  width: 100%;
}

.form-group label {
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
  padding: 10px;

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

.text-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 16px !important;
}

.text {
  word-wrap: break-word;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #303030;


}

.text-wrap {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #303030;

}

.is-color{
     color: #303030;
  
}

.list-gap {
  gap: 0px !important;
}

.is-largegap {
  gap: 80px;
  display: flex;
  flex-direction: row;
}


#is-halfwidth {
  width: 100%;
  max-width: 45%;
}

.form-line {
  border: 1.5px solid #B4D3E0;
  margin-top: 10px;
}

.sub-heading{
  /* ACCESS NI consent for application, storage and use: As you are applying to work in the health and social care sector, an ACCESS NI check will be required at the level appropriate for the role. If you are unsure of the level of ACCESS NI your role requires, please refer to www.gov.uk/ACCESS NI . Information held on your ACCESS NI check may require disclosure to a client/authority prior to commencing an assignment. Information held on your ACCESS NI check will only be disclosed with your signed consent and in accordance with the ACCESS NI Code of Practice. Most health and social care roles are subject to a Standard or Enhanced ACCESS NI check and are therefore included in the Rehabilitation of Offenders Act 1974 Exceptions Order 1975 (amended 2013) for England and Wales. *The amendments to the Exceptions Order 1975 (2013) provide that certain convictions and cautions are ‘protected’ and are not subject to disclosure to employers and cannot be taken into account when making recruitment decisions. Guidance and criteria on the filtering of these cautions, warnings and convictions can be found on the Disclosure and Barring Service website: www.gov.uk/ government/organizations/disclosure-and-barring-service It is your responsibility to ensure that you disclose all convictions, warnings, cautions or additional information contained on your ACCESS NI certificate that are not subject to the ‘protected’ filtering by ACCESS NI . Failure to do so will render your application invalid. Confidential advice on the filtering and ‘protected’ convictions and cautions for workforce types can be obtained from NACRO, a crime reduction charity. www.nacro.org.uk All members of the RIVET JOBS group fully comply with the ACCESS NI Code of Practice and undertake to treat all applicants for positions fairly. Please note: Any convictions and other criminal record information obtained through this Registration Form and the ACCESS NI checking service will not necessarily prevent employment through RIVET JOBS. A risk assessment will be carried out in conjunction with further information from you. This may be in the form of a written statement or interview to determine suitability for the nature of work you will be engaged. Any inconsistencies in the information provided throughout your ACCESS NI application process will render your registration invalid. In order to proceed with your registration, we require your consent for the application and disclosure of an ACCESS NI or PVG check, as per role requirements. */


font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #1D71B7;


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

  #is-halfwidth {
      width: 100%;
      max-width: 100%;
  }

  .container {
      padding: 0 60px 0 60px;
  }

  .form-containtbox {
     
      gap: 20px;
  }

      .is-biggap {
          gap: 15px !important;
      }
}

@media (max-width: 730px) {
  .container {
      padding: 0 20px 0 20px;
  }
  .is-biggap {
      gap: 15px !important;
  }
  #is-halfwidth {
      width: 100%;
      max-width: 100%;
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
 
 
 
   

        .form-contain {
          padding: 40px 28px 60px 28px;
      }


      .button-group {
          margin-top: 50px;
      }
     
}
    `}</style>
    </>
  );
};

export default ApplicationForm7;
