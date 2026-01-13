// ⚛️ EXAMPLE 2: JSX with JavaScript
function Greeting() {
  const name = "Aaron";
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Current time: {currentTime}</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

export default Greeting;
