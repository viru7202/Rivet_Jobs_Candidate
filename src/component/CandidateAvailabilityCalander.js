import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

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
    type: "day",
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
        end: new Date(newEvent.start), // Single-day events
      },
    ]);
    setNewEvent({ title: "", start: "", end: "", type: "day" }); // Reset form
    setIsPopupOpen(false); // Close popup after saving
  };

  const handleDateClick = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setNewEvent({
      ...newEvent,
      start: slotInfo.start.toISOString().substring(0, 10),
    });
    setIsPopupOpen(true); // Open popup
  };

  return (
    <div>
      <div className="container">
        <div className="dashbord-text">
          <h3>Availability calendar </h3>
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
            onSelectSlot={handleDateClick} // Trigger popup on date click
            eventPropGetter={(event) => {
              let backgroundColor = "";
              switch (event.type) {
                case "day":
                  backgroundColor = "#f9b449";
                  break;
                case "night":
                  backgroundColor = "#7e7d7c  ";
                  break;
                case "day-night":
                  backgroundColor = "green";
                  break;
                case "not-available":
                  backgroundColor = "red";
                  break;
                case "interview":
                  backgroundColor = "#1E72B7";
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

          {isPopupOpen && (
            <div style={styles.popup}>
              <h2 style={styles.formHeader}>Add Availability</h2>
              <div style={styles.formGroup}>
                <label style={styles.label}>Availability</label>
                <input
                  type="text"
                  placeholder="Search Vacancy "
                  name="title"
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
                  style={styles.select}
                >
                  <option value="day">Day Shift</option>
                  <option value="night">Night Shift</option>
                  <option value="day-night">Full Day</option>
                  <option value="not-available">Not Available</option>
                  <option value="interview">Interview</option>
                </select>
              </div>
              <div className="row">
              <div className="col-md-6">
              <button onClick={handleSaveEvent} style={styles.saveButton}>
                Save
              </button>
              </div>
              <div className="col-md-6">
              <button
                onClick={() => setIsPopupOpen(false)}
                style={styles.closeButton}
              >
                Cancel
              </button>
            </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
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
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "400px",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "20px",
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
  select: {
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
    marginTop: "10px",
  },
  closeButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
