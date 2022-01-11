import React, {Dispatch} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingACType} from "./bll/loadingReducer";
import {CircularProgress} from "@mui/material";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch<Dispatch<LoadingACType>>()
    // const loading = false

    const setLoading = () => {
        dispatch(loadingAC(!loading))
        setTimeout(() => {
            dispatch(loadingAC(loading))
        }, 2000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}><CircularProgress/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
