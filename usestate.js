import React, { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(student);
  };

  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px",
      background: "linear-gradient(135deg, #ff7a18, #ffb347)", // orange gradient 
      minHeight: "100vh",
      color: "#fff"
    }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit} style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        color: "#333",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ff7a18",
            borderRadius: "5px"
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ff7a18",
            borderRadius: "5px"
          }}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ff7a18",
            borderRadius: "5px"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            background: "#ff7a18",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
      {submittedData && (
        <div style={{
          marginTop: "20px",
          background: "#fff",
          padding: "15px",
          borderRadius: "10px",
          width: "300px",
          color: "#333",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}>
          <h3 style={{ color: "#ff7a18" }}>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}
export default App;