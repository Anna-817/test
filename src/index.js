import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/appfunc";


ReactDOM.render(<App />, document.getElementById("app"));

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const Button = (props) => {
   return <a href='#'onClick ={props.addMessage}>link</a>
};

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);