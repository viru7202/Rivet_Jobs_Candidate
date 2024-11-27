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

