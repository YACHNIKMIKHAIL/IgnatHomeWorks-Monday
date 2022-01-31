import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from "./RequestAPI";

const Request = () => {
    const [value, setValue] = useState<boolean>(false)
    const [f, setF] = useState<boolean>(false)
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setF(false)
        setValue(e.currentTarget.checked)
    }
    const func = () => {
        RequestAPI.getSuccess(value)
            .then(data => alert(data.errorText))
            .catch(() => setF(true))
    }
    return (
        <div>
            <button onClick={func}>x</button>
            <input type='checkbox' checked={value} onChange={onChangeValue}/>
            {f ? <div>Error captured!</div> : ''}
        </div>
    );
};

export default Request;