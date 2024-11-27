import React from "react";
import { Link, NavLink } from "react-router-dom";

function ClientSorry() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/webdeshbord'><img src="assets/img/rivetcare_logo.png" alt="" /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="notification">
                            <i class="fa-regular fa-bell" style={{ color: '#1d71b7' }}></i>
                        </div>
                        <div className="ref-bt">
                            <button className="ref-btt">
                                <img src="Vector (12).png" alt="" style={{ paddingRight: '10px' }} />
                                <span style={{ position: "relative", top: '-2px' }}>
                                    Post a job</span>
                            </button>
                        </div>

                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="profilenav">
                                            <div className="pic">
                                                <img src="assets/img/provider/provider-02.jpg" alt="" />
                                            </div>

                                            <div className="profiletext">
                                                <h6><b>John Smith</b></h6>
                                                <p>Demo user</p>
                                            </div>
                                            <div className="aero"><i class="fa-solid fa-caret-down"></i></div>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/candidateprofile"><i class="fa-solid fa-user"></i>Profile</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa fa-briefcase" aria-hidden="true"></i>My Jobs</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa-solid fa-users"></i>Interview</NavLink></li>

                                        <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa-solid fa-gear"></i>Setting</NavLink></li>
                                        <li><a className="dropdown-item" href="#"><i class="fa-solid fa-right-from-bracket"></i>Sign out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="dashbord-text">
                    <h3>Permanent Jobs</h3>
                </div>
            </div>
            <div className='webpage2'>
                <div className="webpage-1">
                    <div className="main-inputs">
                        <div className="inputs">
                            <div className="input1">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                <input type="text" placeholder="Job title, keywords or company" />
                            </div>
                            <div className="input2">
                                <i className="fa-solid fa-location-dot"></i>
                                <input type="text" placeholder="Location or postcode" />
                            </div>
                            <div className="clint-search-button">
                                <button data-id="model" data-target="#model" >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
                            Date Posted
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
                            Client
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
                            Status
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

            <div className="webpage1-text">
                <h2>Make your mark !  </h2>
                <p>Post your first job now</p>
            </div>
            <div className="webpage1-img">
                <img src="assets/img/OBJECTS.png" alt="" />
            </div>
            <style jsx>{`
       .ref-btt {
           backdrop-filter: blur(5px);
          background: #1D71B7;
          border: none;
          border-radius: 10px;
          width: 167px;
          height: 42px;
          color: #FFFFFF;
          font-size: 14px;
          line-height: 16.41px;
          font-weight: 700;
        }
      button.ref-btt {
    background: #1D71B7;
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 42px;
        color: #FFFFFF;
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

export default ClientSorry;
