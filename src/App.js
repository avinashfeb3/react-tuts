import React, { Component } from "react";
import "./App.css";
import Unmount from "./Unmount";
<<<<<<< HEAD
=======

>>>>>>> 97a4209d44fd5ee8f1d7459347c4ce38530d194d
class App extends Component {
  // Example 1
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      show: true,
    };
  }

  render() {
    console.log("clicked", this.state.show);
    return (
      <>
        <div className="App">
          <h1>Lifecycle Methods</h1>

          {this.state.show ? <Unmount /> : <h2>Removed</h2>}

          {/* Example 2 */}
          <button onClick={() => this.setState({ show: !this.state.show })}>
            Removed Component
          </button>
=======
      show:true
    }
  }
  render() {
    console.log('clicked', this.state.show);
    return (
      <>
        <div className="App">
          <h1>Lifecycle Methods of Componentwillunmount</h1>

         {this.state.show ? <Unmount /> : <h2>Removed</h2>}

          {/* Example 2 */}
          <button onClick={()=>this.setState({show: !this.state.show})}>Removed Component</button>
>>>>>>> 97a4209d44fd5ee8f1d7459347c4ce38530d194d
        </div>
      </>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> 97a4209d44fd5ee8f1d7459347c4ce38530d194d
export default App;
