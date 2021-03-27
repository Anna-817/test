import React, { useState } from "react";

import Child from "./../childfunc";

const ToggleChild = ({ goal }) => {
    const [showChild, setShowChild] = useState(true);
  
    const toggleChild = () => {
      setShowChild(!showChild);
    };

    return (
        <div style={{ marginTop: "25px" }}>
            {showChild && (
                <Child childName="child" goal={goal} />
            )}
            <button onClick={toggleChild}>Toggle child</button>
        </div>
    );
};

export default ToggleChild;