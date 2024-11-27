import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CandidateItem({ text, isActive, onClick }) {
    return (
        <div
            className={`candidates-active-item ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <h3>{text}</h3>
        </div>
    );
}

function ClientActiveList() {
    const [activeTab, setActiveTab] = useState("132 Active");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const renderContent = () => {
        switch (activeTab) {
            case "132 Active":
                return <div>
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
                                    <h3>ShortList</h3>
                                </div>
                            </div>



                            <Link to='/clientdetailview'>
                                <div className="row detial-even">

                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial">
                                            <div className="clt-act-list">
                                                <img src="boy 1 (2).png"></img>
                                                <div className="ferog">
                                                    <h3>  John Smith </h3>
                                                    <h4>Healthcare Assistant </h4>
                                                    <p>Cinnamon </p>
                                                </div>
                                            </div>
                                            <div className="ferogg">
                                                <button> Awaiting Review</button>
                                                <p>Applied: Feb 19</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial-executive">
                                            <h3>Healthcare Executive</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial-yes-no">
                                            <button style={{ border: '1px solid #24A56F', color: '#24A56F' }}> Shortlist</button>
                                            <button style={{ border: '1px solid #CE4747', color: '#CE4747' }}>Reject</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/clientdetailview'>
                                <div className="row detial-even">

                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial">
                                            <div className="clt-act-list">
                                                <img src="boy 1 (2).png"></img>
                                                <div className="ferog">
                                                    <h3>  John Smith </h3>
                                                    <h4>Healthcare Assistant </h4>
                                                    <p>Cinnamon </p>
                                                </div>
                                            </div>
                                            <div className="ferogg">
                                                <button> Awaiting Review</button>
                                                <p>Applied: Feb 19</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial-executive">
                                            <h3>Healthcare Executive</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial-yes-no">
                                            <button style={{ border: '1px solid #24A56F', color: '#24A56F' }}> Shortlist</button>
                                            <button style={{ border: '1px solid #CE4747', color: '#CE4747' }}>Reject</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/clientdetailview'>
                                <div className="row detial-even">

                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial">
                                            <div className="clt-act-list">
                                                <img src="boy 1 (2).png"></img>
                                                <div className="ferog">
                                                    <h3>  John Smith </h3>
                                                    <h4>Healthcare Assistant </h4>
                                                    <p>Cinnamon </p>
                                                </div>
                                            </div>
                                            <div className="ferogg">
                                                <button> Awaiting Review</button>
                                                <p>Applied: Feb 19</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial-executive">
                                            <h3>Healthcare Executive</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="candidates-conter-name-detial-yes-no">
                                            <button style={{ border: '1px solid #24A56F', color: '#24A56F' }}> Shortlist</button>
                                            <button style={{ border: '1px solid #CE4747', color: '#CE4747' }}>Reject</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>


                        </div>
                    </div>
                </div>;
            case "2 Shortlist":
                return <div>   <div className="container">
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
                                <h3>Invite?</h3>
                            </div>
                        </div>



                        <Link to='/clientdetailview'>
                            <div className="row detial-even">

                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <div className="clt-act-list">
                                            <img src="boy 1 (2).png"></img>
                                            <div className="ferog">
                                                <h3>  John Smith </h3>
                                                <h4>Healthcare Assistant </h4>
                                                <p>Cinnamon </p>
                                            </div>
                                        </div>
                                        <div className="ferogg">
                                            <button> Awaiting Review</button>
                                            <p>Applied: Feb 19</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button style={{ background: ' #1D71B7', color: '#fff' }}> Invite For interview</button>
                                        <button style={{ border: '1px solid #CE4747', color: '#CE4747' }}>Reject</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/clientdetailview'>
                            <div className="row detial-even">

                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <div className="clt-act-list">
                                            <img src="boy 1 (2).png"></img>
                                            <div className="ferog">
                                                <h3>  John Smith </h3>
                                                <h4>Healthcare Assistant </h4>
                                                <p>Cinnamon </p>
                                            </div>
                                        </div>
                                        <div className="ferogg">
                                            <button> Awaiting Review</button>
                                            <p>Applied: Feb 19</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button style={{ background: ' #1D71B7', color: '#fff' }}> Invite For interview</button>
                                        <button style={{ border: '1px solid #CE4747', color: '#CE4747' }}>Reject</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/clientdetailview'>
                            <div className="row detial-even">

                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial">
                                        <div className="clt-act-list">
                                            <img src="boy 1 (2).png"></img>
                                            <div className="ferog">
                                                <h3>  John Smith </h3>
                                                <h4>Healthcare Assistant </h4>
                                                <p>Cinnamon </p>
                                            </div>
                                        </div>
                                        <div className="ferogg">
                                            <button> Awaiting Review</button>
                                            <p>Applied: Feb 19</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-executive">
                                        <h3>Healthcare Executive</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="candidates-conter-name-detial-yes-no">
                                        <button style={{ background: ' #1D71B7', color: '#fff' }}> Invite For interview</button>
                                        <button style={{ border: '1px solid #CE4747', color: '#CE4747' }}>Reject</button>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </div>
                </div></div>;
            case "2 Reviewed":
                return <div> <div className="container">
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
                            <h3>Status?</h3>
                        </div>
                    </div>
                    <Link to='/clientdetailview'>
                        <div className="row detial-even">

                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial">
                                    <div className="clt-act-list">
                                        <img src="boy 1 (2).png"></img>
                                        <div className="ferog">
                                            <h3>  John Smith </h3>
                                            <h4>Healthcare Assistant </h4>
                                            <p>Cinnamon </p>
                                        </div>
                                    </div>
                                    <div className="ferogg">
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-executive">
                                    <h3>Healthcare Executive</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-yes-no">
                                    <button style={{ border: '1px solid #CE4747', color: '#CE4747', width:'150px' }}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/clientdetailview'>
                        <div className="row detial-even">

                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial">
                                    <div className="clt-act-list">
                                        <img src="boy 1 (2).png"></img>
                                        <div className="ferog">
                                            <h3>  John Smith </h3>
                                            <h4>Healthcare Assistant </h4>
                                            <p>Cinnamon </p>
                                        </div>
                                    </div>
                                    <div className="ferogg">
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-executive">
                                    <h3>Healthcare Executive</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-yes-no">
                                <button style={{ border: '1px solid #24A56F', color: '#24A56F', width:'150px'  }}> Hired</button>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div></div>;
            case "12 Rejected":
                return <div><div className="container">
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
                            <h3>Status?</h3>
                        </div>
                    </div>
                    <Link to='/clientdetailview'>
                        <div className="row detial-even">

                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial">
                                    <div className="clt-act-list">
                                        <img src="boy 1 (2).png"></img>
                                        <div className="ferog">
                                            <h3>  John Smith </h3>
                                            <h4>Healthcare Assistant </h4>
                                            <p>Cinnamon </p>
                                        </div>
                                    </div>
                                    <div className="ferogg">
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-executive">
                                    <h3>Healthcare Executive</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-yes-no">
                                    <button style={{ border: '1px solid #CE4747', color: '#CE4747', width:'150px' }}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/clientdetailview'>
                        <div className="row detial-even">

                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial">
                                    <div className="clt-act-list">
                                        <img src="boy 1 (2).png"></img>
                                        <div className="ferog">
                                            <h3>  John Smith </h3>
                                            <h4>Healthcare Assistant </h4>
                                            <p>Cinnamon </p>
                                        </div>
                                    </div>
                                    <div className="ferogg">
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-executive">
                                    <h3>Healthcare Executive</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-yes-no">
                                    <button style={{ border: '1px solid #CE4747', color: '#CE4747', width:'150px' }}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div></div>;
            case "0 Hired":
                return <div><div className="container">
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
                            <h3>Status?</h3>
                        </div>
                    </div>
                    <Link to='/clientdetailview'>
                        <div className="row detial-even">

                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial">
                                    <div className="clt-act-list">
                                        <img src="boy 1 (2).png"></img>
                                        <div className="ferog">
                                            <h3>  John Smith </h3>
                                            <h4>Healthcare Assistant </h4>
                                            <p>Cinnamon </p>
                                        </div>
                                    </div>
                                    <div className="ferogg">
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-executive">
                                    <h3>Healthcare Executive</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-yes-no">
                                <button style={{ border: '1px solid #24A56F', color: '#24A56F', width:'150px'  }}> Hired</button>

                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/clientdetailview'>
                        <div className="row detial-even">

                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial">
                                    <div className="clt-act-list">
                                        <img src="boy 1 (2).png"></img>
                                        <div className="ferog">
                                            <h3>  John Smith </h3>
                                            <h4>Healthcare Assistant </h4>
                                            <p>Cinnamon </p>
                                        </div>
                                    </div>
                                    <div className="ferogg">
                                        <button> Awaiting Review</button>
                                        <p>Applied: Feb 19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-executive">
                                    <h3>Healthcare Executive</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="candidates-conter-name-detial-yes-no">
                                <button style={{ border: '1px solid #24A56F', color: '#24A56F', width:'150px'  }}> Hired</button>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div></div>;
            default:
                return <div>Invalid tab</div>;
        }
    };
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
                    <CandidateItem
                        text="132 Active"
                        isActive={activeTab === "132 Active"}
                        onClick={() => handleTabClick("132 Active")}
                    />
                    <CandidateItem
                        text="2 Shortlist"
                        isActive={activeTab === "2 Shortlist"}
                        onClick={() => handleTabClick("2 Shortlist")}
                    />
            
                    <CandidateItem
                        text="2 Reviewed"
                        isActive={activeTab === "2 Reviewed"}
                        onClick={() => handleTabClick("2 Reviewed")}
                    />
                    <CandidateItem
                        text="12 Rejected"
                        isActive={activeTab === "12 Rejected"}
                        onClick={() => handleTabClick("12 Rejected")}
                    />
                    <CandidateItem
                        text="0 Hired"
                        isActive={activeTab === "0 Hired"}
                        onClick={() => handleTabClick("0 Hired")}
                    />
                </div>
            </div>
            <div className="candidates-card-main">
                {renderContent()}

            </div>

            <style jsx>{`
                  .candidates-active-item {
                    cursor: pointer;
                    padding: 10px;
                    margin: 5px;
                 
                    border-radius: 5px;
                    text-align: center;
                
                }
                .candidates-active-item.active {
                    
                    color: #fff;
                }
               .candidates-conter-name-detial p {
    margin-top: 5px;
    color: #3E3E3E;
    font-size: 14px;
    font-weight: 400;
}
    .candidates-conter-name-detial h3 {
    margin-bottom: 10px;
    color: #3E3E3E;
    font-size: 16px;
    font-weight: 700;
}

.clt-act-list {
    display: flex;
}
    .clt-act-list img{
        height: 56px;
    width: 59px;
    }
    .ferog {
    margin-left: 10px;
}
        .ferogg {
         margin-top: 5px;
    margin-left: 6%;
}
    .candidates-conter-name-detial-yes-no {
    padding-top: 11%;
}
    .candidates-conter-name-detial-executive {
    padding-top: 13%;
}
               `}</style>
        </div>

    );
}

export default ClientActiveList;
