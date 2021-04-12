import React from 'react';
import { Button } from '@material-ui/core';

const AddChatForm = ({addChat}) => {
    return (
        <div className="chat-list__button">
            <Button onClick={addChat}
                variant="contained"
                color="default">
                    Добавить чат
            </Button>
        </div>
    );
};

export default AddChatForm;