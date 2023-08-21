import Image from 'next/image'
import React from 'react'

type Option = {
    value: string
    name: string
}

type SelectProps = {
    options: Option[]
    value: string
    onChange: (value: string) => void
    price?: boolean
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, price }) => {
    return (
        <div className="relative">
            <select
                className="py-[14px] px-[14px] w-full relative appearance-none bg-white rounded-[14px] focus:outline-none focus:text-gray-900 cursor-pointer"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className={`cursor-pointer ${
                            option.value === value
                                ? 'text-black bg-gray-200'
                                : 'text-gray-500'
                        }`}
                    >
                        {option.name}
                    </option>
                ))}
            </select>

            <div
                className={`absolute pointer-events-none top-[50%] translate-y-[-50%] ${
                    !price ? 'right-[14px]' : 'right-[18px]'
                }`}
            >
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
