// ⚛️ EXAMPLE 3: Toggle Button (Boolean State)
import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <h2>Toggle Switch</h2>
      <button 
        onClick={() => setIsOn(!isOn)}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          backgroundColor: isOn ? '#10b981' : '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        {isOn ? "ON 🟢" : "OFF 🔴"}
      </button>
      <p style={{ marginTop: '10px' }}>
        Status: {isOn ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default ToggleButton;
