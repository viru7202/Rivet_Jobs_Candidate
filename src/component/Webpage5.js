import React from "react";
import Navbar from "./Navbar";
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Webpage5() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="add-job-detail-img">
                    <img src="assets/img/Group 876.png" alt="" />
                </div>


                <div className="add-job-detail-form">
                    <div className="job-type">
                        <h4>Job Type</h4>
                        <div className="from-group-job-type">
                            <select name="id_board" id="id_board" className="form-select" required="">
                                <option value="-- Select Board--">Permanent</option>
                                <option>Pancard</option>
                                <option>Adhar card</option>
                            </select>
                        </div>
                    </div>
                    <div className="job-type">
                        <h4>Schedule </h4>
                        <div className="from-group-job-type">
                            <select name="id_board" id="id_board" className="form-select" required="">
                                <option value="-- Select Board--">dayshift</option>
                                <option>Pancard</option>
                                <option>Adhar card</option>
                            </select>
                        </div>
                    </div>
                    <div className="job-type">
                        <h4>Is there a planned start  date of this job?</h4>
                        <div className="from-group-job-type">
                            <select name="id_board" id="id_board" className="form-select" required="">
                                <option value="-- Select Board--">Yes</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="job-type-date">
                        <div className='col-md-2 job-date'>
                            <input type='date' placeholder="date" className="form-control" />
                        </div>
                    </div>
                    <div className="add-pay-benefit">
                        <h3>Add pay and benefits </h3>
                    </div>
                    <div className="job-type-pay">
                        <h3>Pay</h3>
                        <p>Review the pay we estimated for your job and adjust it as needed. Check your local minimum wage.</p>
                    </div>
                    <div className="job-type">
                        <div className="col-md-2">
                            <h4>Show pay by</h4>
                            <div className="from-group-job-type">
                                <select name="id_board" id="id_board" className="form-select" required="">
                                    <option value="-- Select Board--">Range</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="job-type">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Minimum</h4>
                                <div className="from-group-job-type-permonth">

                                    {/* <select name="id_board" id="id_board" className="form-select" required="">
                                        <option value="-- Select Board--">(£) 8,451.98</option>

                                    </select> */}
                                    <input type='text' placeholder="(£) 8,451.98" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="to-max-min">
                                    <h4>to</h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4>Maximum</h4>
                                <div className="from-group-job-type-permonth">
                                    {/* <select name="id_board" id="id_board" className="form-select" required="">
                                        <option value="-- Select Board--">(£) 8,451.98</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select> */}
                                      <input type='text' placeholder="(£) 8,451.98" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <h4>Rate</h4>
                                <div className="from-group-job-type-permonth">
                                    <select name="id_board" id="id_board" className="form-select" required="">
                                        <option value="-- Select Board--">Per month</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-pay-supple">
                        <h3 className="supple-pay">Supplemental pay </h3>

                        <Tabs>
                            <div className='supple-pay-job-tab '>
                                <TabList>
                                    <Tab><p>Bonus scheme</p> </Tab>
                                    <Tab><p>Yearly bonus</p></Tab>
                                    <Tab><p>Performance Bonus</p></Tab>
                                    <Tab><p>Commission pay</p></Tab>
                                    <Tab><p>Tips</p></Tab>
                                    <Tab><p>Quarterly Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                </TabList>
                            </div>

                        </Tabs>
                    </div>
                    <div className="add-pay-supple">
                        <h3 className="supple-pay">Benefits</h3>

                        <Tabs>
                            <div className='supple-pay-job-tab '>
                                <TabList>
                                    <Tab><p>Bonus scheme</p> </Tab>
                                    <Tab><p>Yearly bonus</p></Tab>
                                    <Tab><p>Performance Bonus</p></Tab>
                                    <Tab><p>Commission pay</p></Tab>
                                    <Tab><p>Tips</p></Tab>
                                    <Tab><p>Quarterly Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                    <Tab><p>Loyalty Bonus</p></Tab>
                                </TabList>
                            </div>

                        </Tabs>
                    </div>
                    <div className="job-type-date">
                        <div className='job-date-traning'>
                            <input type='text' placeholder="Training" className="form-control" />
                        </div>
                    </div>
                    <div className="edidprofile-buttons">
                        <div className="row">
                        
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Back</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Continue</button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default Webpage5;
