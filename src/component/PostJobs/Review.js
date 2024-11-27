import Navbar from "../Navbar";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function Review() {
  return (
    <div>
      <Navbar />

      <div className="add-job-img">
        <img src="/assets/img/icons/review-hero.png"></img>
      </div>
      {/* <div className="main-content-1"> */}
      <div className="main-box-editprofile">
        <div className="row">
          <div className="line">
            <div className="job-basics">Add job details</div>
            <div className="pen-icon">
              <img src="/assets/img/icons/edit-pen.svg"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="title">
              <div className="job-title">Job title</div>
            </div>
            <div className="title">
              <div className="job-title">Number of opening</div>
            </div>
            <div className="title">
              <div className="job-title">Company for this job</div>
            </div>

            <div className="title">
              <div className="job-title">
                Which option best describes this job's location?
              </div>
            </div>
            <div className="title">
              <div className="job-title">
                What is the street address for this location?
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="health-assistant">Health Care Assistant</div>
            <div className="health-assistant">2</div>
            <div className="health-assistant">Torbit</div>
            <div className="health-assistant">London</div>
            <div className="health-assistant">London</div>
          </div>
          <hr style={{borderTop:'2px solid #b4d3e0', opacity:'initial' , margin:"20px 0"}}></hr>

          <div className="line">
            <div className="job-basics">Add job details</div>
            <div className="pen-icon">
              <img src="/assets/img/icons/edit-pen.svg"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="title">
              <div className="job-title">Job type</div>
            </div>
            <div className="title">
              <div className="job-title">Schedule</div>
            </div>
            <div className="title">
              <div className="job-title">Pay</div>
            </div>

            <div className="title">
              <div className="job-title">Supplemental Pay</div>
            </div>
            <div className="title">
              <div className="job-title">Benefits</div>
            </div>
          </div>
          <div className="col-6">
            <div className="health-assistant">
              <p>Full-time Permanent</p>
            </div>
            <div className="health-assistant">
              <p>Day shift Monday to Friday</p>
            </div>
            <div className="health-assistant">
              <p>£ 8,451.98 - 25,836.23 per month</p>{" "}
            </div>
            <div className="health-assistant">
              <p>Performance bonus Yearly bonus Quarterly bonus</p>
            </div>
            <div className="health-assistant">
              <p>
                Health insurance Provident Fund Paid sick time Food provided
              </p>{" "}
            </div>
          </div>
          <hr style={{borderTop:'2px solid #b4d3e0', opacity:'initial' , margin:"20px 0"}}></hr>

          <div className="line">
            <div className="job-basics"> Describe the job</div>
            <div className="pen-icon">
              <img src="/assets/img/icons/edit-pen.svg"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="title">
              <div className="job-title">Job description</div>
            </div>
          </div>
          <div className="col-6">
            <div className="health-assistant">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto eveniet, dolor quo repellendus pariatur.
                Lorem ipsum dolor sit amet
              </p>
              <h6>Show full description</h6>
            </div>
          </div>
          <hr style={{borderTop:'2px solid #b4d3e0', opacity:'initial' , margin:"20px 0"}}></hr>

          <div className="line">
            <div className="job-basics">Set preferences</div>
            <div className="pen-icon">
              <img src="/assets/img/icons/edit-pen.svg"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="title">
              <div className="job-title">Communication preferences</div>
            </div>
            <div className="title">
              <div className="job-title">Application deadline</div>
            </div>
          </div>
          <div className="col-6">
            <div className="title">
              <div className="job-title">Email</div>
            </div>
            <div className="title">
              <div className="job-title">DD/MM/YYYY</div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
        {/* </div> */}

        <div className="para">
          By selecting<span className="black"> Confirm</span>, you agree that
          this job post reflects your requirements, and agree it will be
          posted and applications will be processed following Indeed's
          <span className="blue"> Terms, Cookie</span> and
          <span className="blue"> Privacy</span> Policies.
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

      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            "DatePicker",
            "MobileDatePicker",
            "DesktopDatePicker",
            "StaticDatePicker",
          ]}
        >
          <DemoItem>
            <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider> */}
      
    </div>
  );
}

export default Review;
