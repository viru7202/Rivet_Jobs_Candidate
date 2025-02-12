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
