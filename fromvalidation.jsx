 import React, { useState } from 'react'; 
 
const ValidatedForm = () => { 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' }); 
  const [errors, setErrors] = useState({}); 
 
  const validate = () => { 
    let errs = {}; 
 
    if (!formData.name) errs.name = "Name is required"; 
    if (!formData.email.includes('@')) errs.email = "Invalid email format"; 
    if (formData.password.length < 6) errs.password = "Minimum 6 characters"; 
 
    setErrors(errs); 
    return Object.keys(errs).length === 0; 
  }; 
 
  return ( 
    <div style={styles.page}> 
      <div style={styles.card}> 
        <h2 style={styles.title}>Validator Suite</h2> 
 
        <input 
          style={styles.input} 
          placeholder="Name" 
          onChange={(e) => 
            setFormData({ ...formData, name: e.target.value }) 
          } 
        /> 
        <div style={styles.error}>{errors.name}</div> 
 
        <input 
          style={styles.input} 
          placeholder="Email" 
          onChange={(e) => 
            setFormData({ ...formData, email: e.target.value }) 
          } 
        /> 
        <div style={styles.error}>{errors.email}</div> 
 
        <input 
          style={styles.input} 
          type="password" 
          placeholder="Password" 
          onChange={(e) => 
            setFormData({ ...formData, password: e.target.value }) 
          } 
        /> 
        <div style={styles.error}>{errors.password}</div> 
 
        <button style={styles.button} onClick={validate}> 
          Submit 
        </button> 
      </div> 
    </div> 
  ); 
}; 
 
const styles = { 
  page: { 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', 
    fontFamily: 'Arial, sans-serif', 
  }, 
  card: { 
    background: '#ffffff', 
    padding: '30px', 
    borderRadius: '12px', 
    width: '320px', 
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)', 
  }, 
  title: { 
    textAlign: 'center', 
    marginBottom: '20px', 
    color: '#2c5364', 
  }, 
  input: { 
    width: '100%', 
    padding: '10px', 
    marginBottom: '5px', 
    border: '1px solid #ccc', 
    borderRadius: '6px', 
    outline: 'none', 
    transition: '0.3s', 
  }, 
  error: { 
    color: '#e74c3c', 
    fontSize: '12px', 
    marginBottom: '10px', 
    minHeight: '14px', 
  }, 
  button: { 
    width: '100%', 
    padding: '10px', 
    background: '#2c5364', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '6px', 
    cursor: 'pointer', 
    transition: '0.3s', 
  }, 
}; 
 
export default ValidatedForm;