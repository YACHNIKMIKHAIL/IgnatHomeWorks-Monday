import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [allV,setAllV]=useState<Array<number>>([0,100])

    const onChangeRange = (value: number) => {
        setAllV([value,allV[1]])
    }
    const onChangeRangeII = (value: Array<number>) => {
        debugger
        setAllV(value)
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <div>{allV[0]}</div>
                <SuperRange onChangeRange={onChangeRange} value={allV[0]}/>
            </div>

            <div>
                <div>{allV[0]}</div>
                <SuperDoubleRange onChangeRange={onChangeRangeII} value={allV}/>
                <div>{allV[1]}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
