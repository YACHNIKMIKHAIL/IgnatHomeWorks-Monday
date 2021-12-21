import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, ChangeEventHandler} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange && onChange(e.currentTarget.value)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <select key={i}
                value={0}
                onChange={onChangeCallback} {...restProps}>
        </select>
    )) : []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperSelect

