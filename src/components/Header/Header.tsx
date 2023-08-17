import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className=' border-2 border-red-500 flex justify-between items-center py-3 sm:py-5 px-1 sm:px-8 md:px-16  lg:px-32'>
			<Link
				href='/'
				className='flex gap-2 '>
				<Image
					src='/logo.svg'
					alt='logo'
					width={28}
					height={28}
				/>
				<span
					className='text-gray-900 text-[8px] sm:text-xl 
				not-italic font-medium leading-6 tracking-tighter'>
					LearnLingo
				</span>
			</Link>

			<div
				className=' flex gap-2 sm:gap-7 text-gray-900 text-[8px] sm:text-base 
			not-italic font-normal leading-5'>
				<Link href='/'>Home</Link>
				<Link href='/teachers'>Teachers</Link>
			</div>

			<div className='flex gap-2 sm:gap-4 items-center'>
				<button
					className='flex gap-1 sm:gap-2 text-gray-900 text-[8px] sm:text-base 
				not-italic font-bold leading-5'>
					<Image
						src='/login.svg'
						alt='log in'
						width={20}
						height={20}
					/>
					Log in
				</button>
				<button
					className='rounded-xl bg-black hover:bg-gray-600 transition-all 
					duration-300 ease-in-out py-1 sm:py-3.5 px-2 sm:px-10 
				text-white text-[8px] sm:text-base not-italic font-bold leading-5'>
					Registration
				</button>
			</div>
		</div>
	);
};
export default Header;
