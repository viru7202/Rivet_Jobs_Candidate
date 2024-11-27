import React from 'react'
import Navbar from './Navbar';
import { Link } from "react-router-dom";


export default function EmploymentHistory() {
  return (

    <div>
      <Navbar />
      <div className="dashbord-text-editprofile">
        <h3>Employment History</h3>
        {/* {/ <hr/> /} */}
      </div>
      <div>
        <div className="main-box-editprofile-1">
          <div className="main-box-editprofile">
            <div className="heding-profile">
              <h3 style={{ textAlign: "center" }}>
                Employment History and References
                (Please provide your last 3 years of Employment History)
              </h3>

              <div className='employment-history-text mt-4'>
                <h5 style={{ fontSize: '20px', fontWeight: '700', color: '#3E3E3E' }}>
                  Current or Most recent employer :
                </h5>

              </div>

              <hr className="hr"></hr>


            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="email-text">
                  <h4>Company Name </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Company Name"
                  ></input>
                </div>
              </div>

              <div className='col-md-4'>
                <div className="email-text">
                  <h4>Work Start From</h4>
                </div>
                <div className="job-type-date mt-2">
                  <div className='job-datee'>
                    <input type='date' placeholder="date" className="form-control" />
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className="email-text">
                  <h4>To</h4>
                </div>
                <div className="job-type-date mt-2">
                  <div className='job-datee'>
                    <input type='date' placeholder="date" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Position </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Position"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Name </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Name"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Position </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Position"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Email </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Email"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Mobile Number </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Mobile Number"
                  ></input>
                </div>
              </div>


            </div>


            <div className='employment-history-text mt-4'>
              <h5 style={{ fontSize: '20px', fontWeight: '700', color: '#3E3E3E' }}>
                Previous Employment :
              </h5>

            </div>


            <hr className="hr"></hr>

            <div className="row">
              <div className="col-md-4">
                <div className="email-text">
                  <h4>Company Name </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Company Name"
                  ></input>
                </div>
              </div>

              <div className='col-md-4'>
                <div className="email-text">
                  <h4>Work Start From</h4>
                </div>
                <div className="job-type-date mt-2">
                  <div className='job-datee'>
                    <input type='date' placeholder="date" className="form-control" />
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className="email-text">
                  <h4>To</h4>
                </div>
                <div className="job-type-date mt-2">
                  <div className='job-datee'>
                    <input type='date' placeholder="date" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Position </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Position"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Name </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Name"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Position </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Position"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Email </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Email"
                  ></input>
                </div>
              </div>

              <div className="col-md-4">
                <div className="email-text">
                  <h4>Referee Mobile Number </h4>
                </div>
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Referee Mobile Number"
                  ></input>
                </div>
              </div>


            </div>

            <div className="edidprofile-buttons">
                        <div className="row">
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Continue</button>
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
        </div>
      </div>
    </div>
  )
}
