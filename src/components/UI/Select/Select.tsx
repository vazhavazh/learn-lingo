import Image from 'next/image'
import React, { useState } from 'react'

type Option = {
    value: string
    name: string
}

type SelectProps = {
    options: Option[]
    value: string
    handleLanguageChange?: (value: string) => void
    handleKnowledgeChange?: (value: string) => void
    handlePriceChange?: (value: string) => void
    price?: boolean
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    handleLanguageChange,
    handleKnowledgeChange,
    handlePriceChange,
    price,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleInput = (selectedValue: string) => {
        setIsOpen(false)

        if (handleLanguageChange) {
            handleLanguageChange(selectedValue)
        }

        if (handleKnowledgeChange) {
            handleKnowledgeChange(selectedValue)
        }

        if (handlePriceChange) {
            handlePriceChange(selectedValue)
        }
    }

    return (
        <>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`py-[14px] px-[14px] max-h-[56px] flex justify-between items-center ${
                        price ? 'pr-[18px]' : ''
                    } w-full relative text  bg-white rounded-[14px]   cursor-pointer flex justify-start`}
                >
                    {price
                        ? `${value || options[0].value} $`
                        : `${value || options[0].value}`}
                    <div className="">
                        <Image
                            src="/arowDown.svg"
                            alt="arrow down"
                            width={20}
                            height={20}
                        />
                    </div>
                </button>

                <div className="absolute flex flex-col gap-2 px-[14px]">
                    {options &&
                        isOpen &&
                        options.map((option) => (
                            <input
                                onClick={() => handleInput(option.value)}
                                key={option.value}
                                value={option.value}
                                name={option.name}
                                className={
                                    option.value === value
                                        ? 'cursor-pointer'
                                        : 'text-select-gray cursor-pointer'
                                }
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Select
