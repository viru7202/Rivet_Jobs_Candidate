import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
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
    type: "booked",
  },
  {
    title: "Available at Night",
    start: new Date(2024, 5, 4),
    end: new Date(2024, 5, 4),
    type: "night",
  },
  {
    title: "Available at Day / Night",
    start: new Date(2024, 5, 12),
    end: new Date(2024, 5, 12),
    type: "day-night",
  },
  {
    title: "Not Available",
    start: new Date(2024, 5, 17),
    end: new Date(2024, 5, 17),
    type: "not-available",
  },
];

export default function CustomCalendar() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    type: "day",
  });
  const [allEvents, setAllEvents] = useState(events);
  const [showPopup, setShowPopup] = useState(false);

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
        end: new Date(newEvent.start), // Single-day events
      },
    ]);
    setNewEvent({ title: "", start: "", end: "", type: "day" });
    setShowPopup(false); // Close popup after saving
  };

  const handleDateClick = (date) => {
    setNewEvent({ ...newEvent, start: date.toISOString().split("T")[0] });
    setShowPopup(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="dashbord-text">
          <h3>Select Interview Date</h3>
          <p style={{ color: '#7E7E7E', marginTop: '3%', fontWeight:'600', }}>
  Note: Below are the scheduled interviews for the current month. Based on your availability, select a potential date for the interview.
</p>
          {/* <hr/> */}
        </div>
      {/* </div> */}
      <div style={styles.calendarWrapper}>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={styles.calendar}
          selectable
          onSelectSlot={(slotInfo) => handleDateClick(slotInfo.start)}
          eventPropGetter={(event) => {
            let backgroundColor = "";
            switch (event.type) {
              case "booked":
                backgroundColor = "#007bff";
                break;
              case "day":
                backgroundColor = "#f9b449";
                break;
              case "night":
                backgroundColor = "#7e7d7c";
                break;
              case "day-night":
                backgroundColor = "green";
                break;
              case "not-available":
                backgroundColor = "red";
                break;
              default:
                backgroundColor = "#f8f9fa";
            }
            return {
              style: {
                backgroundColor,
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              },
            };
          }}
        />
      </div>
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <h2 style={styles.formHeader}>Add Availability</h2>
            <div style={styles.formGroup}>
              <label style={styles.label}>Event Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter event title"
                value={newEvent.title}
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
            <div style={styles.formGroup}>
              <label style={styles.label}>Shift</label>
              <select
                name="type"
                value={newEvent.type}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="booked">Booked</option>
                <option value="day">Day Shift</option>
                <option value="night">Night Shift</option>
                <option value="day-night">Full Day</option>
                <option value="not-available">Not Available</option>
              </select>
            </div>
            <div style={styles.buttonGroup}>
              <button onClick={handleSaveEvent} style={styles.saveButton}>
                Save
              </button>
              <button
                onClick={() => setShowPopup(false)}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "2em",
  },
  calendarWrapper: {
    margin: "20px auto",
    padding: "0px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  calendar: {
    height: "500px",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px 30px",
    width: "400px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.5em",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "8px",
    display: "block",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "20px",
  },
  saveButton: {
    backgroundColor: "#1e72b7",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#f8f9fa",
    color: "#000",
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
};
