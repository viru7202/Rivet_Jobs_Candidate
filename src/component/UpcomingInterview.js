import React from "react";
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function UpcomingInterview() {
  return (
    <div>
      <Navbar />
      <div className="dashbord-text">
        <h3>Interviews</h3>
        {/* <hr/> */}
      </div>
      <div className="clint-webpage-1 candidate-detailview">
        {/* <div class="clint-main-inputs candidate-detail"> */}
        <div className="clint-inputs view-details">
          <div class="clint-input1">
          <i class="fa fa-briefcase" aria-hidden="true"></i>
            <input type="text" placeholder="Job title, keywords or company" />
          </div>

          <div className="clint-search-button">
            <button data-id="model" data-target="#model">
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Tabs>
        <div className="permanent-job-tab-clint-webpg2">
          <TabList>
            <Tab>
              <p>All Interviews (6)</p>{" "}
            </Tab>
            <Tab>
              <p>Interviews Availability (6)</p>
            </Tab>
          </TabList>
        </div>
        <TabPanel></TabPanel>

        <TabPanel></TabPanel>

        <TabPanel></TabPanel>
      </Tabs>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="upcoming-part1">
              <div className="upcoming-text">
                <div className="upcoming-main-text">
                  <div className="upcoming-text1">
                    <h3>Upcoming  2</h3>
                  </div>
                  <div className="upcoming-text2">
                    <h3>Past 8</h3>
                  </div>
                </div>
              </div>
              <div className="upcoming-text-box1">
                <div className="upcoming-box1-text">
                    <div className="upcoming-box1-text1">
                        <h3>John  </h3>
                        <p>Healthcare Assistant </p>
                        <p>Cinnamon</p>
                    </div>
                    <div className="upcoming-box2-text">
                        <div className="upcoming-box2-text1">
                            <p>Timing :-  11:00 to  12:00</p>
                        </div>
                        <div className="upcoming-box2-text2">
                            <p>Applied: Feb 19</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upcoming-text-box1">
                <div className="upcoming-box1-text">
                    <div className="upcoming-box1-text1">
                        <h3>John  </h3>
                        <p>Healthcare Assistant </p>
                        <p>Cinnamon</p>
                    </div>
                    <div className="upcoming-box2-text">
                        <div className="upcoming-box2-text1">
                            <p>Timing :-  11:00 to  12:00</p>
                        </div>
                        <div className="upcoming-box2-text2">
                            <p>Applied: Feb 19</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
        <div className="health-care-card-main-box">
          <div className="health-care-img">
            <img src="assets/img/brand-3 1.png" alt="" />
          </div>

          <div className="health-care-text">
            <div className="health-care-aist">
              <div className="heath-aist">
                <h3>Healthcare Assistant</h3>
              </div>
              <div className="health-collection-text">
                <div className="cinnamon-care-collection">
                  <p> <span className="cl">Cinnamon Care Collection</span><img src="assets/img/Group 653.png" alt="" /></p>
                </div>
                <div className="cinnamon-care-collection">
                  <p> <img src="assets/img/Group 627.png" alt="" /><span className="rev">84 Reviews</span><img src="assets/img/Group 653.png" alt="" /></p>
                </div>
              </div>
              <div className="london">
                <p>London</p>
              </div>
              <div className="london-year">
                <p>£28,844 a year - Permanent</p>
              </div>
             
             
              <div className="job-detial mt-3">
                <h3>Job details </h3>
                <p>Here’s how the job details align with your <span>profile.</span> <img src="assets/img/Group 655.png" alt="" /> </p>
              </div>
              <div className="pay-health">
                <div className="pay-img">
                  <img src="assets/img/Group 661.png" alt="" />
                </div>
                <div className="pay-text">
                  <p>Pay</p>
                  <button>$28,250 a year</button>
                </div>
              </div>
              <div className="pay-health">
                <div className="pay-img">       
                  <img src="assets/img/Group 662.png" alt="" />
                </div>
                <div className="pay-text">
                  <p>Schedule</p>
                  <button>Day Shift</button>
                </div>
                
              </div>
              <div className="pay-health">
                <div className="pay-img">
                <img src="assets/img/Group 4399.png" alt="" />
                </div>
                <div className="pay-text">
                  <p>Schedule</p>
                  <button>Day Shift</button>
                </div>
                
              </div>
            </div>

            <div className="health-line"></div>
            
            <div className="health-care-aist">
              <div className="job-detial-location">
                <h3>Location </h3>
                <p> <i class="fa-solid fa-location-dot"></i>    66 Commercial Street, London E1    </p>
              </div>
            </div>

            <div className="health-line"></div>

            <div className="health-care-aist">
              <div className="job-detial-benefit">
                <h3>Benefits </h3>
                <p> Pulled from the full job description </p>
                <ul>
                  <li>Company pension</li>
                  <li>Cycle to work scheme</li>
                </ul>
              </div>
            </div>

            <div className="health-care-aist">
              <div className="job-detial-benefit">
                <h3>Key Qualification </h3>
                
                <ul>
                  <li>English ( Must Have)</li>
                  <li>Medical terminology  ( Preferred )</li>
                  <li>Driving license ( Must Have)</li>
                </ul>
              </div>
            </div>

            <div className="health-line"></div>

            <div className="health-care-aist">
              <div className="job-detial-about">
                <h3>About us</h3>
                <p> Crisis is the national charity for people experiencing homelessness. We know that homelessness is not inevitable.
                  We know that together we can end it. </p>

                <p>  This is a brilliant opportunity for you to join a dynamic and ambitious team as we deliver
                  a consistently excellent experience to our supporters.</p>
              </div>
            </div>

          </div>
        </div>
            </div>
      </div>
     </div>
     </div>
  );
}
export default UpcomingInterview;
