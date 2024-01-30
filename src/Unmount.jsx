<<<<<<< HEAD
import React, { Component } from "react";

export default class Unmount extends Component {
  // Example 1
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("Interval Tick");
    }, 1000);
  }

  //   Example 2
  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Interval Tick Removed");
  }
  render() {
    return <h2>Child Component Will Unmount</h2>;
=======
import React, { Component } from 'react'

export default class Unmount extends Component {

    // Example 1
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            console.log("Interval Tick");
        }, 1000);
    }

    // Example 2
    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("Interval Tick Removed");
    }
  render() {
    return <h2>Child Component Will Unmount</h2>
>>>>>>> 97a4209d44fd5ee8f1d7459347c4ce38530d194d
  }
}
