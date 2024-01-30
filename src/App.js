import React from 'react';
import './App.css';
import ReusableButton from './ReusableButton';
import ReusableList from './ReusableList';


function App() {

  // Example 1
  const handleButtononClick = () =>{
    console.log("Button Clicked!");
  }

  // Example 2
  const countries = ["USA", "Canada", "India", "UK", "Aust", "Sri", "Bangladesh"];

  return (
    <>
      <div className="App">
        <h1>Reusable Components in Ract</h1>

        {/* Example 1 */}
        <ReusableButton text="Click Me" onClick={handleButtononClick}/>
        <ReusableButton text="Submit" onClick={handleButtononClick}/>

        {/* Example 2 */}
        <ReusableList items = {countries}/>
    </div>
    </>
  );
}

export default App;
