import React,{forwardRef, useref, useImperativeHandle, useRef} from 'react'

 function ChildComponent(props,ref) {
    
    // Example 2
    const childRef = useRef();

    const handleChildButtonClick = () => {
        console.log("Child Button clicked");
    };

    useImperativeHandle(ref, () => ({
            handleChildButtonClick,
    }));

  return (
    <>
       {/* Example 1 */}
       {/* <input type="text" ref={ref}/> */}

       {/* Example 2 */}
       <button ref={childRef}>Click Me</button>
    </>
  );
}
export default forwardRef(ChildComponent);
