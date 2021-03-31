import React, { useEffect } from "react";

export default ({ childName }) => {
  useEffect(() => {
    console.log("Child did update childName");
  }, [childName]);

  useEffect(() => {
    console.log("Child did mount");
    const interval = setInterval(() => console.log('Child interval'), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => console.log("Child will unmount");
  }, []);

  return <div>CHILD: {childName}</div>;
};
