import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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
                placeholder="Введите сообщение"
                value={label}
                fullWidth={ true }
                style={{ fontSize: '22px' }} />
            <Button onClick={onSubmit}
                variant="contained"
                color="default">
                <SendIcon />
            </Button>
        </form>
    );
};

export default InputForm;