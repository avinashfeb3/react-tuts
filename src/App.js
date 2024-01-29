import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Avinash Singh",
    };
  }
  render() {
    return (
      <>
        <div className="App">
          <h1>Props in React.</h1>
          {/* <UserList name="Avinash Singh" email="Bhaskar@gmail.com" /> */}

          {/* Example 2 */}
          <UserList name={this.state.name} email="avinash@gmail.com" />

          <button onClick={() => this.setState({ name: "Code4education" })}>
            Update Props
          </button>
        </div>
      </>
    );
  }
}
export default App;
