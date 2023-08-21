import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter()

    return (
        <header
            className="flex justify-between items-center py-3 sm:py-5 px-1 
		sm:px-8 md:px-16  lg:px-32"
        >
            <Link
                href="/"
                className="flex gap-2 items-center transition-all hover:scale-125"
            >
                <Image src="/logo.svg" alt="logo" width={28} height={28} />
                <span
                    className="text-gray-900 text-[8px] sm:text-xl 
				not-italic font-medium leading-[120%] -tracking-[0.050em]"
                >
                    LearnLingo
                </span>
            </Link>

            <div
                className=" flex gap-2 sm:gap-7 text-gray-900 text-[8px] sm:text-base 
			not-italic font-normal leading-[125%]"
            >
                <Link
                    className={`${router.pathname === '/' ? 'text-hero-btn' : ''}`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`${
                        router.pathname === '/teachers' ? 'text-hero-btn' : ''
                    }`}
                    href="/teachers"
                >
                    Teachers
                </Link>
            </div>

            <div className="flex gap-2 sm:gap-4 items-center">
                <button
                    className="flex gap-1 items-center sm:gap-2 text-gray-900 text-[8px] sm:text-base 
				not-italic font-bold leading-[125%] transition-all hover:scale-125"
                >
                    <Image
                        src="/login.svg"
                        alt="log in"
                        width={20}
                        height={20}
                    />
                    Log in
                </button>
                <button
                    className="rounded-xl bg-full-black hover:bg-hover-black hover:cursor-pointer transition-all 
					duration-300 ease-in-out py-1 sm:py-3.5 px-2 sm:px-10 
				text-white text-[8px] sm:text-base not-italic font-bold leading-[125%]"
                >
                    Registration
                </button>
            </div>
        </header>
    )
}
export default Header
