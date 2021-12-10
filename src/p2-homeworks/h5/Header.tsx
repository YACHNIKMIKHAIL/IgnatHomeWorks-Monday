import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.slide}>
            <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
             <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
             <NavLink to={PATH.JUNIORplus}>JUNIORplus</NavLink>
             <span>show me)</span>
        </div>
    )
}

export default Header
