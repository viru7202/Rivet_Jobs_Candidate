import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarweb">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><img src="assets/img/rivetcare_logo.png" alt="" /></Link>

          <div className="nav-bar-top-section">
            <div className="notification">
              <i class="fa-regular fa-bell" style={{ color: '#1d71b7' }}></i>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul> */}

              {/* <div className="postjob d-flex">
              <i class="fa-solid fa-pencil"></i>
              <p>Post Job</p>
            </div> */}

              <form className="d-flex" role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link to={'/'} className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </Link>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/candidateprofile"><i class="fa-solid fa-user"></i>Profile</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa fa-briefcase" aria-hidden="true"></i>My Jobs</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa-solid fa-users"></i>Interview</NavLink></li>

                      <li><NavLink className="dropdown-item" to="/clientprofile"><i class="fa-solid fa-gear"></i>Setting</NavLink></li>
                      <li><Link to={'/'} className="dropdown-item" ><i class="fa-solid fa-right-from-bracket"></i>Sign out</Link></li>
                    </ul>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;