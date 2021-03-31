import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";

const InputForm = ({addMessage}) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(() => e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addMessage(label);
        setLabel(() => '');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                onChange={onLabelChange}
                placeholder="Say something"
                value={label} />
            <button>Add</button>
        </form>
    );
};

export default InputForm;