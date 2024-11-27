import React from "react";

export default function LocamjobAppliedCandidates() {
  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Applied Candidates</h3>
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
      <div className="candidates-card-main">
        <div className="main-content1">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="candidates-conter">
                  <h3>Candidates</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="candidates-conter">
                  <h3>Vacancy Title</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="candidates-conter">
                  <h3>Interested?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row detial-even">
          <div className="col-md-4">
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
                  <p>Cinnamon </p>
                  <button className="candidates-conter-name-detials">
                    {" "}
                    Awaiting Review
                  </button>

                  <p className="para">Approved : Feb 19</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="candidates-conter-name-detial-executive">
              <h3>Healthcare Executive</h3>
            </div>
          </div>
          <div className="col-md-4">
            <button className="badge bg-secondary">Approved</button>
            <button className="badge bg-danger my-4">Rejected</button>
          </div>
        </div>
        <div className="row detial-even">
          <div className="col-md-4">
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
                  <p>Cinnamon </p>
                  <button className="candidates-conter-name-detials">
                    {" "}
                    Awaiting Review
                  </button>

                  <p className="para">Approved : Feb 19</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="candidates-conter-name-detial-executive">
              <h3>Healthcare Executive</h3>
            </div>
          </div>
          <div className="col-md-4">
            <button className="badge bg-secondary">Approved</button>
            <button className="badge bg-danger my-4">Rejected</button>
          </div>
        </div>
        <div className="row detial-even">
          <div className="col-md-4">
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
                  <p>Cinnamon </p>
                  <button className="candidates-conter-name-detials">
                    {" "}
                    Awaiting Review
                  </button>

                  <p className="para">Approved : Feb 19</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="candidates-conter-name-detial-executive">
              <h3>Healthcare Executive</h3>
            </div>
          </div>
          <div className="col-md-4">
            <button className="badge bg-secondary">Approved</button>
            <button className="badge bg-danger my-4">Rejected</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-Page {
          border-bottom: none !important;
          padding-bottom: 0px !important;
        }

        .candidates-conter-name-detials {
          border: none !important;
          margin-top: 10px !important;
          color: #3e3e3e !important;
          font-size: 14px !important;
          font-weight: 400 !important;
          background-color: #cce5f0 !important;
          padding: 5px 15px !important;
          border-radius: 20px !important;
        }
        .flex {
          border-bottom: none !important;
        }
        .candidates-conter-name-detial-executive h3 {
          color: #1d71b7;
          font-size: 19px;
          font-weight: 400;
        }
        .bg-secondary {
          border: 1px solid;
          color: #256425;
          --bs-bg-opacity: 1;
          background-color: rgb(25 135 80 / 0%) !important;
        }
        .badge {
          padding: 7px;
          font-size: 0.9rem;
          height: 30px;
          width: 120px;
          align-items: center;
          text-align: center;
          display: block;
        }
        button.badge.bg-danger.my-4 {
          border: none;
        }
          .candidates-conter h3 {
    color: #1D71B7;
    font-size: 16px;
    font-weight: 700;
    padding: 17px 37px;
}
   
    .row.detial-even {
    background-color: white;
    width: 100%;
    padding: 24px 0 0 45px;
    margin: 0 0px;
    border-top: 2px solid #B4D3E0;
    border-bottom: 1px solid #B4D3E0;
    display: flex
;
    justify-content: space-between;
}
      `}</style>
    </div>
  );
}
