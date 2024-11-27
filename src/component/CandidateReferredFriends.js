import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CandidateReferredFriends() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/webdeshbord">
            <img src="assets/img/rivetcare_logo.png" alt="" />
          </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="notification">
              <i class="fa-regular fa-bell" style={{ color: "#1d71b7" }}></i>
            </div>
            <div className="ref-bt">
              <button className="ref-btt" onClick={handleShow}>
                <img
                  src="Group (5).png"
                  alt=""
                  style={{ paddingRight: "10px" }}
                />
                <span style={{ position: "relative", top: "-7px" }}>
                  Refer a Friend
                </span>
              </button>
            </div>

            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="profilenav">
                      <div className="pic">
                        <img src="assets/img/provider/provider-02.jpg" alt="" />
                      </div>

                      <div className="profiletext">
                        <h6>
                          <b>John Smith</b>
                        </h6>
                        <p>Demo user</p>
                      </div>
                      <div className="aero">
                        <i class="fa-solid fa-caret-down"></i>
                      </div>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/candidateprofile">
                        <i class="fa-solid fa-user"></i>Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/clientprofile">
                        <i class="fa fa-briefcase" aria-hidden="true"></i>My
                        Jobs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/clientprofile">
                        <i class="fa-solid fa-users"></i>Interview
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="dropdown-item" to="/clientprofile">
                        <i class="fa-solid fa-gear"></i>Setting
                      </NavLink>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i class="fa-solid fa-right-from-bracket"></i>Sign out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

      {/* Refer a Friend Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Refer a Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="User" />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="User" />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="user@gmail.com"
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="80005 50008"
              />
            </div>
            <div className="form-group mt-3">
              <label>Link</label>
              <input
                type="text"
                className="form-control"
                placeholder="https://www.w3.org/Provider/Style/dummy.html"
              />
            </div>
            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              style={{ width: "100%", background: "#1D71B7" }}
            >
              Send
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    <div className="container">
      <div className="dashbord-text">
        <h3>Referred  Friends</h3>
      </div>
      </div>
      <div className="clint-webpage-1 candidate-detailview">
        <div className="clint-inputs view-details">
          <div className="clint-input1">
            <input type="text" placeholder="Search Candidates" />
          </div>
          <div className="clint-search-buttons">
            <button data-id="model" data-target="#model">
              <i className="fa-solid fa-magnifying-glass "></i>{" "}
            </button>
          </div>
        </div>
      </div>
      <Tabs>
        <div className="container">
          <div className="permanent-job-tab ">
            <TabList>
              <Tab>
                <p>Referred</p>{" "}
              </Tab>
              <Tab>
                <p>On Boarded </p>
              </Tab>
            </TabList>
          </div>
        </div>
        <TabPanel>
          <div className="candidates-card-main">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="candidates-conter">
                    <h3>Referred Friend</h3>
                  </div>
                </div>
                <div className="col-md-6"></div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                  </div>
                </div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                  </div>
                </div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                  </div>
                </div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="candidates-card-main">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="candidates-conter">
                    <h3>Referred Friend</h3>
                    <p>On Board : 23 Feb 2022</p>
                  </div>
                </div>
                <div className="col-md-6"></div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                    <p>On Board : 23 Feb 2022</p>
                  </div>
                </div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                    <p>On Board : 23 Feb 2022</p>
                  </div>
                </div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                    <p>On Board : 23 Feb 2022</p>
                  </div>
                </div>

                <div className="detail-events">
                  <div className="detial-even">
                    <div className="candidates-conter-name-detial">
                      <h3>XYZ PVT. LTD.</h3>
                      <p>user@gmail.com</p>
                      <p>95000 00058</p>
                    </div>
                  </div>
                  <div className="candidates-conter-name-detial-yes-no mt-4">
                    <p>Referred : 19 Feb 2022</p>
                    <p>On Board : 23 Feb 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <style jsx>{`
        .ref-btt {
          backdrop-filter: blur(5px);
          background: #1d71b7;
          border: none;
          border-radius: 10px;
          width: 167px;
          height: 42px;
          color: #ffffff;
          font-size: 14px;
          line-height: 16.41px;
          font-weight: 700;
        }
        button.ref-btt {
          background: #1d71b7;
          border: none;
          border-radius: 10px;
          width: 167px;
          height: 42px;
          color: #ffffff;
          font-size: 14px;
          line-height: 16.41px;
          font-weight: 700;
        }
        .detail-events {
          display: flex;
          justify-content: space-between;
          background-color: white;
          padding: 25px 35px;
          border-top: 2px solid #b4d3e0;
          border-bottom: 1px solid #b4d3e0;
        }

        /* Style for alternating colors */
        .detail-events:nth-child(odd) {
          background-color: white;
        }

        .detail-events:nth-child(even) {
          background-color: #edf4f9;
        }

        .detail-events:hover {
          width: 100%;
        }

        .row.detial-even:hover {
          background-color: none !important;
        }
      `}</style>
    </div>
  );
}
