import React from 'react';
import Navbar from "./Navbar";



function Marketplace() {



    return (
        <div>
            <Navbar />
            <div className="dashbord-text">
                <h3>Market place</h3>
            </div>

            <div className="webpage2">
                <div className="webpage-1">
                    <div className="main-inputs">
                        <div className="inputs">
                            <div className="input1">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                <input
                                    type="text"
                                    placeholder="Job title, keywords or company"
                                />
                            </div>
                            <div className="input2">
                                <i className="fa-solid fa-location-dot"></i>
                                <input type="text" placeholder="Location or postcode" />
                            </div>
                            <div className="clint-search-button">
                                <button data-id="model" data-target="#model">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vacancies">

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Company Name</th>
                            <th>Category</th>
                            <th>Full Address</th>
                            <th>Logo</th>
                            <th>Materials</th>
                            <th>Services</th>
                            <th>Contact Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>1</td>
                            <td class="your-class-name">Smith Lorem Ipsum
                            </td>
                            <td>Accountants</td>
                            <td>Denning House 1a, George Street, <br></br> Wolverhampton, England, WV2 4DP.</td>
                            <td><img src="rivet jobs icon 2.png" alt="" /></td>
                            <td>
                                <a href="/path-to-pdf/Abcxyz.pdf" target="_blank" rel="noopener noreferrer" style={{paddingRight:'5px'}}>
                                    Abcxyz.pdf
                                </a>{" "}
                                <img src="Vector (8).png" alt="PDF Icon" />
                            </td>
                            <td>Management, Marketing, Law, Finance, <br></br> Training, Technical, Construction</td>
                            <td>
                                Tel: <a href="tel:+912236547890">+91 2236547890</a> <br />
                                Mail:{" "}
                                <a href="mailto:info@rivetJobs.com">info@rivetJobs.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td class="your-class-name">Smith Lorem Ipsum
                            </td>
                            <td>Stationeries</td>
                            <td>Denning House 1a, George Street, <br></br> Wolverhampton, England, WV2 4DP.</td>
                            <td><img src="rivet jobs icon 2.png" alt="" /></td>
                            <td>
                            <a href="/path-to-pdf/Abcxyz.pdf" target="_blank" rel="noopener noreferrer" style={{paddingRight:'5px'}}>
                                    Abcxyz.pdf
                                </a>{" "}
                                <img src="Vector (8).png" alt="PDF Icon" />
                            </td>
                            <td>Management, Marketing, Law, Finance, <br></br> Training, Technical, Construction</td>
                            <td>
                                Tel: <a href="tel:+912236547890">+91 2236547890</a> <br />
                                Mail:{" "}
                                <a href="mailto:info@rivetJobs.com">info@rivetJobs.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td class="your-class-name">Smith Lorem Ipsum
                            </td>
                            <td>Accountants</td>
                            <td>Denning House 1a, George Street, <br></br> Wolverhampton, England, WV2 4DP.</td>
                            <td><img src="rivet jobs icon 2.png" alt="" /></td>
                            <td>
                            <a href="/path-to-pdf/Abcxyz.pdf" target="_blank" rel="noopener noreferrer" style={{paddingRight:'5px'}}>
                                    Abcxyz.pdf
                                </a>{" "}
                                <img src="Vector (8).png" alt="PDF Icon" />
                            </td>
                            <td>Management, Marketing, Law, Finance, <br></br> Training, Technical, Construction</td>
                            <td>
                                Tel: <a href="tel:+912236547890">+91 2236547890</a> <br />
                                Mail:{" "}
                                <a href="mailto:info@rivetJobs.com">info@rivetJobs.com</a>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td class="your-class-name">Smith Lorem Ipsum
                            </td>
                            <td>Equipment supplies</td>
                            <td>Denning House 1a, George Street, <br></br> Wolverhampton, England, WV2 4DP.</td>
                            <td><img src="rivet jobs icon 2.png" alt="" /></td>
                            <td>
                            <a href="/path-to-pdf/Abcxyz.pdf" target="_blank" rel="noopener noreferrer" style={{paddingRight:'5px'}}>
                                    Abcxyz.pdf
                                </a>{" "}
                                <img src="Vector (8).png" alt="PDF Icon" />
                            </td>
                            <td>Management, Marketing, Law, Finance, <br></br> Training, Technical, Construction</td>
                            <td>
                                Tel: <a href="tel:+912236547890">+91 2236547890</a> <br />
                                Mail:{" "}
                                <a href="mailto:info@rivetJobs.com">info@rivetJobs.com</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <style jsx>{`
         .table-responsive {
    overflow: scroll;
}
    .vacancies {
    padding: 3% 3% 3% 3%;
}
       
      `}</style>
        </div>
    );
}

export default Marketplace;

