import React from "react";

export default function ClientCandidateDetail() {
  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Candidate Detail</h3>
          {/* <hr style={{ border: "2px solid #B4D3E0" }} /> */}
        </div>
        <div className="col-md-12">
          <div className="clint-detail-buttons">
            <div className="xxy">
              <button className="invite-buttonn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.9879 6.62908C6.73945 6.62908 3.49204 6.6271 0.243585 6.63305C0.0533603 6.63305 -0.00935112 6.59837 0.00110079 6.40811C0.029321 5.91465 -0.0333905 5.41821 0.106665 4.9297C0.448443 3.74261 1.57934 2.88549 2.87851 2.84585C3.15967 2.83693 3.44292 2.82207 3.72094 2.84783C3.97283 2.87063 4.0115 2.77847 4.00523 2.56741C3.98955 2.04224 3.99791 1.51607 4.00105 0.990901C4.00418 0.417173 4.42226 0.00198899 4.99398 7.20121e-06C5.56674 -0.00197459 5.99318 0.405283 6.00154 0.980001C6.00991 1.5349 6.00886 2.09079 6.0005 2.64569C5.99841 2.79532 6.03395 2.84684 6.20327 2.84684C8.73263 2.84189 11.263 2.84189 13.7924 2.84684C13.9607 2.84684 13.9993 2.79829 13.9973 2.64767C13.9889 2.08485 13.9858 1.52202 13.9973 0.960183C14.0067 0.445909 14.3882 0.0475701 14.8857 0.00694345C15.4208 -0.0366559 15.8577 0.259621 15.9737 0.749123C15.9936 0.834339 15.9967 0.925502 15.9978 1.01369C15.9998 1.55373 16.0082 2.09476 15.9936 2.63479C15.9883 2.8191 16.0552 2.84783 16.2287 2.84783C16.7503 2.84783 17.2729 2.80622 17.7882 2.939C19.0382 3.26203 19.9465 4.33715 19.9883 5.56586C19.9987 5.86907 19.9852 6.17327 19.9967 6.47649C20.0019 6.6053 19.9559 6.6489 19.8263 6.63206C19.7803 6.62611 19.7322 6.63107 19.6862 6.63107C16.4535 6.62908 13.2217 6.62908 9.98895 6.62908H9.9879Z"
                    fill="#1d71b7"
                  />
                  <path
                    d="M19.7437 9.57644C16.4952 9.58338 13.2457 9.5814 9.99727 9.5814C6.74882 9.5814 3.49932 9.58338 0.250865 9.57644C0.0407814 9.57644 -0.00102629 9.62797 1.88978e-05 9.81822C0.00733524 12.24 0.00210928 14.6607 0.00629005 17.0825C0.00838043 18.7709 1.29815 19.9977 3.07497 19.9987C7.69054 20.0016 12.3061 19.9987 16.9217 19.9987C17.1882 19.9987 17.4516 19.9818 17.7108 19.9194C19.0831 19.5884 19.9872 18.4806 19.9903 17.1033C19.9956 14.6746 19.9903 12.2459 19.9966 9.81723C19.9945 9.62599 19.9527 9.57446 19.7437 9.57545V9.57644Z"
                    fill="#1d71b7"
                  />
                </svg>
                Invite For interview
              </button>
              <div className="">
                <button className="invite-buttonn">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.20027 11.7845H1.71654C0.671304 11.7845 0 11.1093 0 10.0571V1.72209C0 0.6739 0.67353 0 1.721 0H14.2857C15.3251 0 16 0.6739 16 1.71225C16 4.51309 16 7.31363 16 10.1139C16 10.9058 15.5361 11.5368 14.8052 11.7273C14.6379 11.7669 14.4664 11.7854 14.2946 11.7823C12.2335 11.7859 10.1727 11.7859 8.11218 11.7823C7.99153 11.7776 7.87342 11.8179 7.78054 11.8954C6.59908 12.8494 5.41569 13.8012 4.23037 14.7507C4.17428 14.7954 4.11908 14.8432 4.06032 14.8848C3.88226 15.0109 3.69351 15.0404 3.49585 14.9385C3.4045 14.8954 3.32784 14.8261 3.2755 14.7394C3.22315 14.6527 3.19745 14.5524 3.2016 14.4511C3.19982 13.704 3.19982 12.9564 3.2016 12.2085L3.20027 11.7845ZM8.00801 4.28533H6.02482C5.26404 4.28533 4.50281 4.28533 3.74203 4.28533C3.60991 4.28255 3.4815 4.32935 3.3819 4.41659C3.28229 4.50383 3.21864 4.62524 3.20338 4.7571C3.18861 4.88878 3.22287 5.0213 3.29955 5.12913C3.37623 5.23695 3.48992 5.31246 3.61872 5.34112C3.6953 5.3542 3.77305 5.35899 3.85065 5.35543H12.1494C12.1997 5.35543 12.25 5.35856 12.2994 5.35543C12.5246 5.33307 12.6849 5.21725 12.765 5.00484C12.9021 4.64217 12.635 4.28667 12.2241 4.28622C10.8186 4.28473 9.41324 4.28443 8.00801 4.28533ZM5.87124 7.49921C6.57103 7.49921 7.27097 7.49921 7.97107 7.49921C8.19008 7.49921 8.35969 7.40977 8.46742 7.22017C8.66863 6.86242 8.41133 6.43045 7.99065 6.42911C6.57459 6.42508 5.15809 6.42911 3.74158 6.42911C3.6966 6.42879 3.65174 6.43404 3.60804 6.44476C3.48265 6.47541 3.37254 6.55063 3.29807 6.65651C3.22361 6.76238 3.18981 6.89176 3.20294 7.02072C3.21746 7.15258 3.28009 7.27436 3.37875 7.36256C3.4774 7.45075 3.60507 7.49912 3.73713 7.49831C4.44717 7.50189 5.15809 7.49921 5.86901 7.49921H5.87124Z"
                      fill="#1d71b7"
                    />
                  </svg>
                  Message
                </button>
              </div>
              <div className="">
                <button className="invite-buttonn">
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.49233 0.00873483C3.44968 1.03071 4.41481 2.04394 5.35659 3.07465C5.8158 3.58127 5.8158 4.03548 5.40329 4.60324C5.09195 5.03124 4.76506 5.45051 4.42259 5.85231C4.19688 6.11436 4.15796 6.34146 4.32141 6.67339C5.48112 9.04051 7.09226 10.8748 9.24824 12.089C9.4039 12.1763 9.70745 12.1152 9.86312 11.9929C10.2756 11.6522 10.6414 11.2417 11.0306 10.8661C11.4587 10.4556 11.9023 10.4556 12.3071 10.8923C13.1243 11.8007 13.9182 12.7266 14.7199 13.6525C15.0624 14.0543 15.0779 14.526 14.8366 14.9976C14.2529 16.1332 13.3656 16.7184 12.2059 16.9193C10.587 17.1988 9.1237 16.7359 7.80054 15.7838C5.00634 13.7922 2.7414 11.1805 0.97459 8.02728C0.17291 6.59477 -0.115072 5.01377 0.0405941 3.31049C0.180693 1.73822 0.99794 0.742458 2.14987 0C2.25105 0.0087348 2.37558 0.00873483 2.49233 0.00873483Z"
                      fill="#1d71b7"
                    />
                  </svg>
                  Call
                </button>
              </div>
            </div>
            <div className="review-button">
              <button className="invite-button">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7778 0.69873H2.22222C1.63285 0.69873 1.06762 0.932857 0.650874 1.3496C0.234126 1.76635 0 2.33158 0 2.92095V18.4765C0 19.0659 0.234126 19.6311 0.650874 20.0479C1.06762 20.4646 1.63285 20.6987 2.22222 20.6987H17.7778C18.3671 20.6987 18.9324 20.4646 19.3491 20.0479C19.7659 19.6311 20 19.0659 20 18.4765V2.92095C20 2.33158 19.7659 1.76635 19.3491 1.3496C18.9324 0.932857 18.3671 0.69873 17.7778 0.69873ZM14 16.2543L10 12.2543L6 16.2543L4.44444 14.6987L8.44445 10.6987L4.44444 6.69873L6 5.14318L10 9.14318L14 5.14318L15.5556 6.69873L11.5556 10.6987L15.5556 14.6987L14 16.2543Z"
                    fill="white"
                  />
                </svg>
                Rejected
              </button>
            </div>
          </div>
          <div className="clint-detail-part-2">
            <div className="clint-detail-mainpart-2">
              <div className="p-img-main d-flex">
                <div className="p-image">
                  <img src="/boy-2.png"></img>
                </div>
                <div className="clint-part2-text">
                  <h3>Smith</h3>
                  <p>Healthcare Assistant </p>
                  <p>smith@gmail,com</p>
                  <p>Applied to Healthcare Assistant - Cinnamon  </p>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  lineHeight: "1.6",
                  fontWeight: 600,
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <strong>Current Position :</strong> Sr. Ui/Ux Designer <br />
                  May 2022 - Present
                </div>
                <div>
                  <strong>Previous Position :</strong> Sr. Ui/Ux Designer <br />
                  May 2022 - Present
                </div>
              </div>
            </div>
            <div className="clint-part2-text1">
              <h3>Applicant qualification</h3>
            </div>
            <div className="clint-part2-text2">
              <p>
                Will you be able to reliably commute to cinnamon for this job ?
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
                Will you be able to reliably commute to cinnamon for this job ?
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
                Will you be able to reliably commute to cinnamon for this job ?
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
                Will you be able to reliably commute to cinnamon for this job ?
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
      <style jsx>{`
        .upcoming-box2-text1 {
          padding: 5px 6px 2px 7px;
        }
        // .invite-buttonn {
        //   background: #1d71b7;
        //   color: white; /* White text */
        //   border: none; /* Remove default border */
        //   border-radius: 4px; /* Rounded corners */
        //   padding: 10px 20px; /* Add padding */
        //   font-size: 16px; /* Font size */
        //   cursor: pointer; /* Pointer cursor on hover */
        //   font-family: Arial, sans-serif; /* Font styling */
        //   display: flex; /* Flexbox for icon and text */
        //   align-items: center; /* Center items vertically */
        //   gap: 10px; /* Space between icon and text */
        // }
        .invite-buttonn {
          background: #ffffff;
          color: #1d71b7;
          // border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          font-family: Arial, sans-serif;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #1d71b7;
        }

        .invite-buttonn:hover {
          background-color: #1d71b7;
          color: #ffffff;
        }
        .invite-buttonn:hover svg path {
          fill: #ffffff;
        }

        .clint-detail-buttons {
          display: flex;
          padding: 2%;
          gap: 20px;
          justify-content: space-between;
        }
        .xxy {
          display: flex;
          gap: 20px;
        }
        .clint-detail-buttonss {
          display: flex;
          gap: 20px;
          padding: 2%;
        }
        .invite-button {
          background: #ce4747;
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
        .clint-detail-mainpart-2 {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
