import React,{memo} from 'react'

 function ChildComponent(props) {
    // Example 2
    console.log("Child Component Rendered!!");
  return (
   <>
     <h3>ChildComponent  count: {props.count}</h3>
   </>
  )
}
export default memo(ChildComponent);
