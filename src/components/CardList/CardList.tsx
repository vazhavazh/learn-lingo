import Image from 'next/image'
import React, { useState } from 'react'
import Heart from '../UI/Icon/Heart'

type CardListProps = {}

const CardList: React.FC<CardListProps> = () => {
    const [active, setActive] = useState(false)

    return (
        <ul className="border border-solid border-red-500 ">
            <li className="px-6 py-6 border border-solid border-green-800 flex gap-12 ">
                <div className="px-[12px] py-[12px] border border-solid border-blue-700">
                    <div className="border border-solid border-hero-bg rounded-full">
                        <Image
                            src="/hero.png"
                            alt="teacher"
                            width={96}
                            height={96}
                        />
                    </div>
                </div>

                <div className="border border-solid border-black flex-1">
                    <div className="flex">
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-600 text-base not-italic font-medium leading-[150%]">
                                Languages
                            </span>
                            <h1 className="text-gray-900 text-2xl not-italic font-medium leading-[100%]">
                                Jane Smith
                            </h1>
                        </div>

                        <ul className="border border-solid border-red-500">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <Heart />
                    </div>
                </div>
            </li>
            <li className="px-6 py-6 border border-solid border-green-800">
                <div>
                    <Image
                        src="/hero.png"
                        alt="teacher"
                        width={96}
                        height={96}
                    />
                </div>
                <div></div>
            </li>
            <li className="px-6 py-6 border border-solid border-green-800">
                <div>
                    <Image
                        src="/hero.png"
                        alt="teacher"
                        width={96}
                        height={96}
                    />
                </div>
                <div></div>
            </li>
            <li className="px-6 py-6 border border-solid border-green-800">
                <div>
                    <Image
                        src="/hero.png"
                        alt="teacher"
                        width={96}
                        height={96}
                    />
                </div>
                <div></div>
            </li>
        </ul>
    )
}
export default CardList
