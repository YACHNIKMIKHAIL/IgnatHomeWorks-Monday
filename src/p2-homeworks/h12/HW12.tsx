import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, initStateColorType} from "./bll/themeReducer";


function HW12() {
    const theme = useSelector<AppStoreType, initStateColorType>(state => state.color) // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = (color: string) => {
        dispatch(changeThemeC(color))
    }
    return (
        <div style={{backgroundColor: theme.color}}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={['hotpink', 'white', 'red', 'blue', 'purple', 'gray', 'red']}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
