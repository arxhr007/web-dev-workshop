// ⚛️ EXAMPLE 4: Multiple State Variables
import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Registration</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        <h3>Preview:</h3>
        <p>Name: {name || "Not entered"}</p>
        <p>Age: {age || "Not entered"}</p>
        <p>City: {city || "Not entered"}</p>
      </div>
    </div>
  );
}

export default UserForm;
