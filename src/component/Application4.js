import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Application4 = () => {
  const [formData, setFormData] = useState({
    immunizationRecords: {
      TB: false,
      Measles: false,
      Mumps: false,
      Rubella: false,
      Varicella  : false,
      HepatitisB : false,
    },
    eppRecords: {
      HepatitisB: false,
      HepatitisC: false,
      HIV: false,
    },
    trainingCertificates: {
      nhsMandatoryTraining: '',
      safeguardingChildren: '',
      practicalMovingHandling: '',
      lifeSupportTraining: '',
      physicalRestraint: '',
    },
    referees: [
      { title: '', forename: '', surname: '', specialty: '', grade: '', hospital: '', email: '', employmentFrom: '', employmentTo: '' },
      { title: '', forename: '', surname: '', specialty: '', grade: '', hospital: '', email: '', employmentFrom: '', employmentTo: '' },
      { title: '', forename: '', surname: '', specialty: '', grade: '', hospital: '', email: '', employmentFrom: '', employmentTo: '' },
    ],
  });

  const handleCheckboxChange = (section, key) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key],
      },
    }));
  };

  const handleInputChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedReferees = [...prev.referees];
      updatedReferees[index][field] = value;
      return { ...prev, referees: updatedReferees };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <section className="form">
        <div className="container">
          <div className="form-wrap">
            <h2 className="form-heading">Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-contain">
                <h3 className="form-subheading">Section 8: Work Health Assessment and Immunizations</h3>
                <div className="form-fieldwrap">
                  <div className="form-containtbox">
                    <div className="form-group">
                      <p className="form-text">
                        You will be required to complete an Occupational Health (OH) Questionnaire and supply confirmation of immunization for our OH provider to review your fitness for work.
                      </p>
                      <label>Please confirm if you hold the following records:</label>
                      <div className="form-group" id="checkbox-group">
                        {Object.keys(formData.immunizationRecords).map((key) => (
                          <div className="checkbox-group" key={key}>
                            <input
                              type="checkbox"
                              checked={formData.immunizationRecords[key]}
                              onChange={() => handleCheckboxChange('immunizationRecords', key)}
                            />
                            <label>{key}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <p className="form-text">
                        If you will be working in Exposure Prone Procedures (EPP) e.g., Theatres/Midwives/A&E/Surgeons/OB&GYNE etc., you will be required to provide the following additional blood results.
                      </p>
                      <label>Please confirm if you hold the following records:</label>
                      <div className="form-group" id="is-flex">
                        {Object.keys(formData.eppRecords).map((key) => (
                          <div className="checkbox-group" key={key}>
                            <input
                              type="checkbox"
                              checked={formData.eppRecords[key]}
                              onChange={() => handleCheckboxChange('eppRecords', key)}
                            />
                            <label>{key}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="form-line"></div>

                    <div>
                      <h3 className="form-subheading">Section 9: Training</h3>
                      <p className="form-text">
                        Please indicate the current training certificates held: (All current certificates will need to be provided to RIVET JOBS for verification.)
                      </p>
                    </div>

                    <div className="is-smallspace">
                      {Object.keys(formData.trainingCertificates).map((key) => (
                        <div className="form-group" key={key}>
                          <div className="checkbox-group-two">
                            <label className="is-add">{key.replace(/([A-Z])/g, ' $1').trim()}:</label>
                            <div className="checkbox-flex">
                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  checked={formData.trainingCertificates[key] === 'yes'}
                                  onChange={() => handleInputChange(key, formData.trainingCertificates[key] === 'yes' ? 'no' : 'yes')}
                                />
                                <label>Yes</label>
                              </div>
                              <div className="checkbox-group">
                                <input
                                  type="checkbox"
                                  checked={formData.trainingCertificates[key] === 'no'}
                                  onChange={() => handleInputChange(key, formData.trainingCertificates[key] === 'no' ? 'yes' : 'no')}
                                />
                                <label>No</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="form-line"></div>

                    <div>
                      <h3 className="form-subheading">Section 10: References</h3>
                      <p className="form-text">
                        Please provide details of referees to cover the past 3 years of employment. Recent references need to support the grade and specialty you wish to work in. All references supplied must be from a supervisor/line manager with whom you have worked.
                      </p>
                      <p className="form-text">
                        By providing referee details to RIVET JOBS, you are providing consent for your referees to be contacted immediately.
                      </p>
                    </div>

                    {formData.referees.map((referee, index) => (
                      <div className="form-box" key={index}>
                        <div className="form-row">
                          <div className="form-group gap-zero">
                            <label htmlFor={`title-${index}`}>Title :</label>
                            <input
                              type="text"
                              id={`title-${index}`}
                              value={referee.title}
                              onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                              placeholder="Mr/Mrs/Miss"
                            />
                          </div>
                          <div className="form-group gap-zero">
                            <label htmlFor={`forename-${index}`}>Forename</label>
                            <input
                              type="text"
                              id={`forename-${index}`}
                              value={referee.forename}
                              onChange={(e) => handleInputChange(index, 'forename', e.target.value)}
                              placeholder="Ipsum"
                            />
                          </div>
                          <div className="form-group gap-zero">
                            <label htmlFor={`surname-${index}`}>Surname</label>
                            <input
                              type="text"
                              id={`surname-${index}`}
                              value={referee.surname}
                              onChange={(e) => handleInputChange(index, 'surname', e.target.value)}
                              placeholder="Mxibiusx"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group gap-zero">
                            <label>Specialty :</label>
                            <input
                              type="text"
                              value={referee.specialty}
                              onChange={(e) => handleInputChange(index, 'specialty', e.target.value)}
                              placeholder="Web Developer"
                            />
                          </div>
                          <div className="form-group gap-zero">
                            <label>Grade :</label>
                            <input
                              type="text"
                              value={referee.grade}
                              onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
                              placeholder="8.09"
                            />
                          </div>
                          <div className="form-group gap-zero">
                            <label>Hospital :</label>
                            <input
                              type="text"
                              value={referee.hospital}
                              onChange={(e) => handleInputChange(index, 'hospital', e.target.value)}
                              placeholder="Shelby Hospital"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group gap-zero">
                            <label>E-Mail :</label>
                            <input
                              type="email"
                              value={referee.email}
                              onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                              placeholder="loremipsum@mail.com"
                            />
                          </div>
                          <div className="form-group gap-zero">
                            <label>Employment dates– From :</label>
                            <input
                              type="date"
                              value={referee.employmentFrom}
                              onChange={(e) => handleInputChange(index, 'employmentFrom', e.target.value)}
                            />
                          </div>
                          <div className="form-group gap-zero">
                            <label>Employment dates– To :</label>
                            <input
                              type="date"
                              value={referee.employmentTo}
                              onChange={(e) => handleInputChange(index, 'employmentTo', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

<div className="row">
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Save</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                <Link to="/ApplicationForm5">

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

.is-smallspace{
  gap: 15px !important;
  display: flex;
  flex-direction: column;
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

#is-flex{
  display: flex;
  flex-direction: row;
  gap: 20PX;
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
  justify-content: space-between;
  
}
.gap-zero{
  gap: 0 !important;
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

.form-fieldwrap{
  margin-top: 40px;
}


#is-blank{
border-top:none;
border-left: none;
border-right: none;
background-color: white;
border-radius: 0;
border-bottom: 1px solid #000000;
max-width: 100px;

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
  .is-smallspace{
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
 
  #checkbox-group {
      display: grid;
      grid-template-columns: 1fr 1fr ;
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
  .is-smallspace{
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

export default Application4;
