import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.slide}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => ((isActive ? s.active : ''))}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => ((isActive ? s.active : ''))}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIORplus}
                     className={({isActive}) => ((isActive ? s.active : ''))}>JUNIORplus</NavLink>
            <span>show me)</span>
        </div>
    )
}

export default Header
