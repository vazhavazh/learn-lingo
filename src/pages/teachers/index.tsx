import Header from '@/components/Header/Header'
import Select from '@/components/UI/Select/Select'
import React, { useState } from 'react'
// import Select from 'react-select'

type teachersProps = {}

const TeachersPage: React.FC<teachersProps> = () => {
    const [filter, setFilter] = useState('')

    return (
        <>
            <Header />
            <div className="px-3 m680:px-16 lg:px-32 bg-gray-100 border border-solid border-red-500">
                <ul className="flex items-center  justify-center m600:justify-normal gap-2  sm:gap-5 w-full m680:w-[50%] text-gray-900 text-[10px] sm:text-lg not-italic font-medium leading-[111.111%]">
                    <li className="flex flex-col gap-2 min-[380px]:min-w-[109px] m600:min-w-[221px] ">
                        <label className="text-gray-600 text-[8px] sm:text-sm not-italic font-medium leading-[128.571%]">
                            Languages
                        </label>

                        <Select
                            value={filter}
                            onChange={(filter) => setFilter(filter)}
                            defaultValue="French"
                            options={[
                                { value: 'title', name: 'By Name' },
                                { value: 'body', name: 'By description' },
                            ]}
                        />
                    </li>
                    <li className="flex flex-col gap-2 min-w-[110px] min-[380px]:min-w-[150px] m600:min-w-[198px]">
                        <label className="text-gray-600 text-[8px] sm:text-sm not-italic font-medium leading-[128.571%]">
                            Level of knowledge
                        </label>
                        <Select
                            value={filter}
                            onChange={(filter) => setFilter(filter)}
                            defaultValue="A1 Beginner"
                            options={[
                                { value: 'title', name: 'By Name' },
                                { value: 'body', name: 'By description' },
                            ]}
                        />
                    </li>
                    <li className="flex flex-col gap-2 min-[380px]:min-w-[94px] max-w-[124px]">
                        <label className="text-gray-600 text-[8px] sm:text-sm not-italic font-medium leading-[128.571%]">
                            Price
                        </label>
                        <Select
                            value={filter}
                            price={true}
                            onChange={(filter) => setFilter(filter)}
                            defaultValue="30 $"
                            options={[
                                { value: 'title', name: 'By Name' },
                                { value: 'body', name: 'By description' },
                            ]}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}
export default TeachersPage
