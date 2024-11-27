import React from "react";

export default function LocamSelectedCandidates() {
  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Selected Candidates</h3>
          {/* <hr/> */}
        </div>
      </div>
      <div className="clint-webpage-1 candidate-detailview">
        {/* <div class="clint-main-inputs candidate-detail"> */}
        <div className="clint-inputs view-details">
          <div class="clint-input1">
            <input type="text" placeholder="Search Candidates" />
          </div>

          <div className="clint-search-button mt-2">
            <button data-id="model" data-target="#model">
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="upcoming-part1">
              <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p className="para"> 2/2 qualification s met</p>
                    <p>Cinnamon </p>
                  </div>
                </div>
              </div>

              <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p className="para"> 2/2 qualification s met</p>
                    <p>Cinnamon </p>
                  </div>
                </div>
              </div>

              <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p className="para"> 2/2 qualification s met</p>
                    <p>Cinnamon </p>
                  </div>
                </div>
              </div>

              <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p className="para"> 2/2 qualification s met</p>
                    <p>Cinnamon </p>
                  </div>
                </div>
              </div>

              <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p className="para"> 2/2 qualification s met</p>
                    <p>Cinnamon </p>
                  </div>
                </div>
              </div>

              <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p className="para"> 2/2 qualification s met</p>
                    <p>Cinnamon </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="col-md-8">
            <div className="health-care-card-main-box">
            <button className="invite-button">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 3.25C0 2.38805 0.34241 1.5614 0.951903 0.951903C1.5614 0.34241 2.38805 0 3.25 0H12.75C13.612 0 14.4386 0.34241 15.0481 0.951903C15.6576 1.5614 16 2.38805 16 3.25V12.75C16 13.612 15.6576 14.4386 15.0481 15.0481C14.4386 15.6576 13.612 16 12.75 16H3.25C2.38805 16 1.5614 15.6576 0.951903 15.0481C0.34241 14.4386 0 13.612 0 12.75V3.25ZM12.28 6.03C12.4125 5.88783 12.4846 5.69978 12.4812 5.50548C12.4777 5.31118 12.399 5.12579 12.2616 4.98838C12.1242 4.85097 11.9388 4.77225 11.7445 4.76883C11.5502 4.7654 11.3622 4.83752 11.22 4.97L7 9.19L5.03 7.22C4.96134 7.14631 4.87854 7.08721 4.78654 7.04622C4.69454 7.00523 4.59523 6.98318 4.49452 6.98141C4.39382 6.97963 4.29379 6.99816 4.2004 7.03588C4.10701 7.0736 4.02218 7.12974 3.95096 7.20096C3.87974 7.27218 3.8236 7.35701 3.78588 7.4504C3.74816 7.54379 3.72963 7.64382 3.73141 7.74452C3.73319 7.84522 3.75523 7.94454 3.79622 8.03654C3.83721 8.12854 3.89631 8.21134 3.97 8.28L6.47 10.78C6.61063 10.9205 6.80125 10.9993 7 10.9993C7.19875 10.9993 7.38937 10.9205 7.53 10.78L12.28 6.03ZM3.5 17C3.79406 17.4602 4.19934 17.8388 4.67841 18.101C5.15748 18.3632 5.69489 18.5004 6.241 18.5H13.246C13.936 18.5 14.6192 18.3641 15.2566 18.1001C15.8941 17.836 16.4733 17.449 16.9611 16.9611C17.449 16.4733 17.836 15.8941 18.1001 15.2566C18.3641 14.6192 18.5 13.936 18.5 13.246V6.241C18.5003 5.69479 18.3629 5.15732 18.1006 4.67825C17.8382 4.19917 17.4594 3.79394 16.999 3.5V13.246C16.9991 13.7389 16.9022 14.2271 16.7136 14.6825C16.5251 15.138 16.2486 15.5518 15.9001 15.9004C15.5516 16.249 15.1378 16.5256 14.6824 16.7142C14.227 16.9029 13.7389 17 13.246 17H3.5Z" fill="white"/>
</svg>


Selected
            </button>
            <div className="profile-Page">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="profile-T">
                  <div className="flex">
                    <div className="name"> John Smith</div>
                  </div>

                  <div className="mail">
                    <p>Healthcare Assistant </p>
                    <p>smith@gmail.com</p>
                    <p className="para"> Applied to Healthcare Assistant  - Cinnamon  </p>
                    
                  </div>
                  <div className="experience-section">
      <h2>Applicant Experience</h2>
      
        <div  className="experience-card">
          <div className="experience-row">
            <strong>Previous Company:</strong>
            <span>XYZ PVT LTD.</span>
          </div>
          <div className="experience-row">
            <strong>Previous Company Profile:</strong>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
          </div>
          <div className="experience-row">
            <strong>Previous Company CTC:</strong>
            <span>6,00,000 per annum</span>
          </div>
          <div className="experience-row">
            <strong>Last Job Duration:</strong>
            <span>May 2020 - July 2022</span>
          </div>
          <div className="experience-row">
            <strong>Previous Company:   </strong>
            <span>XYZ PVT LTD.</span>
          </div>
          <div className="experience-row">
            <strong>Previous Company Profile: </strong>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
          </div>
          <div className="experience-row">
            <strong>Previous Company CTC: </strong>
            <span>6,00,000 per annum</span>
          </div>
          <div className="experience-row">
            <strong>Last Job Duration: </strong>
            <span>May 2020 - July 2022</span>
          </div>
          <div className="edidprofile-buttons">
          <div className="row">
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Download CV </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Preview CV</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </div>
                </div>
              </div>
            
             
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-Page {
          border-bottom: none !important;
          /* padding-bottom: 30px; */
          background-color: white;
          padding: 10px;
        }
        .flex {
          border-bottom: none !important;
          padding-bottom: 0px;
        }
        .para {
          margin-top: 30px;
          font-weight: 500;
          margin-bottom: 7px;
        }
          .upcoming-part1 {
    /* height: 250px; */
    margin: 4% 6%;
    border-radius: 25px;
    padding: 0% 0px 16px;
    background-color:white;
    border: 1px solid #black !important;
}
    .health-care-card-main-box {
    display: block !important;
}
    .invite-button {
          background-color: #0073c2; /* Blue color */
          color: white; /* White text */
          border: none; /* Remove default border */
          border-radius: 4px; /* Rounded corners */
          padding: 10px 20px; /* Add padding */
          font-size: 16px; /* Font size */
          cursor: pointer; /* Pointer cursor on hover */
          font-family: Arial, sans-serif; /* Font styling */
          display: flex; /* Flexbox for icon and text */
          align-items: center; /* Center items vertically */
          gap: 10px; /* Space between icon and text */
        }

        .invite-button:hover {
          background-color: #005a99; /* Darker blue on hover */
        }

        .button-icon {
          display: inline-block;
          vertical-align: middle;
        }
          .experience-section {
  font-family: Arial, sans-serif;
  // margin: 20px;
}

h2 {
  text-align: left;
  margin-bottom: 20px;
}

.experience-card {
  border: none;
  padding: 0px !important;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: none;
  line-height:2;
}

.experience-row {
  display: flex;
  margin-bottom: 10px;
}

.experience-row strong {
  width: 200px;
  font-weight: bold;
}

.experience-row span {
  flex: 1;
}
  .experience-section h2{
  font-size:20px;
  color:black;
  font-weight: bold;
  padding-top: 10px;
  }
  .edidprofile-buttons {
     margin-bottom: 0px !important;
}

      `}</style>
    </div>
  );
}
