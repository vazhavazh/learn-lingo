import React, { useState } from 'react'
import Select from '../UI/Select/Select'

type FilterProps = {}

const Filter: React.FC<FilterProps> = () => {
    const [filter, setFilter] = useState({
        language: '',
        knowledge: '',
        price: '',
    })


    const handleLanguageChange = (selectedLanguage: string) => {
        setFilter({ ...filter, language: selectedLanguage })
    }

    const handleKnowledgeChange = (selectedKnowledge: string) => {
        setFilter({ ...filter, knowledge: selectedKnowledge })
    }

    const handlePriceChange = (selectedPrice: string) => {
        setFilter({ ...filter, price: selectedPrice })
    }
    return (
        <ul className="flex items-center mb-8  justify-center m600:justify-normal gap-2  sm:gap-5 w-full m680:w-[50%] text-gray-900 text-[10px] sm:text-lg not-italic font-medium leading-[111.111%]">
            <li className="flex flex-col gap-2 min-[380px]:min-w-[109px] m600:min-w-[221px] ">
                <label className="text-gray-600 text-[8px] sm:text-sm not-italic font-medium leading-[128.571%]">
                    Languages
                </label>

                <Select
                    value={filter.language}
                    handleLanguageChange={handleLanguageChange}
                    options={[
                        { value: 'French', name: 'French' },
                        { value: 'English', name: 'English' },
                        { value: 'German', name: 'German' },
                        { value: 'Ukrainian', name: 'Ukrainian' },
                        { value: 'Polish', name: 'Polish' },
                    ]}
                />
            </li>
            <li className="flex flex-col gap-2 min-w-[110px] min-[380px]:min-w-[150px] m600:min-w-[198px]">
                <label className="text-gray-600 text-[8px] sm:text-sm not-italic font-medium leading-[128.571%]">
                    Level of knowledge
                </label>
                <Select
                    value={filter.knowledge}
                    handleKnowledgeChange={handleKnowledgeChange}
                    options={[
                        { value: 'A1 Beginner', name: 'A1 Beginner' },
                        { value: 'A2 Elementary', name: 'A2 Elementary' },
                        { value: 'B1 Intermediate', name: 'B1 Intermediate' },
                        {
                            value: 'B2 Upper-Intermediate',
                            name: 'B2 Upper-Intermediate',
                        },
                    ]}
                />
            </li>
            <li className="flex flex-col gap-2 min-[380px]:min-w-[94px] max-w-[124px]">
                <label className="text-gray-600 text-[8px] sm:text-sm not-italic font-medium leading-[128.571%]">
                    Price
                </label>
                <Select
                    value={filter.price}
                    price={true}
                    handlePriceChange={handlePriceChange}
                    options={[
                        { value: '10', name: '10' },
                        { value: '20', name: '20' },
                        { value: '30', name: '30' },
                        { value: '40', name: '40' },
                    ]}
                />
            </li>
        </ul>
    )
}
export default Filter
