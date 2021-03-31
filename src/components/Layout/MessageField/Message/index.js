import React from "react";

const Message = ({text, name}) => {
    return (
        <div className="message"
            style={{ alignSelf: name === 'bot' ?
            'flex-start' : 'flex-end' }}>
            <div>{text}</div>
            <div className="message-sender">{name}</div>
        </div>
    );
};

export default Message;