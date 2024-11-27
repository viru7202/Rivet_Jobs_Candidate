import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CandidateItem({ text }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`candidates-active ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <h3>{text}</h3>
        </div>
    );
}

function Webpage4() {
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

          <div className="clint-search-button mt-2">
            <button data-id="model" data-target="#model">
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>

            <div className="candidates-short-main">
                <div className="candidates-active">
                    <CandidateItem text="132 Active" />
                    <CandidateItem text="2 Shortlist" />
                    <CandidateItem text="137 Awaiting" />
                    <CandidateItem text="2 Reviewed" />
                    <CandidateItem text="12 Rejected" />
                    <CandidateItem text="0 Hired" />
                </div>
            </div>
            <div className="candidates-card-main">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="candidates-conter">
                                <h3>Candidates</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="candidates-conter">
                                <h3>Job applied to</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="candidates-conter">
                                <h3>Interested?</h3>
                            </div>
                        </div>



                        <Link to='/clientdetailview'>
                            <div className="row detial-even">
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <h3>John Smith </h3>
                                        <h4>Healthcare Assistant </h4>
                                        <p>Cinnamon </p>
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button> <i class="fa-solid fa-check"></i></button>
                                        <button><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/clientdetailview'>
                            <div className="row detial-even">
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <h3>John Smith </h3>
                                        <h4>Healthcare Assistant </h4>
                                        <p>Cinnamon </p>
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button> <i class="fa-solid fa-check"></i></button>
                                        <button><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to='/clientdetailview'>
                            <div className="row detial-even">
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <h3>John Smith </h3>
                                        <h4>Healthcare Assistant </h4>
                                        <p>Cinnamon </p>
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button> <i class="fa-solid fa-check"></i></button>
                                        <button><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/clientdetailview'>
                            <div className="row detial-even">
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <h3>John Smith </h3>
                                        <h4>Healthcare Assistant </h4>
                                        <p>Cinnamon </p>
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button> <i class="fa-solid fa-check"></i></button>
                                        <button><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Webpage4;
