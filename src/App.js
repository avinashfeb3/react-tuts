import React, { useState } from 'react';
import './App.css';
import RenderMethod from './RenderMethod';

function App() {
  // const [name, setName] = useState("Code4education");
  return (
    <>
      <div className='App'>
        <h1>LifeCycle of Render Method In React</h1>

        {/* Example 2 */}
        {/* <RenderMethod name={name}/> */}

        {/* Example 3 */}

        {/* Example 2 */}
        {/* <button onClick={() => setName("Avinash Singh")}>Update Name</button> */}

        <RenderMethod/>
      </div>
    </>
  );
}

export default App;
