import React from 'react'
import Navbar from './Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from "react-router-dom";



function CandidateMyjobs1() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/clintwebpage2");
    };
    return (
        <div>
            <Navbar />
            {/* <!-- Example single danger button --> */}
            <div className='webpage2'>
                <div className="webpage-1">
                    <div class="main-inputs">
                        <div className="inputs">
                            <div class="input1">
                                <i class="fa fa-briefcase" aria-hidden="true"></i>
                                <input type="text" placeholder="Job title, keywords or company" />
                            </div>
                            <div className="input2">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type="text" placeholder="Location or postcode" />
                            </div>
                            <div className="search-button">
                                {/* Pass the handleClick function to onClick */}
                                <button data-id="model" data-target="#model" onClick={handleClick}>
                                    Find Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>

                <Tabs>
                    <div className='permanent-job-tab '>
                        <TabList>
                            <Tab><p>Applied Jobs</p> </Tab>
                            <Tab><p>Rejected jobs</p></Tab>
                            <Tab><p>Saved jobs</p></Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <div className='permanent_job_dropdown'>


                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Applied Date
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Today</a></li>
                                    <li><a className="dropdown-item" href="#">Tomorrow</a></li>
                                    <li><a className="dropdown-item" href="#">This Week</a></li>
                                    <li><a className="dropdown-item" href="#">Next Week</a></li>
                                    <li><a className="dropdown-item" href="#">This Month</a></li>
                                    <li><a className="dropdown-item" href="#">Next Month</a></li>
                                    <li><a className="dropdown-item" href="#">Custom</a></li>

                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Miles
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pay
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
{/* 
                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Education
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <div className='more-filter'>
                                    <p>More Filters</p>
                                </div>
                            </div> */}
                        </div>

                        <div className='permanent-job-card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                            <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>

                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>
                                              <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                  
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>
 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                   
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='permanent-job-card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                   
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                   
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='permanent-job-card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                                <button>Applied</button>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    
                                                 </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </TabPanel>

                    <TabPanel>
                        <div className='permanent_job_dropdown'>


                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Applied Date
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Miles
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pay
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className='permanent-job-card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                             
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                  <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Re - Applied</button>
                                                    </div>
                                               
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Re - Applied</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                             
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Re - Applied</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='permanent-job-card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                            
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Re - Applied</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Re - Applied</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Re - Applied</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </TabPanel>

                    <TabPanel>
                        <div className='permanent_job_dropdown'>


                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Applied Date
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Company
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Miles
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pay
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                         

                          
                        </div>


                        <div className='permanent-job-card'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                            <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                               <i className="fa-solid fa-bookmark" style={{ fontSize: '25px' }}></i>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                 <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Apply</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                          <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                               <i className="fa-solid fa-bookmark" style={{ fontSize: '25px' }}></i>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                 <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Apply</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/webpage3'>
                                           <div className='card-permanent'>

                                                 <div className='myjob-main'>
                                              <div className='myjob-img'>
                                                <img src="assets/img/brand-3 1.png" alt="" />
                                              </div>
                                              <div className='myjob-button'>
                                               <i className="fa-solid fa-bookmark" style={{ fontSize: '25px' }}></i>
                                              </div>
                                              </div>
                                                <h3>Healthcare Assistant</h3>
                                                <h4>Naintwich</h4>
                                                <div className='time-day'>
                                                    <div className='time'>
                                                        <button><p>Full time</p></button>
                                                    </div>
                                                    <div className='time'>
                                                        <button><p>Mon - Fri</p></button>
                                                    </div>
                                                </div>
                                                <div className='usd-year'>
                                                    <button><p>$28,805 a year</p></button>
                                                </div>
                                                <p className='usd-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                <div className='today-readmore'>
                                                    <div className='today'>
                                                        <p>Today</p>
                                                    </div>
                                                    <div className='day'>
                                                        <p>Read more</p>
                                                    </div>
                                                </div>
                                                 <div className='myjob-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <button>Apply</button>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </TabPanel>
                </Tabs>

            </div>

        </div>
    )
}
export default CandidateMyjobs1;
