import React from "react";
import Navbar from "./Navbar";

function ClientDetailView() {
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="dashbord-text">
        <h3>Candidates</h3>
        {/* <hr/> */}
      </div>
      </div>
      <div className="clint-webpage-1 candidate-detailview">
        {/* <div class="clint-main-inputs candidate-detail"> */}
        <div className="clint-inputs view-details">
          <div class="clint-input1">
            <input type="text" placeholder="Search Candidates" />
          </div>

          <div className="clint-search-button my-2">
            <button data-id="model" data-target="#model">
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="client-detail-text">
        <h3>All active candidates</h3>
      </div>
      <div className="container">
        <div className="clint-detail-part1">
          <div className="row">
            <div className="col-md-4">
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
              <div className="clint-detail-box">
                <h3>John Smith </h3>
                <div className="clint-detail-box-text">
                  <p>Healthcare Assistant  </p> <li>Cinnamon</li>
                </div>
                <h6>2/2 qualification s met</h6>
              </div>
            </div>

            <div className="col-md-8">
              <div className="clint-detail-buttons">
                <div className="clint-detail-button1">
                  <button>
                    <i class="fa-solid fa-calendar"></i>Invite For interview
                  </button>
                </div>
                <div className="clint-detail-button2">
                  <button>
                    <i class="fa-solid fa-message"></i>Message
                  </button>
                </div>
                <div className="clint-detail-button3">
                  <button>
                    <i class="fa-solid fa-phone"></i>Call
                  </button>
                </div>
                <div className="clint-detail-buttons1">
                  <div className="clint-detail-button4">
                    <button>
                      <i class="fa-solid fa-check"></i>
                    </button>
                  </div>
                  <div className="clint-detail-button5">
                    <button>
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="clint-detail-part-2">
                <div className="clint-part2-text">
                  <h3>Smith</h3>
                  <p>Healthcare Assistant </p>
                  <p>smith@gmail,com</p>
                  <p>Applied to Healthcare Assistant - Cinnamon  </p>
                </div>
                <div className="clint-part2-text1">
                  <h3>Applicant qualification</h3>
                </div>
                <div className="clint-part2-text2">
                  <p>
                    Will you be able to reliably commute to cinnamon for this
                    job ?
                  </p>
                </div>
                <div className="clint-part2-text3">
                  <div className="clint-part2-icon">
                    <i class="fa-solid fa-check"></i> Yes
                  </div>
                  <div className="clint-part2-icon-text">
                    <p>Your requirement: yes (Required)</p>
                  </div>
                </div>
                <div className="clint-part2-text2">
                  <p>
                    Will you be able to reliably commute to cinnamon for this
                    job ?
                  </p>
                </div>
                <div className="clint-part2-text3">
                  <div className="clint-part2-icon">
                    <i class="fa-solid fa-check"></i> Yes
                  </div>
                  <div className="clint-part2-icon-text">
                    <p>Your requirement: yes (Required)</p>
                  </div>
                </div>
                <div className="clint-part2-text2">
                  <p>
                    Will you be able to reliably commute to cinnamon for this
                    job ?
                  </p>
                </div>
                <div className="clint-part2-text3">
                  <div className="clint-part2-icon">
                    <i class="fa-solid fa-check"></i> Yes
                  </div>
                  <div className="clint-part2-icon-text">
                    <p>Your requirement: yes (Required)</p>
                  </div>
                </div>
                <div className="clint-part2-text2">
                  <p>
                    Will you be able to reliably commute to cinnamon for this
                    job ?
                  </p>
                </div>
                <div className="clint-part2-text3">
                  <div className="clint-part2-icon">
                    <i class="fa-solid fa-check"></i> Yes
                  </div>
                  <div className="clint-part2-icon-text">
                    <p>Your requirement: yes (Required)</p>
                  </div>
                </div>
              </div>
              <div className="client-detailview-buttons">
                <div className="client-view-button1">
                  <button>Download CV </button>
                </div>
                <div className="client-view-button2">
                  <button>Preview CV </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientDetailView;
