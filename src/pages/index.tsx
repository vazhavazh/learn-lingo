import Header from "@/components/Header/Header";
import AppleIcon from "@/components/UI/Icon/AppleIcon";
import Image from "next/legacy/image";
import config from "../../tailwind.config";
export default function Home() {
	const heroBG = config.theme?.extend?.colors["hero-bg"];
	const secondIconColor = config.theme?.extend?.colors["second-icon-color"];

	return (
		<>
			<Header />
			<main className='px-16'>
				<div className='border-2 border-yellow-500 flex gap-6'>
					<div className='py-6 lg:py-24 pr-[27px] lg:pr-[108px] pl-[16px] lg:pl-[64px] bg-gray-100 rounded-[30px] max-w-[720px] flex-1 '>
						<h1
							className='text-gray-900 text-5xl not-italic font-medium leading-[116.667%] 
						-tracking-[0.02em] mb-[38px]'>
							Unlock your potential with the best{" "}
							<span
								className='text-gray-900 bg-hero-bg text-5xl italic font-normal 
							leading-[116.667%] -tracking-[0.02em]'>
								language
							</span>{" "}
							tutors
						</h1>
						<p
							className='text-gray-900 text-base not-italic font-normal leading-[137.5%] 
						-tracking-[0.07em] mb-[61px]'>
							Embark on an Exciting Language Journey with Expert Language
							Tutors: Elevate your language proficiency to new heights by
							connecting with highly qualified and experienced tutors.
						</p>
						<button
							className='flex justify-center items-center py-4 px-[88px]
						text-gray-900 text-lg not-italic font-bold leading-7 bg-hero-btn
						hover:bg-hero-btn-hover rounded-xl transition-all 
					duration-300 ease-in-out hv:cursor-pointer'>
							Get started
						</button>
					</div>
					<div
						className='bg-hero-bg    rounded-[30px] relative flex justify-center
						items-center    flex-1'>
						<div>
							<Image
								src='/hero.png'
								alt='hero'
								width={339}
								height={339}
							/>
						</div>
						<div
							className='absolute w-[64%] h-[33%] rounded-t  left-[50%] 
            translate-x-[-50%] bg-gradient-to-b from-gradient-color-1 
						to-gradient-color-2 bottom-0 flex items-center justify-center'>
							<AppleIcon
								firstGradient={heroBG}
								secondGradient={secondIconColor}
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
