// ⚛️ EXAMPLE 2: Text Input with State
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");
  
  return (
    <div>
      <h2>What's your name?</h2>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p style={{ fontSize: '24px', marginTop: '10px' }}>
        {name ? `Hello, ${name}! 👋` : "Type your name above"}
      </p>
    </div>
  );
}

export default NameInput;
