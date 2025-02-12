// import React, { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { format, parse, startOfWeek, getDay } from "date-fns";
// import enUS from "date-fns/locale/en-US";
// import { Navbar } from "react-bootstrap";

// // Localization setup
// const locales = {
//   "en-US": enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// // Initial events data
// const events = [
//   {
//     title: "Booked",
//     start: new Date(2024, 5, 7),
//     end: new Date(2024, 5, 7),
//     type: "booked",
//   },
//   {
//     title: "Available at Night",
//     start: new Date(2024, 5, 4),
//     end: new Date(2024, 5, 4),
//     type: "night",
//   },
//   {
//     title: "Available at Day / Night",
//     start: new Date(2024, 5, 12),
//     end: new Date(2024, 5, 12),
//     type: "day-night",
//   },
//   {
//     title: "Not Available",
//     start: new Date(2024, 5, 17),
//     end: new Date(2024, 5, 17),
//     type: "not-available",
//   },
// ];

// export default function CustomCalendar() {
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     start: "",
//     end: "",
//     type: "day",
//   });
//   const [allEvents, setAllEvents] = useState(events);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   // Save new event
//   const handleSaveEvent = () => {
//     setAllEvents([
//       ...allEvents,
//       {
//         ...newEvent,
//         start: new Date(newEvent.start),
//         end: new Date(newEvent.start), // Single-day events
//       },
//     ]);
//     setNewEvent({ title: "", start: "", end: "", type: "day" }); // Reset form
//   };

//   return (
//     <div>
//         <div className="container">
//         <div className="dashbord-text">
//           <h3>Select Interview Date</h3>
//           <p style={{ color: '#7E7E7E', marginTop: '3%', fontWeight:'600', }}>
//   Note: Below are the scheduled interviews for the current month. Based on your availability, select a potential date for the interview.
// </p>
//           {/* <hr/> */}
//         </div>
//       </div>
//       <div className="container">
//     <div style={styles.container}>

//       <div style={styles.calendarWrapper}>
//         <Calendar
//           localizer={localizer}
//           events={allEvents}
//           startAccessor="start"
//           endAccessor="end"
//           style={styles.calendar}
//           eventPropGetter={(event) => {
//             let backgroundColor = "";
//             switch (event.type) {
//               case "booked":
//                 backgroundColor = "#007bff";
//                 break;
//               case "night":
//                 backgroundColor = "#28a745";
//                 break;
//               case "day-night":
//                 backgroundColor = "#24A56F";
//                 break;
//               case "not-available":
//                 backgroundColor = "#dc3545";
//                 break;
//               default:
//                 backgroundColor = "#f8f9fa";
//             }
//             return { style: { backgroundColor, color: "white", padding: "5px", borderRadius: "5px" } };
//           }}
//         />
//       </div>

//       <div style={styles.formWrapper}>
//         <h2 style={styles.formHeader}>Add Availability</h2>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Event Title</label>
//           <input
//             type="text"
//             placeholder="Enter event title"
//             name="title"
//             value={newEvent.title}
//             onChange={handleInputChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Date</label>
//           <input
//             type="date"
//             name="start"
//             value={newEvent.start}
//             onChange={handleInputChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Shift</label>
//           <select
//             name="type"
//             value={newEvent.type}
//             onChange={handleInputChange}
//             style={styles.select}
//           >
//             <option value="day">Day Shift</option>
//             <option value="night">Night Shift</option>
//             <option value="day-night">Day/Night Shift</option>
//             <option value="not-available">Not Available</option>
//           </select>
//         </div>
//         <button onClick={handleSaveEvent} style={styles.saveButton}>
//           Save
//         </button>
//       </div>
//     </div>
//     </div>
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "50px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#fff",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Select Date For Interview
//       </h2>
//       <div style={{ marginBottom: "15px" }}>
//         <label
//           style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//         >
//           Meeting Link
//         </label>
//         <input
//           type="url"
//           placeholder="https://google.meet.link"
//           style={{
//             width: "100%",
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//         <p
//           style={{
//             marginTop: "8px",
//             color: "#007bff",
//             textDecoration: "underline",
//             cursor: "pointer",
//           }}
//         >
//           Copy Interview Link
//         </p>
//       </div>
//       <div style={{ marginBottom: "15px" }}>
//         <label
//           style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//         >
//           Date
//         </label>
//         <input
//           type="date"
//           style={{
//             width: "100%",
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </div>
//       <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
//         <div style={{ flex: 1 }}>
//           <label
//             style={{
//               display: "block",
//               marginBottom: "8px",
//               fontWeight: "bold",
//             }}
//           >
//             Start Time
//           </label>
//           <input
//             type="time"
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//         </div>
//         <div style={{ flex: 1 }}>
//           <label
//             style={{
//               display: "block",
//               marginBottom: "8px",
//               fontWeight: "bold",
//             }}
//           >
//             End Time
//           </label>
//           <input
//             type="time"
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//         </div>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <button
//           style={{
//             flex: 1,
//             padding: "10px",
//             border: "none",
//             borderRadius: "4px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Save
//         </button>
//         <button
//           style={{
//             flex: 1,
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             backgroundColor: "#f8f9fa",
//             color: "#000",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }

// // Inline CSS styles
// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     padding: "20px",
//     // backgroundColor: "#f7f7f7",
//     minHeight: "100vh",
//   },
//   header: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   calendarWrapper: {
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     padding: "20px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     marginBottom: "30px",
//   },
//   calendar: {
//     height: "500px",
//   },
//   formWrapper: {
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     padding: "20px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     maxWidth: "400px",
//     margin: "0 auto",
//   },
//   formHeader: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     fontWeight: "bold",
//     marginBottom: "5px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "14px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   select: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "14px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   saveButton: {
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     padding: "10px 15px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     width: "100%",
//   },

