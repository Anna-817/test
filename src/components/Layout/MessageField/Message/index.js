import React from "react";

const Message = ({text, name, author, id, deleteMessageHandler}) => {
    return (
        <div className="message"
            style={{ alignSelf: author === 'bot' ?
            'flex-start' : 'flex-end' }}>
            <div>{text}</div>
            <div className="message-sender">{name}</div>
            <span className="message-sender__del"
                data-id={id}
                onClick={deleteMessageHandler}>x</span>
        </div>
    );
};

export default Message;