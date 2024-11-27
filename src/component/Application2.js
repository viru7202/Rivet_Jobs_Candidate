import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ApplicationForm2 = () => {
  const [formData, setFormData] = useState({
    title: '',
    currentJobTitle: '',
    currentPlaceOfWork: '',
    reasonForLeaving: '',
    currentBand: '',
    specialty: '',
    ionisingRadiation: '',
    cvSubmitted: '',
    experienceAreas: [],
    qualifications: ['', '', ''],
    professionalRegistrationUK: '',
    nisccNumber: '',
    expiryDate: '',
    registrationNumber: '',
    revalidationDate: '',
    professionalDetails: [],
    others: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({ ...prev, [name]: [...prev[name], value] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name].filter((item) => item !== value)
      }));
    }
  };

  const handleQualificationChange = (index, value) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications[index] = value;
    setFormData({ ...formData, qualifications: updatedQualifications });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submission logic
  };

  return (
    <>
      <Navbar />
      <section className="form">
        <div className="container">
          <div className="form-wrap">
            <h2 className="form-heading">Application Form</h2>
            <div className="form-contain">
              <h3 className="form-subheading">Section 3: Employment Experience</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-containtbox">
                  <div className="form-row is-space">
                    <div className="form-group">
                      <label htmlFor="currentJobTitle">Current job title</label>
                      <input
                        type="text"
                        id="currentJobTitle"
                        name="currentJobTitle"
                        placeholder="Web Developer"
                        value={formData.currentJobTitle}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="currentPlaceOfWork">Current place of work</label>
                      <input
                        type="text"
                        id="currentPlaceOfWork"
                        name="currentPlaceOfWork"
                        placeholder="Ahmedabad"
                        value={formData.currentPlaceOfWork}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group is-width">
                      <label>If not working, please state reason for leaving previous employment:</label>
                      <input
                        type="text"
                        name="reasonForLeaving"
                        placeholder="Xyz Abc"
                        value={formData.reasonForLeaving}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row gap">
                    <div className="form-group">
                      <label htmlFor="currentBand">How long have you worked in your current band/grade?</label>
                      <input
                        type="text"
                        id="currentBand"
                        name="currentBand"
                        placeholder="5 Years"
                        value={formData.currentBand}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="specialty">Which core band/grade and specialty do you want to work?</label>
                      <input
                        type="text"
                        id="specialty"
                        name="specialty"
                        placeholder="kcbiwOCNlk coopn"
                        value={formData.specialty}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group is-width">
                      <label htmlFor="specialtyDetails">Specialty:</label>
                      <input
                        type="text"
                        id="specialtyDetails"
                        name="specialtyDetails"
                        placeholder="Xyz Abc"
                        value={formData.specialtyDetails}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="checkbox-group-two">
                      <label className="is-add">Do you hold an ionising radiation certificate? (If ‘yes’ a copy is required with your application)</label>
                      <div className="checkbox-flex">
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            id="ionisingYes"
                            name="ionisingRadiation"
                            value="yes"
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="ionisingYes">Yes</label>
                        </div>
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            id="ionisingNo"
                            name="ionisingRadiation"
                            value="no"
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="ionisingNo">No</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="checkbox-group-two">
                      <label className="is-add">Up to date CV submitted as part of registration: (If ‘no’, it must be supplied prior to Interview)</label>
                      <div className="checkbox-flex">
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            id="cvYes"
                            name="cvSubmitted"
                            value="yes"
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="cvYes">Yes</label>
                        </div>
                        <div className="checkbox-group">
                          <input
                            type="checkbox"
                            id="cvNo"
                            name="cvSubmitted"
                            value="no"
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="cvNo">No</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Please provide details of all of the areas you have 6 months or more experience:</label>
                    <div className="form-group" id="checkbox-groupbox-two">
                      {['A&E', 'Anesthetic', 'Ante-natal', 'Cardiology', 'Care homes', 'Community', 'Elderly care', 'ENT', 'ITU/HDU', 'Ophthalmology', 'Mental health', 'Neonatal', 'Obstetrics', 'Oncology', 'Recovery', 'Orthopaedics', 'Outpatients', 'Paediatrics', 'Practice nurse', 'Scrub', 'Renal/Dialysis', 'Respiratory medicine', 'Urology', 'SCBU', 'Surgery', 'Maxillary/Facial medicine'].map(area => (
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
                  </div>

                  <div className="form-line"></div>

                  <h3 className="form-subheading">Section 4: Qualifications and Professional Registration</h3>
                  <div>
                    <p className="form-text">Highest level of qualification attained:</p>
                    <div className="form-row">
                      <div className="form-group is-add">
                        <label htmlFor="qualification">Qualification</label>
                        {formData.qualifications.map((qualification, index) => (
                          <input
                            type="text"
                            key={index}
                            value={qualification}
                            onChange={(e) => handleQualificationChange(index, e.target.value)}
                            placeholder={`Qualification ${index + 1}`}
                          />
                        ))}
                      </div>
                      <div className="form-group is-post">
                        <label>Miles willing to travel</label>
                        <input
                          type="text"
                          placeholder="2017 - 2020"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="form-text">Professional Registration:</div>
                    <div className="form-group">
                      <div className="is-radio">
                        <label>Professional registration held in the UK:</label>

                        <label>
                          <input
                            type="radio"
                            name="professionalRegistrationUK"
                            value="yes"
                            onChange={handleChange}
                          /> yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="professionalRegistrationUK"
                            value="no"
                            onChange={handleChange}
                          /> No
                        </label>
                        <div class="checkbox-flex">
                          <div class="checkbox-group">
                            <input type="checkbox" id="ionisingYes" name="ionisingRadiation" value="yes"/>
                              <label for="ionisingYes">Full Time</label></div><div class="checkbox-group">
                            <input type="checkbox" id="ionisingNo" name="ionisingRadiation" value="no"/>
                              <label for="ionisingNo">Temporary</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>NISCC/NMC Registration:</label>
                      <input
                        type="number"
                        placeholder="14523656"
                        value={formData.nisccNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Expiry date:</label>
                      <input
                        type="date"
                        value={formData.expiryDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Registration number (PIN):</label>
                      <input
                        type="number"
                        placeholder="256"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Revalidation Date (NMC only):</label>
                      <input
                        type="number"
                        placeholder="8413232161"
                        value={formData.revalidationDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Professional details:</label>
                    <div className="form-group" id="checkbox-groupbox-one">
                      {['Healthcare assistant', 'Registered nurse', 'Registered midwife', 'Registered mental health nurse', 'ODP', 'Theatre nurse', 'Registered nurse: Children', 'Registered nurse: Learning difficulties'].map(detail => (
                        <div className="checkbox-group" key={detail}>
                          <input
                            type="checkbox"
                            value={detail}
                            onChange={handleCheckboxChange}
                          />
                          <label>{detail}</label>
                        </div>
                      ))}
                    </div>
                    <div className="last-field">
                      <label>Others:</label>
                      <input
                        id="others"
                        type="text"
                        value={formData.others}
                        onChange={handleChange}
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
                                <Link to="/ApplicationForm3">

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
      </section>

      <style jsx>{`
    .form {
     padding:  0; 
}
     .container {
    padding: 0 ;
}
.form-text{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  align-items: center;
  color: #303030; 
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
  .form-line{
    border: 1.5px solid #B4D3E0;
    margin-top: 10px;
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
  
  
  
  .form-group input[type="text"], 
  .form-group input[type="email"], 
  .form-group input[type="tel"] {
    width: 100%;
  }
  
  .is-space{
    gap: 80px !important;
  }
  
  .is-add{
    width: 76% !important;
   }
   
   .is-post{
       width: 24% !important;
      }
  
  
  #checkbox-groupbox-two{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  
  #checkbox-groupbox-one{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
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
  
  .is-flex{
    display: flex;
  }
  .checkbox-group-two{
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .checkbox-flex{
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  }
  
  .checkbox-group-three{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: start;
  }
  #form-grid{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .is-radio{
    display: flex ;
        gap: 10%;
  }
  .last-field {
    display: flex;
    gap: 10px;
  
  }
  #is-blank{
  border-top:none;
  border-left: none;
  border-right: none;
  background-color: white;
  border-radius: 0;
  border-bottom: 1px solid #000000;
  max-width: 250px;
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
  
    .container {
        padding: 0 60px 0 60px;
    }
  
  
  .is-space{
    gap: 20px !important;
  }
   
  
    .checkbox-group-three {
        flex-direction: column;
    }
    .checkbox-group-two {
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    #checkbox-groupbox-two{
        display: grid;
        grid-template-columns: 1fr 1fr ;
    }
    #checkbox-groupbox-one{
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
       .is-add{
        width: 100% !important;
       }
       .is-post{
           width: 50% !important;
          }
  }
  
  @media (max-width: 730px) {
    .form {
        padding: 50px 0;
    }
    .form-row {
        display: flex;
        justify-content: space-between;
        gap: 30px;
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
    }
    #checkbox-groupbox-one{
        display: grid;
        grid-template-columns: 1fr 1fr ;
    }
  
    .is-space{
        gap: 20px !important;
    }     
    .is-radio {
        display: flex;
        flex-direction: column;
    }
    
    .checkbox-group-three {
        flex-direction: column;
    }
    .checkbox-group-two {
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .is-add{
        width: 100% !important;
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
  
        #checkbox-groupbox-two{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        #form-grid {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
  
        .button-group {
            margin-top: 50px;
        }
  }
  


          `}</style>
    </>

  );
};

export default ApplicationForm2;
