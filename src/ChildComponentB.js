import React from 'react';

function ChildComponentB({sharedState, alert}) {
    // Example 2
    // const data = "Avinash Singh";
    const data ={name:"Avinash Singh", email:"avinashsng416@outlook.com"};
    return (
        <div>
            <h3>Shared State: {sharedState}</h3>
            <button onClick={() => alert(data)}>Click Me</button>
        </div>
    );
}

export default ChildComponentB;
