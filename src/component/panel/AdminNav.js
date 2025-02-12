import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AdminNav() {
    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <NavLink to={'/'} className="logo">
                        {/* <img src="/assets/img/nobel2.png" alt="Logo" width="60" height="60" /> */}
                        <img src="/assets/img/rivetcare_logo.png" alt="Logo" width="60" height="60" />
                    </NavLink>
                </div>
                <a className='mobile_btn'>
                    <i className="fas fa-align-left"></i>
                </a>
                <div className="header-split">
                    <div className="page-headers">
                        <div className="search-bar">
                            <span><i className="fe fe-search"></i></span>
                            <input type="text" placeholder="Search" className="form-control" />
                        </div>
                    </div>
                    <ul className="nav user-menu">
                        <li className="nav-item dropdown logout-box">
                            <a href="#" className="user-NavLink  nav-NavLink">
                                <span className="user-img">
                                    <i className="fa-solid fa-arrow-right-from-bracket" style={{ color: '#26448c', fontSize: '20px' }}></i>
                                    <span className="animate-circle"></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- Sidebar --> */}
            <div className='sidebar' id="sidebar">
                <div className="sidebar-header">
                    <Link to={'/'}>
                        <div className="sidebar-logo">
                            <Link to={'/'}>
                                <img src="/assets/img/rivetcare_logo.png" className="img-fluid logo" alt="" />
                            </Link>
                            <Link to={'/'}>
                                <img src="/assets/img/rivetcare_logo.png" className="img-fluid logo-small" alt="" />
                            </Link>
                        </div>
                    </Link>

                </div>

                <div className="sidebar-inner slimscroll" >
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            {/* <li className="menu-title m-0">
                                <h6>Home</h6>
                            </li> */}
                            <li>
                                <NavLink to={'/'}>
                                    <i className="fa-solid fa-house"></i>
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/admin'}>
                                    <i className="fe fe-briefcase"></i>
                                    <span>User</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/subscription'}>
                                    <i className="fe fe-briefcase"></i>
                                    <span>Subscription</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/delivery-boy'}>
                                    <i className="fe fe-briefcase"></i>
                                    <span>Delivery boy</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- /Sidebar --> */}
        </div>
    )
}
