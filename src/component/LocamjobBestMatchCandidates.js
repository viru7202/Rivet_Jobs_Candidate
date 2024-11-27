import React from "react";

export default function LocamjobBestMatchCandidates() {
  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Best Match Candidates</h3>
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
                  <h3>Invite??</h3>
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
            <button className="invite-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9879 6.62908C6.73945 6.62908 3.49204 6.6271 0.243585 6.63305C0.0533603 6.63305 -0.00935112 6.59837 0.00110079 6.40811C0.029321 5.91465 -0.0333905 5.41821 0.106665 4.9297C0.448443 3.74261 1.57934 2.88549 2.87851 2.84585C3.15967 2.83693 3.44292 2.82207 3.72094 2.84783C3.97283 2.87063 4.0115 2.77847 4.00523 2.56741C3.98955 2.04224 3.99791 1.51607 4.00105 0.990901C4.00418 0.417173 4.42226 0.00198899 4.99398 7.20121e-06C5.56674 -0.00197459 5.99318 0.405283 6.00154 0.980001C6.00991 1.5349 6.00886 2.09079 6.0005 2.64569C5.99841 2.79532 6.03395 2.84684 6.20327 2.84684C8.73263 2.84189 11.263 2.84189 13.7924 2.84684C13.9607 2.84684 13.9993 2.79829 13.9973 2.64767C13.9889 2.08485 13.9858 1.52202 13.9973 0.960183C14.0067 0.445909 14.3882 0.0475701 14.8857 0.00694345C15.4208 -0.0366559 15.8577 0.259621 15.9737 0.749123C15.9936 0.834339 15.9967 0.925502 15.9978 1.01369C15.9998 1.55373 16.0082 2.09476 15.9936 2.63479C15.9883 2.8191 16.0552 2.84783 16.2287 2.84783C16.7503 2.84783 17.2729 2.80622 17.7882 2.939C19.0382 3.26203 19.9465 4.33715 19.9883 5.56586C19.9987 5.86907 19.9852 6.17327 19.9967 6.47649C20.0019 6.6053 19.9559 6.6489 19.8263 6.63206C19.7803 6.62611 19.7322 6.63107 19.6862 6.63107C16.4535 6.62908 13.2217 6.62908 9.98895 6.62908H9.9879Z" fill="white"/>
<path d="M19.7437 9.57644C16.4952 9.58338 13.2457 9.5814 9.99727 9.5814C6.74882 9.5814 3.49932 9.58338 0.250865 9.57644C0.0407814 9.57644 -0.00102629 9.62797 1.88978e-05 9.81822C0.00733524 12.24 0.00210928 14.6607 0.00629005 17.0825C0.00838043 18.7709 1.29815 19.9977 3.07497 19.9987C7.69054 20.0016 12.3061 19.9987 16.9217 19.9987C17.1882 19.9987 17.4516 19.9818 17.7108 19.9194C19.0831 19.5884 19.9872 18.4806 19.9903 17.1033C19.9956 14.6746 19.9903 12.2459 19.9966 9.81723C19.9945 9.62599 19.9527 9.57446 19.7437 9.57545V9.57644Z" fill="white"/>
</svg>

              Invite To Apply
            </button>
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
            <button className="invite-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9879 6.62908C6.73945 6.62908 3.49204 6.6271 0.243585 6.63305C0.0533603 6.63305 -0.00935112 6.59837 0.00110079 6.40811C0.029321 5.91465 -0.0333905 5.41821 0.106665 4.9297C0.448443 3.74261 1.57934 2.88549 2.87851 2.84585C3.15967 2.83693 3.44292 2.82207 3.72094 2.84783C3.97283 2.87063 4.0115 2.77847 4.00523 2.56741C3.98955 2.04224 3.99791 1.51607 4.00105 0.990901C4.00418 0.417173 4.42226 0.00198899 4.99398 7.20121e-06C5.56674 -0.00197459 5.99318 0.405283 6.00154 0.980001C6.00991 1.5349 6.00886 2.09079 6.0005 2.64569C5.99841 2.79532 6.03395 2.84684 6.20327 2.84684C8.73263 2.84189 11.263 2.84189 13.7924 2.84684C13.9607 2.84684 13.9993 2.79829 13.9973 2.64767C13.9889 2.08485 13.9858 1.52202 13.9973 0.960183C14.0067 0.445909 14.3882 0.0475701 14.8857 0.00694345C15.4208 -0.0366559 15.8577 0.259621 15.9737 0.749123C15.9936 0.834339 15.9967 0.925502 15.9978 1.01369C15.9998 1.55373 16.0082 2.09476 15.9936 2.63479C15.9883 2.8191 16.0552 2.84783 16.2287 2.84783C16.7503 2.84783 17.2729 2.80622 17.7882 2.939C19.0382 3.26203 19.9465 4.33715 19.9883 5.56586C19.9987 5.86907 19.9852 6.17327 19.9967 6.47649C20.0019 6.6053 19.9559 6.6489 19.8263 6.63206C19.7803 6.62611 19.7322 6.63107 19.6862 6.63107C16.4535 6.62908 13.2217 6.62908 9.98895 6.62908H9.9879Z" fill="white"/>
<path d="M19.7437 9.57644C16.4952 9.58338 13.2457 9.5814 9.99727 9.5814C6.74882 9.5814 3.49932 9.58338 0.250865 9.57644C0.0407814 9.57644 -0.00102629 9.62797 1.88978e-05 9.81822C0.00733524 12.24 0.00210928 14.6607 0.00629005 17.0825C0.00838043 18.7709 1.29815 19.9977 3.07497 19.9987C7.69054 20.0016 12.3061 19.9987 16.9217 19.9987C17.1882 19.9987 17.4516 19.9818 17.7108 19.9194C19.0831 19.5884 19.9872 18.4806 19.9903 17.1033C19.9956 14.6746 19.9903 12.2459 19.9966 9.81723C19.9945 9.62599 19.9527 9.57446 19.7437 9.57545V9.57644Z" fill="white"/>
</svg>

              Invite To Apply
            </button>
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
            <button className="invite-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9879 6.62908C6.73945 6.62908 3.49204 6.6271 0.243585 6.63305C0.0533603 6.63305 -0.00935112 6.59837 0.00110079 6.40811C0.029321 5.91465 -0.0333905 5.41821 0.106665 4.9297C0.448443 3.74261 1.57934 2.88549 2.87851 2.84585C3.15967 2.83693 3.44292 2.82207 3.72094 2.84783C3.97283 2.87063 4.0115 2.77847 4.00523 2.56741C3.98955 2.04224 3.99791 1.51607 4.00105 0.990901C4.00418 0.417173 4.42226 0.00198899 4.99398 7.20121e-06C5.56674 -0.00197459 5.99318 0.405283 6.00154 0.980001C6.00991 1.5349 6.00886 2.09079 6.0005 2.64569C5.99841 2.79532 6.03395 2.84684 6.20327 2.84684C8.73263 2.84189 11.263 2.84189 13.7924 2.84684C13.9607 2.84684 13.9993 2.79829 13.9973 2.64767C13.9889 2.08485 13.9858 1.52202 13.9973 0.960183C14.0067 0.445909 14.3882 0.0475701 14.8857 0.00694345C15.4208 -0.0366559 15.8577 0.259621 15.9737 0.749123C15.9936 0.834339 15.9967 0.925502 15.9978 1.01369C15.9998 1.55373 16.0082 2.09476 15.9936 2.63479C15.9883 2.8191 16.0552 2.84783 16.2287 2.84783C16.7503 2.84783 17.2729 2.80622 17.7882 2.939C19.0382 3.26203 19.9465 4.33715 19.9883 5.56586C19.9987 5.86907 19.9852 6.17327 19.9967 6.47649C20.0019 6.6053 19.9559 6.6489 19.8263 6.63206C19.7803 6.62611 19.7322 6.63107 19.6862 6.63107C16.4535 6.62908 13.2217 6.62908 9.98895 6.62908H9.9879Z" fill="white"/>
<path d="M19.7437 9.57644C16.4952 9.58338 13.2457 9.5814 9.99727 9.5814C6.74882 9.5814 3.49932 9.58338 0.250865 9.57644C0.0407814 9.57644 -0.00102629 9.62797 1.88978e-05 9.81822C0.00733524 12.24 0.00210928 14.6607 0.00629005 17.0825C0.00838043 18.7709 1.29815 19.9977 3.07497 19.9987C7.69054 20.0016 12.3061 19.9987 16.9217 19.9987C17.1882 19.9987 17.4516 19.9818 17.7108 19.9194C19.0831 19.5884 19.9872 18.4806 19.9903 17.1033C19.9956 14.6746 19.9903 12.2459 19.9966 9.81723C19.9945 9.62599 19.9527 9.57446 19.7437 9.57545V9.57644Z" fill="white"/>
</svg>

              Invite To Apply
            </button>
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
      `}</style>
    </div>
  );
}
