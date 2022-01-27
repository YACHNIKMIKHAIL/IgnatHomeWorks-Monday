import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)
    const [allV,setAllV]=useState<Array<number>>([value1,value2])

    const onChangeRange = (value: number) => {
       debugger
        console.log(allV)
        setAllV([value,value2])
    }
    const onChangeRangeII = (value: Array<number>) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange} value={value1}/>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange onChangeRange={onChangeRangeII} value={allV}/>
                <span>{value2}</span>
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
