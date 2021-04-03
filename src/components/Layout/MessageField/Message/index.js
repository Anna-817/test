import React from "react";

const Message = ({text, name, author}) => {
    return (
        <div className="message"
            style={{ alignSelf: author === 'bot' ?
            'flex-start' : 'flex-end' }}>
            <div>{text}</div>
            <div className="message-sender">{name}</div>
        </div>
    );
};

export default Message;