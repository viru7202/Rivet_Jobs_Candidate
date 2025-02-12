
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";


const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Booked",
    start: new Date(2024, 5, 7),
    end: new Date(2024, 5, 7),
    type: "interview",
  },
];

export default function CustomCalendar() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    link: "",
  });
  const [allEvents, setAllEvents] = useState(events);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSaveEvent = () => {
    setAllEvents([
      ...allEvents,
      {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.start),
      },
    ]);
    setNewEvent({ title: "", start: "", end: "", link: "" });
    setIsPopupOpen(false);
  };

  const handleReset = () => {
    setNewEvent({ title: "", start: "", end: "", link: "" });
  };

  const handleDateClick = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setNewEvent({
      ...newEvent,
      start: slotInfo.start.toISOString().substring(0, 10),
    });
    setIsPopupOpen(true);
  };

  return (
    
    <div>
    <Navbar />
          {" "}
      <div className='webpage2'>
        <div className="webpage-1">
          <div className="main-inputs">
            <div className="inputs">
              <div className="input1">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <input type="text" placeholder="Job title, keywords or company" />
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

    <div className="container">
      <div style={styles.container}>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={styles.calendar}
          selectable={true}
          onSelectSlot={handleDateClick}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor:
                event.type === "interview" ? "#1E72B7" : "#f8f9fa",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            },
          })}
        />

        {isPopupOpen && (
          <div className="popup-overlay">
          <div style={styles.popup}>
            <h2 style={styles.formHeader}>Select Date For Interview</h2>

            <div style={styles.formGroup}>
              <label style={styles.label}>Interview Link</label>
              <input
                type="text"
                placeholder="https://google.meet.link"
                name="link"
                value={newEvent.link}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Date</label>
              <input
                type="date"
                name="start"
                value={newEvent.start}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <label style={styles.label}>Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div className="col-md-6">
                <label style={styles.label}>End Time</label>
                <input
                  type="time"
                  name="endTime"
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-md-6">
                <button onClick={handleSaveEvent} style={styles.saveButton}>
                  Save
                </button>
              </div>
              <div className="col-md-6">
                <button onClick={handleReset} style={styles.resetButton}>
                  Reset
                </button>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
      </div>
      
   
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  calendar: {
    height: "500px",
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "400px",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  saveButton: {
    backgroundColor: "#1E72B7",
    color: "#fff",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  resetButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },

  
  
  
};
