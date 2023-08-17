import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className=' border-2 border-red-500'>
			<Link
				href='/'
				className='flex gap-2'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={28}
					height={28}></Image>
				<span className='text-gray-900 text-xl not-italic font-medium leading-6 tracking-tighter'>
					LearnLingo
				</span>
			</Link>
		</div>
	);
};
export default Header;
