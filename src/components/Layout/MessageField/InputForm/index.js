import React, { useState } from "react";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

const InputForm = ({addMessage}) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addMessage(label);
        setLabel('');
    };

    return (
        <form onSubmit={onSubmit} className="message-form">
            <TextField type="input"
                onChange={onLabelChange}
                hintText="Введите сообщение"
                value={label}
                fullWidth={ true }
                style={{ fontSize: '22px' }} />
            <FloatingActionButton onClick={onSubmit}>
                <SendIcon />
            </FloatingActionButton>
        </form>
    );
};

export default InputForm;