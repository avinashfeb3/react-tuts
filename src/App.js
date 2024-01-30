import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Example 1
  constructor() {
    super();
    this.state = {
      name: "Avinash Singh",
      count:0,
    };
    // console.log("constructor called!!");
  }

  // Example 2
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.count, this.state.count);
    if (this.state.count !== prevState.count){
      alert("working");
      console.log("componentDidUpdate called!!", 
      prevState.count, 
      this.state.count,
      prevProps
      );
    }

    // if(this.state.count< 10){
    //   this.setState({count: this.state.count + 1});
    // }
  }

  render() {
    // Example 1
    // console.log("Render Called!!");
    return (
      <>
        <div className="App">
          <h1>ComponentDidUpdate</h1>
          <h2>Count: {this.state.count}</h2>

          {/* Example 2 */}
          {/* <button onClick={()=> this.setState({name: 'Sam Sharma'})}>
          Update State
          </button> */}

          {/* Example 3 */}
          <button onClick={()=> this.setState({count:this.state.count + 1})}>
          Update State
          </button>
        </div>
      </>
    );
  }
}

export default App;
