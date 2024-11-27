import React from "react";
import Navbar from "./Navbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Link, useNavigate } from "react-router-dom";

function ClientInvoice() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/clintwebpage2");
  };
  return (
    <div>
      <div>
        <Navbar />
        <div className="dashbord-text">
          <h3>Client Invoice</h3>
          {/* <hr/> */}
        </div>
        <div className='webpage2'>
          <div className="webpage-1">
            <div class="main-inputs">
              <div className="inputs">
                <div class="input1">
                  <input type="text" placeholder="Client Name" />
                </div>
                <div className="input2">
                  <input type="text" placeholder="Invoice Number" />
                </div>
                <div className="clint-search-button">
                  {/* Pass the handleClick function to onClick */}
                  <button data-id="model" data-target="#model" onClick={handleClick} >
                    <i class="fa-solid fa-magnifying-glass"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs>
          <div className='permanent-job-tab-clint-webpg2'>
            <TabList>
              <Tab><p>Open   (6)</p> </Tab>
         
            </TabList>
          </div>
     
        </Tabs>
        <div className="vacancies">
          <div className='permanent_job_dropdown'>


            <div className="btn-group">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Weekend Date
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
              </ul>
            </div>

            <div className="btn-group">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              VAT              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
              </ul>
            </div>

            <div className="btn-group">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Invoice date
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
              </ul>
            </div>

          </div>
          <table>
            <thead>
              <tr>
                <th>Weekend Date</th>
                <th>Client Name</th>
                <th>Invoice Number</th>
                <th>Invoice Date </th>
                <th>Sub Total</th>
                <th>VAT</th>
                <th>Invoice Total</th>
                <th>View Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st Sept 2024 ( Sunday)</td>
                <td>Smith Lorem Ipsum</td>
                <td>123456780</td>
                <td>1st Sept 2024</td>
                <td>£ 1000.00</td>
                <td>£ 1000.00</td>
                <td>£ 1000.00</td>
                <td><img src="assets/img/Group (4).png" alt="" /></td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
       .clint-search-button button {
    height: 42px;
    width: 66px;
    margin-left: 20px;
    border: none;
    background-color: #1D71B7;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    margin-top: 2px; 
    margin-right: 12px;
}
      `}</style>
    </div>
  );
}
export default ClientInvoice;
