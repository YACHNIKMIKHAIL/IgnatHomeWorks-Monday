import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange, onChangeOption
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <select key={name + '-' + i}
                onChange={onChangeCallback} {...restProps}>
            {o}
        </select>
    )) : []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperSelect

