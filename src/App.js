<<<<<<< HEAD
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  // Example 2
  const[count, setCount] = useState(0);

  // Example 1
  useEffect(() =>{
    // alert("useEffect Hook!");
    console.log("useEffect Hook!");
    console.log("Updating");
  },[])
  return (
    <>
     <div className="App">
     <h1>UseEffect Hooks</h1>

     {/* Example 2 */}
     <h2>Count:{count}</h2>
     <button onClick={() => setCount(count+1)}>Update Count</button>
    </div>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 97a4209d44fd5ee8f1d7459347c4ce38530d194d
  );
}

export default App;
