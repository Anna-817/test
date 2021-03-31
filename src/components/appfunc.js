import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";

import MessageField from "./MessageField";
import ToggleChild from "./ToggleChild";

import "./app.scss";

export const App = ({ goal, name }) => {
  console.log("App render");
  
  useEffect(() => {
    console.log("App did update name");
  }, [name]);

  return (
    <>
      <h1 className={`second-class`} style={{ top: "25px", color: "wheat" }}>
        Hello React
      </h1>

      <MessageField />
      <ToggleChild goal={goal} />
    </>
  );
};
