import React from "react";
import Navbar from "./Navbar";
import { FaUserCircle } from "react-icons/fa"; // Import an icon package for icons

function Notification() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="notification-title">Notifications</h2>
        <div className="notification-list">
          <div className="notification-item">
            <div className="icon" style={{ backgroundColor: "#FFA500" }}>
              <FaUserCircle size={30} color="white" />
            </div>
            <div className="notification-text">
              John's driving license is pending for approval.
            </div>
            <div className="notification-time">4d</div>
          </div>

          <div className="notification-item">
            <div className="icon" style={{ backgroundColor: "#000080" }}>
              <FaUserCircle size={30} color="white" />
            </div>
            <div className="notification-text">
              John applied for the healthcare assistant position. Please review
              his application.
            </div>
            <div className="notification-time">4d</div>
          </div>

          <div className="notification-item">
            <div className="icon" style={{ backgroundColor: "#FF0000" }}>
              <FaUserCircle size={30} color="white" />
            </div>
            <div className="notification-text">
              All of Smith's documents have been uploaded.
            </div>
            <div className="notification-time">4d</div>
          </div>

          <div className="notification-item">
            <div className="icon" style={{ backgroundColor: "#008000" }}>
              <FaUserCircle size={30} color="white" />
            </div>
            <div className="notification-text">
              John submitted his timesheet.
            </div>
            <div className="notification-time">4d</div>
          </div>

          <div className="notification-item">
            <div className="icon" style={{ backgroundColor: "#000080" }}>
              <FaUserCircle size={30} color="white" />
            </div>
            <div className="notification-text">
              Smith set his interview availability for the healthcare assistant
              job role.
            </div>
            <div className="notification-time">4d</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
      
          margin: 20px auto;
          padding: 0 20px;
        }

        .notification-title {
          font-size: 24px;
          font-weight: bold;
          color: #1d71b7;
          margin-bottom: 20px;
        }

        .notification-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .notification-item {
          display: flex;
          align-items: center;
          background-color: #f1f7fc;
          border-radius: 8px;
          padding: 15px;
        }

        .icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-right: 15px;
        }

        .notification-text {
          flex: 1;
          font-size: 16px;
          color: #333;
        }

        .notification-time {
          font-size: 14px;
          color: #888;
        }
      `}</style>
    </div>
  );
}

export default Notification;
