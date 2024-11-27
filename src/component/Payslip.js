import React from "react";
import Navbar from "./Navbar";
// import { FaEye } from 'react-icons/fa'; // Uncomment this if you want to use the eye icon

export default function Payslip() {
  // Define PayslipTable as a separate function within the Payslip component
  const PayslipTable = () => {
    const data = [
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
      { date: "02/03/24 09:15am" },
    ];

    return (
      
      <>
      <Navbar />
      <div className="payslip-table-container">
        
        <div className="dashbord-text-editprofile">
          <h3>Pay Slip</h3>
        </div>

        <div className="main-search-bar1 my-4">
          <div className="search-bar-1">
            <i className="fas fa-briefcase icon"></i>
            <input type="text" placeholder="Select Weekend Date" />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="main-box-editprofile-1">
          <div className="main-box-editprofile">
            <table className="payslip-table">
              <thead>
                <tr>
                  <th className="payslip-th">Weekend Date</th>
                  <th className="payslip-th">View Shifts</th>
                  <th className="payslip-th">View Payslip</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="payslip-td">{row.date}</td>
                    <td className="payslip-td">
                      <button className="view-button">
                        {/* {/ <FaEye /> Uncomment and add the eye icon here if needed /} */}
                        <i
                          className="fa-sharp fa-regular fa-eye"
                          style={{ color: "#1D71B7" }}
                        ></i>
                      </button>
                    </td>
                    <td className="payslip-td">
                      <button className="view-button">
                        {/* {/ <FaEye /> Uncomment and add the eye icon here if needed /} */}
                        <i
                          className="fa-sharp fa-regular fa-eye"
                          style={{ color: "#1D71B7" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    );
  };

  // Call PayslipTable within the Payslip component's return
  return (
    <div>
      <PayslipTable />
    </div>
  );
}
