import Image from 'next/image'
import React from 'react'

type Option = {
    value: string
    name: string
}

type SelectProps = {
    options: Option[]
    defaultValue: string
    value: string
    onChange: (value: string) => void
    price?: boolean
}

const Select: React.FC<SelectProps> = ({
    options,
    defaultValue,
    value,
    onChange,
    price,
}) => {
    return (
        <div className="relative">
            <select
                className="py-[14px] px-[14px] w-full relative appearance-none bg-white rounded-[14px] focus:outline-none focus:border-blue-500"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            >
                <option disabled={true} value="">
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className={`absolute top-[50%] translate-y-[-50%] ${!price ?"right-[14px]" : "right-[18px]"}`}>
                <Image
                    src="/arowDown.svg"
                    alt="arrow down"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}
export default Select
