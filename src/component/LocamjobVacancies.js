import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function LocamjobVacancies() {
  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Vacancies</h3>
        </div>
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

      <Tabs>
      <div className="container">
      <div className="permanent-job-tab-clint-webpg2">
            <TabList>
              <Tab>
                <p>Open (8)</p>
              </Tab>
              <Tab>
                <p>Filled (6)</p>
              </Tab>
              <Tab>
                <p>Cancelled (10)</p>
              </Tab>
            </TabList>
          </div>    
      </div>

      <div className="container">
        <div className="btn-group">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Booking Period
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
            Business Unit
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

    <TabPanel>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Ref Number</th>
              <th>Client / Business Unit</th>
              <th>Job</th>
              <th>Booking Period</th>
              <th>Shift Type</th>
              <th>Required</th>
              <th><img src="assets/Images/application 1 (2).png" alt="" /></th>

              <th>
                <img src="assets/Images/Vector (4).png"></img>
              </th>
              <th>
                <img src="assets/Images/choice 1.png"></img>
              </th>
              <th>
                <img src="assets/Images/Vector (3).png"></img>
              </th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>
                Lifeways health care West End - London Med...
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>
                8/03/24 09:15am
                <br />
                8/03/24 12:00pm
              </td>
              <td width={"34px"}>
                Day/<br></br>Night
              </td>
              <td width={"30px"}>0 | 1</td>

              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
              <td width={"30px"}>0</td>
              <td width={"10px"}>0</td>
              <td width={"30px"}>
                <img src="Images\Vector (17).png"></img>
              </td>
              <td width={"30px"}>
                <img src="Images\Vector (18).png"></img>
              </td>
            </tr>
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>
                Lifeways health care West End - London Med...
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>
                8/03/24 09:15am
                <br />
                8/03/24 12:00pm
              </td>
              <td width={"34px"}>
                Day/<br></br>Night
              </td>
              <td width={"30px"}>0 | 1</td>

              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
              <td width={"30px"}>0</td>
              <td>0</td>
              <td width={"30px"}>
                <img src="Images\Vector (17).png"></img>
              </td>
              <td width={"30px"}>
                <img src="Images\Vector (18).png"></img>
              </td>
            </tr>
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>
                Lifeways health care West End - London Med...
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>
                8/03/24 09:15am
                <br />
                8/03/24 12:00pm
              </td>
              <td width={"34px"}>
                Day/<br></br>Night
              </td>
              <td width={"30px"}>0 | 1</td>

              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
              <td width={"30px"}>0</td>
              <td>0</td>
              <td width={"30px"}>
                <img src="Images\Vector (17).png"></img>
              </td>
              <td width={"30px"}>
                <img src="Images\Vector (18).png"></img>
              </td>
            </tr>
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>
                Lifeways health care West End - London Med...
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>
                8/03/24 09:15am
                <br />
                8/03/24 12:00pm
              </td>
              <td width={"34px"}>
                Day/<br></br>Night
              </td>
              <td width={"30px"}>0 | 1</td>

              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
              <td width={"30px"}>0</td>
              <td>0</td>
              <td width={"30px"}>
                <img src="Images\Vector (17).png"></img>
              </td>
              <td width={"30px"}>
                <img src="Images\Vector (18).png"></img>
              </td>
            </tr>
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>
                Lifeways health care West End - London Med...
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>
                8/03/24 09:15am
                <br />
                8/03/24 12:00pm
              </td>
              <td width={"34px"}>
                Day/<br></br>Night
              </td>
              <td width={"30px"}>0 | 1</td>

              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
              <td width={"30px"}>0</td>
              <td>0</td>
              <td width={"30px"}>
                <img src="Images\Vector (17).png"></img>
              </td>
              <td width={"30px"}>
                <img src="Images\Vector (18).png"></img>
              </td>
            </tr>
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>
                Lifeways health care West End - London Med...
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>
                8/03/24 09:15am
                <br />
                8/03/24 12:00pm
              </td>
              <td width={"34px"}>
                Day/<br></br>Night
              </td>
              <td width={"30px"}>0 | 1</td>

              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
              <td width={"30px"}>0</td>
              <td>0</td>
              <td width={"10px"}>
                <img src="Images\Vector (17).png"></img>
              </td>
              <td width={"30px"}>
                <img src="Images\Vector (18).png"></img>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </TabPanel>

      <TabPanel>
      <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th>Ref Number</th>
          <th>Booked By</th>
          <th>Candidate</th>
          <th>Client</th>
          <th>Business Unit</th>
          <th>Job</th>
          <th>Booking Period</th>
          <th>Created Date</th>
          <th>Cancel</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <td>100584...</td>
          <td>Sue Barker</td>
          <td>God'stime ...</td>
          <td>Beaumont Care Ho...</td>
          <td>Parkview(NI) (#100...)</td>
          <td>Healthcare Assis...</td>
          <td>8/03/24 09:15am<br />8/03/24 12:00pm</td>
          <td>02/03/24 09:15am</td>
          <td><button className="cancel-btn">✖</button></td>
          <td><button className="edit-btn">✎</button></td>
        </tr>
        <tr>
          <td>100584...</td>
          <td>Sue Barker</td>
          <td>God'stime ...</td>
          <td>Beaumont Care Ho...</td>
          <td>Parkview(NI) (#100...)</td>
          <td>Healthcare Assis...</td>
          <td>8/03/24 09:15am<br />8/03/24 12:00pm</td>
          <td>02/03/24 09:15am</td>
          <td><button className="cancel-btn">✖</button></td>
          <td><button className="edit-btn">✎</button></td>
        </tr>
        <tr>
          <td>100584...</td>
          <td>Sue Barker</td>
          <td>God'stime ...</td>
          <td>Beaumont Care Ho...</td>
          <td>Parkview(NI) (#100...)</td>
          <td>Healthcare Assis...</td>
          <td>8/03/24 09:15am<br />8/03/24 12:00pm</td>
          <td>02/03/24 09:15am</td>
          <td><button className="cancel-btn">✖</button></td>
          <td><button className="edit-btn">✎</button></td>
        </tr>
        <tr>
          <td>100584...</td>
          <td>Sue Barker</td>
          <td>God'stime ...</td>
          <td>Beaumont Care Ho...</td>
          <td>Parkview(NI) (#100...)</td>
          <td>Healthcare Assis...</td>
          <td>8/03/24 09:15am<br />8/03/24 12:00pm</td>
          <td>02/03/24 09:15am</td>
          <td><button className="cancel-btn">✖</button></td>
          <td><button className="edit-btn">✎</button></td>
        </tr>
        <tr>
          <td>100584...</td>
          <td>Sue Barker</td>
          <td>God'stime ...</td>
          <td>Beaumont Care Ho...</td>
          <td>Parkview(NI) (#100...)</td>
          <td>Healthcare Assis...</td>
          <td>8/03/24 09:15am<br />8/03/24 12:00pm</td>
          <td>02/03/24 09:15am</td>
          <td><button className="cancel-btn">✖</button></td>
          <td><button className="edit-btn">✎</button></td>
        </tr>
        <tr>
          <td>100584...</td>
          <td>Sue Barker</td>
          <td>God'stime ...</td>
          <td>Beaumont Care Ho...</td>
          <td>Parkview(NI) (#100...)</td>
          <td>Healthcare Assis...</td>
          <td>8/03/24 09:15am<br />8/03/24 12:00pm</td>
          <td>02/03/24 09:15am</td>
          <td><button className="cancel-btn">✖</button></td>
          <td><button className="edit-btn">✎</button></td>
        </tr>
      
      </tbody>
    </table>
  </div>
      </TabPanel>

      <TabPanel>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Ref Number</th>
              <th>Client / Business Unit</th>
              <th>Job</th>
              <th>Booking 
              Period</th>
              <th>Shift 
              Type</th>
              <th>Required</th>
              <th><img src="assets/Images/application 1 (2).png" alt="" /></th>

              <th>
                <img src="assets/Images/Vector (4).png"></img>
              </th>
              <th>
                <img src="assets/Images/choice 1.png"></img>
              </th>
              <th>
                <img src="assets/Images/Vector (3).png"></img>
              </th>
             <th>Reason of Canceling</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td width={"10px"} >0</td>
             <td>Cancel reason</td>

           
            
           
            </tr>
            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
            <td></td>
             
             
              
             
            </tr>
            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
           <td></td>
             
            
             
            </tr>
            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
             <td>Cancel reason</td>
             
             
             
            </tr>
            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
             <td></td>
             
             
             
            </tr>
            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
           <td></td>
           
             
            </tr>

            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
           <td>Cancel reason</td>
           
             
            </tr>

            <tr>
            <td width={"78px"}>1000584...</td>
              <td width={"165px"}>Lifeways health care   
              West End - London Med... 
              </td>
              <td width={"105px"}>Training Session</td>
              <td width={"115px"}>8/03/24 09:15am<br />8/03/24 12:00pm</td>
              <td width={"34px"}>Day/<br></br>Night</td>
              <td width={"30px"}>0 | 1</td>
             
           
              <td width={"40px"}>5</td>
              <td width={"57px"}>0</td>
             <td width={"30px"}>0</td>
             <td >0</td>
           <td></td>
           
             
            </tr>
           
          </tbody>
        </table>
      </div>
      </TabPanel>
      </Tabs>
    </div>
  );
}
