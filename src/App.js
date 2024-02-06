import React, {useState, useCallback} from 'react';
import "./App.css";
import ChildComponent from './ChildComponent';

function App() {

    // Normal Example 1
    const[count1, setCount1] = useState(0);
    console.log("Parent Rendered!!");

    // Example 2
    const[count2, setCount2] = useState(0);
    const incrementCount = useCallback(()=>{
        setCount2((prevCount) => prevCount + 1);
        console.log("usecallback Hook!!");
    },[]);

  return (
    <>
        <div className='App'>
            <h1>usecallback Hook In React</h1>

            {/* Example 1 */}
            <p>Count: {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Increment Count</button>
            <br/>
            <br/>

            {/* Example 2 */}
            <p>Count2: {count2}</p>
            <ChildComponent increment={incrementCount}/>
        </div>
    </>
  )
}
export default App;
