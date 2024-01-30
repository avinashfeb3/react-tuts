import React, {Component} from "react";
import './App.css';

class App extends Component{

  // Example 1
  constructor(){
    super();
      console.log("Constructor Method !!");
  }
  render() {
    console.log("Render Method !!");
    return (
      <div className="App">
        <h1>Constructor LifeCycle Method</h1>
      </div>
    );
  }
}

export default App;
