import React, { useState } from "react";
import "./App.css";

const Advisee = () => {
const [students, setStudents] = useState([
      {
        id: "20231001",
        lastName: "Labalan",
        firstName: "Jerald",
        middleName: "Sikip",
        type: "S6",
        yearStanding: "3rd year",
        details: "Detailed information about Jerald Labalan",
        subjects: [
          { name: "Mathematics", units: 3 },
          { name: "Science", units: 4 },
        ],
      },
      {
        id: "20231002",
        lastName: "Dasalla",
        firstName: "Keith",
        middleName: "Sikip",
        type: "S6",
        yearStanding: "3rd year",
        details: "Detailed information about Keith Dasalla",
        subjects: [
          { name: "History", units: 3 },
          { name: "Literature", units: 2 },
        ],
      },
    ]);

    const [showModal, setShowModal] = useState(false); // Modal for details
    const [selectedStudent, setSelectedStudent] = useState(null); // Selected student
    const [subjectName, setSubjectName] = useState(""); // Input for subject name
    const [subjectUnits, setSubjectUnits] = useState(0); // Input for subject units

    const handleViewSubjects = (student) => {
      setSelectedStudent(student);
      setSubjectName(""); // Reset the subject name input
      setSubjectUnits(0); // Reset the subject units input
      setShowModal(true);
    };
  
    const handleAddSubject = () => {
      if (subjectName.trim() === "" || subjectUnits <= 0) return; // Prevent invalid inputs
    
      const updatedSubjects = [
        ...(selectedStudent.subjects || []),
        { name: subjectName, units: parseInt(subjectUnits) },
      ];
    
      const updatedStudent = { ...selectedStudent, subjects: updatedSubjects };
    
      // Update students list with the updated student
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );
    
      // Update the selected student in the modal
      setSelectedStudent(updatedStudent);
    
      // Reset the input fields
      setSubjectName("");
      setSubjectUnits(0);
    };
  
    const handleDeleteSubject = (index) => {
      const updatedSubjects = selectedStudent.subjects.filter((_, i) => i !== index);
      const updatedStudent = { ...selectedStudent, subjects: updatedSubjects };
    
      // Update students list with the updated student
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );
    
      // Update the selected student in the modal
      setSelectedStudent(updatedStudent);
    };

  const styles = {
    header: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      backgroundColor: "#333",
      padding: "10px 20px",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      width: "50px",
      height: "50px",
      marginRight: "10px",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    navItem: {
      margin: "0 20px",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
      textTransform: "uppercase",
      position: "relative",
      padding: "5px 10px",
      transition: "all 0.3s ease", // Smooth transition
    },
    navItemActive: {
      backgroundColor: "#4CAF50", // Green background for active item
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)", // Glow effect
    },
    navItemHover: {
      backgroundColor: "#555", // Darker gray on hover
      borderRadius: "5px",
      transform: "scale(1.1)", // Slightly enlarges the item
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "80px", // Space for the fixed header
    },
    thTd: {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left",
      backgroundColor: "#1A1A1D",
      color: "white",
      fontWeight: "bold",
      borderRadius: "15px", // Adds rounded corners to table headers
    },
    td: {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left",
      color: "black", // Sets font color of student data to black
      borderRadius: "15px", // Adds rounded corners to table data cells
    },
    button: {
      margin: "5px",
      padding: "5px 10px",
      backgroundColor: "black", // Changed button background color to black
      color: "white",
      border: "none",
      borderRadius: "20px", // Rounded button
      cursor: "pointer",
    },
    modal: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "80%",
      maxWidth: "600px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    closeButton: {
      backgroundColor: "#FF6347",
      color: "white",
      padding: "10px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      marginTop: "20px",
      float: "right",
    }
  };

  return (
    <div>
      {/* Header with logos and navigation */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <img src="src/assets/images/bscslogo.png" alt="Logo 1" style={styles.logo} />
          <img src="src/assets/images/itlogo.png" alt="Logo 2" style={styles.logo} />
        </div>
        <div style={styles.nav}>
          {/* Navigation items */}
          <div
            style={{
              ...styles.navItem,
            }}
          >
            Dashboard
          </div>
          <div
            style={{
              ...styles.navItem,
            }}
          >
            Submissions
          </div>
          <div
            style={{
              ...styles.navItem,
            }}
          >
            Advisee
          </div>
          <div
            style={{
              ...styles.navItem,
            }}
          >
            Log out
          </div>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.thTd}>Student ID</th>
              <th style={styles.thTd}>Last Name</th>
              <th style={styles.thTd}>First Name</th>
              <th style={styles.thTd}>Middle Name</th>
              <th style={styles.thTd}>Student Type</th>
              <th style={styles.thTd}>Year Standing</th>
              <th style={styles.thTd}>Advising Status</th>
              <th style={styles.thTd}>Commands</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={styles.td}>{student.id}</td>
                <td style={styles.td}>{student.lastName}</td>
                <td style={styles.td}>{student.firstName}</td>
                <td style={styles.td}>{student.middleName}</td>
                <td style={styles.td}>{student.type}</td>
                <td style={styles.td}>{student.yearStanding}</td>
                <td style={styles.td}>{student.details}</td>
                <td style={styles.td}>
                  <button style={styles.button} onClick={() => handleViewSubjects(student)}>
                    View Subject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying details */}
      {showModal && selectedStudent && (
  <div style={styles.modal}>
    <div style={styles.modalContent}>
      <h3>Subjects for {selectedStudent.firstName} {selectedStudent.lastName}</h3>
      <ul>
        {selectedStudent.subjects.map((subject, index) => (
          <li key={index}>
            {subject.name} - {subject.units} units
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Units"
          value={subjectUnits}
          onChange={(e) => setSubjectUnits(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button
          onClick={handleAddSubject}
          style={{
            backgroundColor: "#000000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Add Subject
        </button>
        <button
          onClick={() => handleDeleteSubject(index)}
          style={{
            backgroundColor: "#FF6347",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
      <button
        style={styles.closeButton}
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Advisee;
