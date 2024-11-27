import React from 'react'
import { Link } from 'react-router-dom'

export default function Saidbar() {
    return (
        <>
            {/* <!-- Header --> */}
            <div class="header">
                <div class="header-left">
                    <a href="index.html" class="logo">
                        <img src="assets/img/rivetcare_logo.png" alt="Logo" width="30" height="30" />
                    </a>
                    <a href="index.html" class=" logo-small">
                        <img src="assets/img/rivetcare_logo.png" alt="Logo" width="30" height="30" />
                    </a>
                </div>
                <a class="mobile_btn" id="mobile_btn" href="javascript:void(0);">
                    <i class="fas fa-align-left"></i>
                </a>
                <div class="header-split">
                    <div class="page-headers">
                        <div class="search-bar">
                            <span><i class="fe fe-search"></i></span>
                            <input type="text" placeholder="Search" class="form-control" />
                        </div>
                    </div>
                    <ul class="nav user-menu">
                        {/* <!-- Notifications --> */}
                        <li class="nav-item dropdown has-arrow dropdown-heads flag-nav">
                            <div class="dropdown-menu dropdown-menu-right">
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <img src="assets/img/flags/us.png" class="me-2" alt="" height="16" /> English
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <img src="assets/img/flags/fr.png" class="me-2" alt="" height="16" /> French
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <img src="assets/img/flags/es.png" class="me-2" alt="" height="16" /> Spanish
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <img src="assets/img/flags/de.png" class="me-2" alt="" height="16" /> German
                                </a>
                            </div>
                        </li>
                        <li class="nav-item  has-arrow dropdown-heads ">
                            <a href="javascript:void(0);" class="toggle-switch">
                                <i class="fe fe-moon"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown has-arrow dropdown-heads ">
                            <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i class="fe fe-bell"></i>
                            </a>
                            <div class="dropdown-menu notifications">
                                <div class="topnav-dropdown-header">
                                    <span class="notification-title">Notifications</span>
                                    <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                                </div>
                                <div class="noti-content">
                                    <ul class="notification-list">
                                        <li class="notification-message">
                                            <a href="notifications.html">
                                                <div class="media d-flex">
                                                    <span class="avatar avatar-sm flex-shrink-0">
                                                        <img class="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-01.jpg" />
                                                    </span>
                                                    <div class="media-body flex-grow-1">
                                                        <p class="noti-details">
                                                            <span class="noti-title">Matthew Garcia have been subscribed</span>
                                                        </p>
                                                        <p class="noti-time">
                                                            <span class="notification-time">15 Sep 2020 10:20 PM</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <button type="submit" class="btn btn-accept">Accept</button><button type="submit" class="btn btn-decline">Decline</button>
                                        </li>
                                        <li class="notification-message">
                                            <a href="notifications.html">
                                                <div class="media d-flex">
                                                    <span class="avatar avatar-sm flex-shrink-0">
                                                        <img class="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-02.jpg" />
                                                    </span>
                                                    <div class="media-body flex-grow-1">
                                                        <p class="noti-details">
                                                            <span class="noti-title">New User Registered “James Hardin”</span>
                                                        </p>
                                                        <p class="noti-time">
                                                            <span class="notification-time">15 Sep 2020 10:20 PM</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <button type="submit" class="btn btn-accept">Accept</button><span><button type="submit" class="btn btn-decline">Decline</button></span>
                                        </li>
                                        <li class="notification-message">
                                            <a href="notifications.html">
                                                <div class="media d-flex">
                                                    <span class="avatar avatar-sm flex-shrink-0">
                                                        <img class="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-03.jpg" />
                                                    </span>
                                                    <div class="media-body flex-grow-1">
                                                        <p class="noti-details">
                                                            <span class="noti-title">New Service added  “Plumbing”</span>
                                                        </p>
                                                        <p class="noti-time">
                                                            <span class="notification-time">15 Sep 2020 10:20 PM</span>
                                                        </p>

                                                    </div>
                                                </div>
                                            </a>
                                            <button type="submit" class="btn btn-decline-accept">Accept</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="topnav-dropdown-footer">
                                    <a href="notifications.html">View all Notifications</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item  has-arrow dropdown-heads ">
                            <a href="javascript:void(0);" class="win-maximize">
                                <i class="fe fe-maximize" ></i>
                            </a>
                        </li>

                        {/* <!-- User Menu --> */}
                        <li class="nav-item dropdown">
                            <a href="javascript:void(0)" class="user-link  nav-link" data-bs-toggle="dropdown">
                                <span class="user-img">
                                    <img class="rounded-circle" src="assets/img/user.jpg" width="40" alt="Admin" />
                                    <span class="animate-circle"></span>
                                </span>
                                <span class="user-content">
                                    <span class="user-name">John Smith</span>
                                    <span class="user-details">Demo User</span>
                                </span>
                            </a>
                            <div class="dropdown-menu menu-drop-user">
                                <div class="profilemenu ">
                                    <div class="user-detials">
                                        <a href="account.html">
                                            <span class="profile-image">
                                                <img src="assets/img/user.jpg" alt="img" class="profilesidebar" />
                                            </span>
                                            <span class="profile-content">
                                                <span>John Smith</span>
                                                <span><span class="__cf_email__" data-cfemail="d19bbeb9bf91b6bcb0b8bdffb2bebc">[email&#160;protected]</span></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="subscription-menu">
                                        <ul>
                                            <li>
                                                <a href="account-settings.html" >Profile</a>
                                            </li>
                                            <li>
                                                <a href="localization.html">Settings</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="subscription-logout">
                                        <a href="signin.html">Log Out</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- /User Menu --> */}
                    </ul>
                </div>

            </div>

            {/* <!-- Sidebar --> */}
            <div class="sidebar" id="sidebar">
                <div class="sidebar-header">
                    <div class="sidebar-logo">
                        <a href="index.html">
                            <img src="assets/img/rivetcare_logo.png" class="img-fluid logo" alt="" />
                        </a>
                        <a href="index.html">
                            <img src="assets/img/rivetcare_logo.png" class="img-fluid logo-small" alt="" />
                        </a>
                    </div>

                </div>

                <div class="sidebar-inner slimscroll">
                    <div id="sidebar-menu" class="sidebar-menu">
                        <ul>
                            <li class="menu-title m-0">
                                <h6>Home</h6>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i class="fe fe-grid"></i> <span>Dashboard</span>
                                </Link>
                            </li>
                            <li class="menu-title">
                                <h6>Master</h6>
                            </li>
                            <li>
                                <Link to='/admin'>
                                    <i class="fe fe-briefcase"></i><span>Admin</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
