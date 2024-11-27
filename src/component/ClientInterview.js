import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function ClientInterview() {
  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Interviews</h3>
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
      <div className="container">
        <div className="permanent_job_dropdown">
          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Interview Date
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pay
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Company
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Applied Date
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabs>
        <div className="permanent-job-tab-clint-webpg2">
          <TabList>
            <Tab>
              <p>Upcoming 2</p>{" "}
            </Tab>
            <Tab>
              <p>Past 8</p>
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="upcoming-part1">
                  <div className="upcoming-text">
                    <div className="upcoming-main-text">
                      <div className="upcoming-text1">
                        <h3>Upcoming 2</h3>
                      </div>
                      <div className="upcoming-text2">
                        <h3>Past 8</h3>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-text-box1">
                    <div className="upcoming-box1-text">
                      <div className="p-image">
                        <img src="/boy-2.png"></img>
                      </div>
                      <div className="upcoming-box1-text1">
                        <h3>John </h3>
                        <p>Healthcare Assistant </p>
                        <p>Cinnamon</p>
                      </div>
                      <div className="upcoming-box2-text">
                        <div className="upcoming-box2-text1">
                          <p>Timing :- 11:00 to 12:00</p>
                        </div>
                        <div className="upcoming-box2-text2">
                          <p>Applied: Feb 19</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-text-box1">
                    <div className="upcoming-box1-text">
                      <div className="p-image">
                        <img src="/boy-2.png"></img>
                      </div>
                      <div className="upcoming-box1-text1">
                        <h3>John </h3>
                        <p>Healthcare Assistant </p>
                        <p>Cinnamon</p>
                      </div>
                      <div className="upcoming-box2-text">
                        <div className="upcoming-box2-text1">
                          <p>Timing :- 11:00 to 12:00</p>
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
                <div className="clint-detail-buttons">
                  <div className="xxy">
                    <button className="invite-buttonn">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83926 12.1068C6.78496 12.0656 6.73874 12.0325 6.69545 11.9957C5.44814 10.9465 4.20303 9.89428 2.95205 8.85019C2.81999 8.73982 2.83246 8.67801 2.93444 8.55734C4.4679 6.74656 5.99696 4.93209 7.52308 3.11542C7.6258 2.99328 7.68596 2.97341 7.8173 3.08599C9.05213 4.13449 10.2906 5.17858 11.5357 6.21531C11.6832 6.33819 11.6641 6.40147 11.5534 6.53171C10.039 8.31968 8.53046 10.1135 7.01975 11.9052C6.96399 11.9714 6.90456 12.0347 6.83926 12.1068Z"
                          fill="#1d71b7"
                        />
                        <path
                          d="M0.000557553 14.9872C0.0614556 14.7311 0.148767 14.361 0.236813 13.9917C0.429045 13.1852 0.627881 12.381 0.811309 11.5724C0.931638 11.0419 1.19944 10.6004 1.55236 10.1979C1.64187 10.0964 1.6925 10.0765 1.80475 10.1714C3.05573 11.231 4.31111 12.2854 5.56649 13.3398C5.65747 13.4163 5.7125 13.4626 5.60758 13.5885C5.27888 13.9836 4.91789 14.3338 4.44098 14.5413C3.38957 15.0004 2.33963 15.4625 1.28382 15.9091C0.611739 16.1939 -0.0214538 15.7877 0.000557553 14.9872Z"
                          fill="#1d71b7"
                        />
                        <path
                          d="M13.9952 2.60479C13.9952 3.37369 13.6761 3.98219 13.2145 4.53772C12.8264 5.00494 12.833 5.01083 12.3766 4.62748C11.2409 3.67316 10.108 2.71589 8.96709 1.76746C8.82475 1.64899 8.80934 1.58424 8.93407 1.43709C9.38384 0.90658 9.83067 0.394468 10.5204 0.14577C12.0039 -0.388415 13.7061 0.604169 13.9483 2.16699C13.9732 2.32077 14.0136 2.47308 13.9952 2.60479Z"
                          fill="#1d71b7"
                        />
                      </svg>
                      Edit
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
                    <button className="invite-buttonn">Review Interview</button>
                  </div>
                </div>
                <div className="clint-detail-part-2">
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
        </TabPanel>

        <TabPanel>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="upcoming-part1">
                  <div className="upcoming-text">
                    <div className="upcoming-main-text">
                      <div className="upcoming-text1">
                        <h3>Upcoming 2</h3>
                      </div>
                      <div className="upcoming-text2">
                        <h3>Past 8</h3>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-text-box1">
                    <div className="upcoming-box1-text">
                      <div className="p-image">
                        <img src="/boy-2.png"></img>
                      </div>
                      <div className="upcoming-box1-text1">
                        <h3>John </h3>
                        <p>Healthcare Assistant </p>
                        <p>Cinnamon</p>
                      </div>
                      <div className="upcoming-box2-text">
                        <div className="upcoming-box2-text1">
                          <p>Timing :- 11:00 to 12:00</p>
                        </div>
                        <div className="upcoming-box2-text2">
                          <p>Applied: Feb 19</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-text-box1">
                    <div className="upcoming-box1-text">
                      <div className="p-image">
                        <img src="/boy-2.png"></img>
                      </div>
                      <div className="upcoming-box1-text1">
                        <h3>John </h3>
                        <p>Healthcare Assistant </p>
                        <p>Cinnamon</p>
                      </div>
                      <div className="upcoming-box2-text">
                        <div className="upcoming-box2-text1">
                          <p>Timing :- 11:00 to 12:00</p>
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
                <div className="clint-detail-buttonss">
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
                  </button>

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
                    </button>
                  </div>
                </div>
                <div className="clint-detail-part-2">
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
        </TabPanel>
      </Tabs>

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
      `}</style>
    </div>
  );
}
