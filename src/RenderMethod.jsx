import React, { Component } from 'react'

export default class RenderMethod extends Component {
      // Example 3
      constructor(){
            super();
            this.state = {
                email: "avinashsng416@outlook.com",
            };
        }
  render() {
    // Example 1
    // console.log("Render method !!", this.props);

    // Example 3
    console.log("Render method !!", this.state.email);
    return (
    <>
        {/* Example 3 */}
        <h2>Render Method!! {this.state.email}</h2>
        <button onClick={()=>this.setState({email:"avinash.webintern@gmail.com"})}>Update State</button>  
    </>
    )
  }
}
