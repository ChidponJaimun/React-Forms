import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value); //event.target.value is value from textbox
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault(); //prevent page refresh after submit
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
