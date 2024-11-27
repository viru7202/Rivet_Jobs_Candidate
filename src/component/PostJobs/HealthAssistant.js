import Navbar from "../Navbar";

function HealthAssistant() {
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="main-box-editprofile">
                    <div className="health-care-assitant-inter">
                        <div className="health-care-assitant-top">
                            <div className="health-care-assitant-topfile">
                                <div className="note-icon">
                                    <img src="Layer_1.png" alt="" />
                                </div>
                                <div className="note-icon-text">
                                    <h6>This is a preview of what people may see</h6>
                                    <p>Your job post may look slightly different when it goes live.</p>
                                </div>
                            </div>

                        </div>
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
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <p>  <span style={{ fontSize: '14px', color: '#3E3E3E', fontWeight: '700', lineHeight: '35px' }}>Job Type : </span>permanent</p>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <p>  <span style={{ fontSize: '14px', color: '#3E3E3E', fontWeight: '700', lineHeight: '35px' }}>Number of people to hire for this job : </span>2</p>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <p>  <span style={{ fontSize: '14px', color: '#3E3E3E', fontWeight: '700', lineHeight: '35px' }}>Work Location : </span>In person</p>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <p>  <span style={{ fontSize: '14px', color: '#3E3E3E', fontWeight: '700', lineHeight: '35px' }}>Location : </span>London</p>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <h3>Schedule : </h3>
                                    <ul>
                                        <li>Day Shift</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <p>  <span style={{ fontSize: '14px', color: '#3E3E3E', fontWeight: '700', lineHeight: '35px' }}>Start Date : </span>5th March 2024</p>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <h3>Benefits : </h3>
                                    <ul>
                                        <li>Company pension</li>
                                        <li>Cycle to work scheme</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <h3>Supplemental pay types : </h3>
                                    <ul>
                                        <li>English ( Must Have)</li>
                                        <li>Medical terminology  ( Preferred )</li>
                                        <li>Driving license ( Must Have)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <h3>Language</h3>
                                    <ul>
                                        <li>English</li>
                                        <li>Gujarati</li>
                                        <li>Hindi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <h3>Skill</h3>
                                    <ul>
                                        <li>English</li>
                                        <li>Gujarati</li>
                                        <li>Hindi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="health-care-aist">
                                <div className="job-detial-benefit">
                                    <h3>License</h3>
                                    <ul>
                                        <li>Driving License</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="health-care-aist">
                                <div className="job-detial-about">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                <p ><b style={{fontWeight:'600'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</b></p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <style jsx>{`
            .job-detial-about p {
    margin-top: 10px;
    color: #3E3E3E;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    padding: 0; 
}
            .heath-aist h3 {
    padding-top: 8px;
    font-size: 20px;
    font-weight: 700;
    color: #3E3E3E;
    padding-bottom: 3%;
}
             .health-care-card-main {
    padding: 0;
  
    width: 100%;
    display: flex;
       margin: 0% !important;
    border: none;
    margin-bottom: 20px;
}
    .health-care-img {
   
    margin: 0;
}
                 .main-box-editprofile {
                    height: 100%;
                    width: 100%;
                    margin:0; 
                      background-color: #EDF4F9;
    border-radius: 15px;
    border: 1px solid #AFDDFD;
                    margin-top: 20px;
                    /* box-shadow: 6px 2px 6px 6px rgb(244, 243, 243); */
                    padding: 3% 4%;
                }
                `}</style>
        </div>
    )
}
export default HealthAssistant;