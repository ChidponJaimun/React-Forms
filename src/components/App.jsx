import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value); //event.target.value is value from textbox
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        // onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        // value={name}
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default App;
