import React from 'react'
import {MessageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageDataType) {
    return (
        <div className={s.allmessage}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.m}>
                <div className={s.s}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.message}>
                        {props.message}
                    </div>


                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
