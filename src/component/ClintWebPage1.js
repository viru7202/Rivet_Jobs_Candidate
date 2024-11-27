import React from 'react'
import Navbar from './Navbar';

 function ClintWebPage1() {
    
  return (
    <div>
        <Navbar/>
        <div className="dashbord-text">
        <h3>Permanent Job</h3>
        {/* <hr/> */}
      </div>
      <div className="clint-webpage-1">
        <div class="clint-main-inputs">
          <div className="clint-inputs">
            <div class="clint-input1">
              <i class="fa fa-briefcase" aria-hidden="true"></i>
              <input type="text" placeholder="Job title" />
            </div>
            <div className="clint-input2">
              <i class="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Location or postcode" />
            </div>
            <div className="clint-input3">
            <i class="fa-solid fa-calendar"></i>
              <input type="text" placeholder="Location or postcode" />
            </div>
            <div className="clint-search-button">
              <button data-id="model" data-target="#model">
              <i class="fa-solid fa-magnifying-glass"></i>              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="webpage1-text">
        <h2>Sorry! </h2>
        <p>We Haven't Found Any Data</p>
      </div>
      <div className="webpage1-img">
      <img src="assets/img/OBJECTS.png" alt="" />
      </div>
    </div>
  )
}
export default ClintWebPage1;