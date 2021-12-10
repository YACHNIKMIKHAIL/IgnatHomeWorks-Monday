import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JUNIORplus from "./pages/JUNIORplus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORplus: '/junior+'
}

function ROUtes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'PRE_JUNIOR'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                <Route path={'JUNIOR'} element={<Navigate to={PATH.JUNIOR}/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                <Route path={'JUNIORplus'} element={<Navigate to={PATH.JUNIORplus}/>}/>
                <Route path={PATH.JUNIORplus} element={<JUNIORplus/>}/>


            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route element={ <Error404/>}/>

            </Routes>
        </div>
    )
}

export default ROUtes
