import React, {ChangeEvent} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: Array<number>
}
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
         onChangeRange, value,

    }
) => {
    //
    // const [valueX, setValueX] = React.useState<number[]>([20, 37]);
    //
    // // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, newValue: number[]) => {
    // //     setValueX(newValue)
    // //     if (onChangeRange) {
    // //         onChangeRange(newValue);
    // //     }
    // // }
    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     if (onChangeRange) {
    //         if (typeof newValue === 'number')
    //             setValueX([newValue, 0])
    //         onChangeRange(valueX);
    //     }
    // };
    const [value2, setValue2] = React.useState<number[]>([20, 37]);
    const minDistance = 10;
    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue as number[]);
        }
    };

    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    )
}

export default SuperDoubleRange
