import React, { useRef } from 'react';
import './App.css';
function App() {
  const inputRef = useRef(null)
  const inputRef2 = useRef(null)
  function submitForm(e) {
    e.preventDefault()
    console.log("input controlled 1 value:", inputRef.current.value)
    console.log("input controlled 2 value:", inputRef2.current.value)
    const input3 = document.getElementById('input3').value
    console.log("input controlled 3 value:", input3)
  }

  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /> <br></br> <br></br>
        <input ref={inputRef2} type="text" /> <br></br> <br></br>
        <input id="input3" type="text" /><br></br> <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}


export default App;
