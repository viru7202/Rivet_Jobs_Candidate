import React from "react";
import Navbar from "../Navbar";

function DescribetheJob() {
  return (
    <div>
      <Navbar />
      <div className="add-job-img">
        <img src="assets/img/Group 8755.png" alt="" />
      </div>
      <div className="main-box-editprofile">
        <div className="describethe-job">
          <div className="describethe-job-text">
            <h3>Job description </h3>
          </div>
          <div className="describethe-job-input">
            <textarea></textarea>
          </div>
          {/* <div class="file-inputs">
            <input type="file" />
            <span class="button">
            <i class="fa-solid fa-file-pdf"></i>
            </span>
           <h3> Upload a pdf of Job  Description</h3>
          </div> */}

        </div>
        <div className="or">
          <p>Or</p>
        </div>
        <div class="file-inputs-upload">
          <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" id="myFile" name="myFile" />
            <label> <i class="fa-solid fa-file-pdf"> </i></label><label for="myFile">Upload a pdf of Job  Description</label>

          </form>
        </div>

        <div className="job-type-date">
          <h4>Job ref. ID</h4>
          <div className='job-date-traning'>
            <input type='text' placeholder="jobrfid865952" className="form-control" />
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
      <style jsx>{`
.file-inputs-upload form {
    width: 100%;
    display: flex;
    text-align: center;
    border: 1px solid #B4D3E0;
    border-radius: 5px;
    padding: 2%;
}
    .file-inputs-upload {
    display: ruby-text;
    text-align: left;
    
  border: none;
}

     `}</style>
    </div>
  );
}
export default DescribetheJob;