// };





// Custom celendar //




import React, { useEffect, useState } from "react";

// Helper function to format a day as dd/mm/yyyy
const formatDate = (day, month, year) => {
  return `${String(day).padStart(2, "0")}/${String(month).padStart(
    2,
    "0"
  )}/${year}`;
};

// Helper function to parse dd/mm/yyyy to Date object
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
    return { day, month, year };
  }
  return null;
};

// Helper function to calculate the number of days in a month
const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(1); // January
  const [currentYear, setCurrentYear] = useState(2024); // Default year
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const handleDateClick = (day) => {
    if (!fromDate || (fromDate && toDate)) {
      setFromDate({ day, month: currentMonth, year: currentYear });
      setToDate(null);
      setFromInput(formatDate(day, currentMonth, currentYear));
      setToInput("");
    } else if (fromDate && !toDate) {
      if (
        currentYear > fromDate.year ||
        (currentYear === fromDate.year && currentMonth > fromDate.month) ||
        (currentYear === fromDate.year &&
          currentMonth === fromDate.month &&
          day >= fromDate.day)
      ) {
        setToDate({ day, month: currentMonth, year: currentYear });
        setToInput(formatDate(day, currentMonth, currentYear));
      } else {
        setFromDate({ day, month: currentMonth, year: currentYear });
        setFromInput(formatDate(day, currentMonth, currentYear));
      }
    }
  };

  const isWithinRange = (day) => {
    if (fromDate && toDate) {
      const from = new Date(fromDate.year, fromDate.month - 1, fromDate.day);
      const to = new Date(toDate.year, toDate.month - 1, toDate.day);
      const current = new Date(currentYear, currentMonth - 1, day);
      return current >= from && current <= to;
    }
    return false;
  };

  const handleInputChange = (type, value) => {
    if (value.match(/^\d{0,2}\/\d{0,2}\/\d{0,4}$/)) {
      if (type === "from") {
        setFromInput(value);
        const parsed = parseDate(value);
        if (parsed !== null) {
          setFromDate(parsed);
          if (
            toDate &&
            new Date(parsed.year, parsed.month - 1, parsed.day) >
              new Date(toDate.year, toDate.month - 1, toDate.day)
          ) {
            setToDate(null);
          }
        } else {
          setFromDate(null);
        }
      } else if (type === "to") {
        setToInput(value);
        const parsed = parseDate(value);
        if (
          parsed !== null &&
          fromDate &&
          new Date(parsed.year, parsed.month - 1, parsed.day) >=
            new Date(fromDate.year, fromDate.month - 1, fromDate.day)
        ) {
          setToDate(parsed);
        } else {
          setToDate(null);
        }
      }
    } else {
      if (type === "from") {
        setFromInput(value);
      } else if (type === "to") {
        setToInput(value);
      }
    }
  };
  console.log(fromDate);

  const handleReset = () => {
    setFromDate(null);
    setToDate(null);
    setFromInput("");
    setToInput("");
  };

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 1) {
        setCurrentMonth(12);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 12) {
        setCurrentMonth(1);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Calendar Header */}
      <div style={styles.header}>
        <button
          style={styles.navButton}
          onClick={() => handleMonthChange("prev")}
        >
          &lt;
        </button>
        <span style={styles.monthTitle}>
          {new Date(currentYear, currentMonth - 1).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </span>
        <button
          style={styles.navButton}
          onClick={() => handleMonthChange("next")}
        >
          &gt;
        </button>
      </div>

      {/* Calendar Grid */}
      <div style={styles.calendar}>
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} style={styles.dayHeader}>
            {day}
          </div>
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const isSelected =
            (fromDate &&
              fromDate.day === day &&
              fromDate.month === currentMonth &&
              fromDate.year === currentYear) ||
            (toDate &&
              toDate.day === day &&
              toDate.month === currentMonth &&
              toDate.year === currentYear) ||
            isWithinRange(day);

          return (
            <div
              key={day}
              style={{
                ...styles.day,
                backgroundColor: isSelected ? "#007bff" : "#fff",
                color: isSelected ? "#fff" : "#000",
              }}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Input Fields for From and To Dates */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          name="from"
          value={fromInput}
          onChange={(e) => handleInputChange("from", e.target.value)} // Pass correct args
          placeholder="From Date (dd/mm/yyyy)"
          style={styles.input}
        />
        <input
          type="text"
          name="to"
          value={toInput}
          onChange={(e) => handleInputChange("to", e.target.value)} // Pass correct args
          placeholder="To Date (dd/mm/yyyy)"
          style={styles.input}
        />
      </div>

      {/* Action Buttons */}
      <div style={styles.footer}>
        <button onClick={handleReset} style={styles.resetButton}>
          Reset
        </button>
        <button style={styles.confirmButton}>Confirm</button>
      </div>
      












         <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Select Date For Interview
      </h2>
      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Meeting Link
        </label>
        <input
          type="url"
          placeholder="https://google.meet.link"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <p
          style={{
            marginTop: "8px",
            color: "#007bff",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Copy Interview Link
        </p>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Date
        </label>
        <input
          type="date"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Start Time
          </label>
          <input
            type="time"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            End Time
          </label>
          <input
            type="time"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Save
        </button>
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f8f9fa",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: "15px",
  },
  monthTitle: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  navButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  calendar: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "5px",
    width: "100%",
  },
  dayHeader: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#555",
  },
  day: {
    textAlign: "center",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid #ccc",
    userSelect: "none",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "15px",
    gap: "15px",
  },
  input: {
    width: "50%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "20px",
  },
  confirmButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    width: "45%",
  },
  resetButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    width: "45%",
  },
};

export default Calendar;
