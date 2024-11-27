import React from "react";
import Navbar from "./Navbar";

function Vacanciesdetail() {

  return (
    <div>
      <Navbar />
      
     

      <div className="container">
      <div className="dashbord-text">
          <h3>Vacancies</h3>
          {/* <hr/> */}
        </div>
        <div className="health-care-card-main">
          <div className="health-care-img">
            <img src="assets/img/brand-3 1.png" alt="" />
          </div>

          <div className="health-care-text">
            <div className="health-care-aist">
              <div className="heath-aist">
                <h3>Healthcare Assistant</h3>
              </div>
              <div className="health-collection-textt">
                <div className="cinnamon-care-collection">
                  <p> <span className="cl">Cinnamon Care Collection</span><img src="assets/img/Group 653.png" alt="" /></p>
                </div>
                <div className="cinnamon-care-collection" style={{marginTop: '10px'}}>
                  <p> <img src="assets/img/Group 627.png" alt="" /><span className="rev">84 Reviews</span><img src="assets/img/Group 653.png" alt="" /></p>
                </div>
              </div>
              <div className="london">
                <p>London</p>
              </div>
              <div className="london-year">
                <p>£28,844 a year - Permanent</p>
              </div>
             
              <div className="health-apply-now">
                <div className="apply-now">
                  <button><p>Apply now</p></button>
                </div>
                <div className="apply-now-img">
                  <img src="assets/img/Group 768.png" alt="" />
                </div>
              </div>
              <div className="job-detial">
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
    </div >
  );
}
export default Vacanciesdetail;
