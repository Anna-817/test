import React, { useEffect, useState, useCallback } from "react";

import Child from './child';
import "./app.scss";

const messages = ["Привет", "Как дела?"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages,
      name: "Name",
    };
    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App Did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App Did update", prevState.messages);
  }

  componentWillUnmount() {
    console.log("App will unmount");
  }

  handleAddMessage = () => {
    this.setState(
      (prevState) => ({
        messages: [...prevState.messages, "Нормально"],
      }),
      () => console.log(this.state.messages.length)
    );
  };

  render() {
    console.log("App render");
    const { goal } = this.props;
    const { messages } = this.state;
    return (
      <>
        <h1 className="red" style={{ top: "25px", color: "wheat" }}>
          Hello React
        </h1>
        {messages.map((text) => (
          <div>{text}</div>
        ))}
        <button onClick={this.handleAddMessage}>Add</button>
        <Child childName="child" goal={goal} />
      </>
    );
  }
}

export default App;

