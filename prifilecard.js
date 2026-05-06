import React from 'react'; 

 
import React, { useState } from "react"; 
 
function App() { 
  const [hover, setHover] = useState(false); 
  const [btnHover, setBtnHover] = useState(false); 
 
  const styles = { 
    wrapper: { 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      background: "linear-gradient(135deg, #1a1a2e, #0f3460)", 
      fontFamily: "Arial" 
    }, 
    card: { 
      background: "#fff", 
      borderRadius: "20px", 
      padding: "40px 30px", 
      textAlign: "center", 
      width: "300px", 
      boxShadow: "0 15px 40px rgba(0,0,0,0.3)", 
      transform: hover ? "scale(1.05)" : "scale(1)", 
      transition: "0.4s" 
    }, 
    name: { 
      margin: "10px 0", 
      fontSize: "22px", 
      color: "#1a1a2e" 
    }, 
    role: { 
      color: "#4ecca3", 
      fontWeight: "bold", 
      marginBottom: "10px" 
    }, 
    desc: { 
      fontSize: "14px", 
      color: "#666", 
      marginBottom: "20px" 
    }, 
    btn: { 
      background: btnHover ? "#4ecca3" : "#1a1a2e", 
      color: "#fff", 
      border: "none", 
      padding: "10px 25px", 
      borderRadius: "30px", 
      cursor: "pointer" 
    } 
  }; 
 
  return ( 
    <div style={styles.wrapper}> 
      <div 
        style={styles.card} 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)} 
      > 
        <h2 style={styles.name}>Aditya Indalkar</h2> 
 
        <p style={styles.role}> 
          Python Backend Engineer 
        </p> 
 
        <p style={styles.desc}> 
          Specializing in Django, FastAPI, and backend systems. 
        </p> 
 
        <button 
          style={styles.btn} 
          onMouseEnter={() => setBtnHover(true)} 
          onMouseLeave={() => setBtnHover(false)} 
        > 
          Follow 
        </button> 
      </div> 
    </div> 
  ); 
} 
 
export default App; 
 
 
app.jsx: 
 
 
import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './App.jsx' 
 
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>, 
)
