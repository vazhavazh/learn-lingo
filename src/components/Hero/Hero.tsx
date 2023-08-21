import React from 'react'
import AppleIcon from '@/components/UI/Icon/AppleIcon'
import Image from 'next/legacy/image'
import config from '../../../tailwind.config'
import Link from 'next/link'
type HeroProps = {}

const Hero: React.FC<HeroProps> = () => {
    const heroBG = config.theme?.extend?.colors['hero-bg']
    const secondIconColor = config.theme?.extend?.colors['second-icon-color']

    return (
        <div className="flex justify-center gap-2 m680:gap-6 mb-6">
            <div className="py-2 min-[394px]:py-6  xl:py-[98px] px-2 min-[476px]:pr-[27px] lg:pr-[108px] min-[476px]:pl-[16px] lg:pl-[64px] bg-gray-100 rounded-[30px] max-h-[530px] max-w-[720px] flex-1 flex-shrink">
                <h1
                    className="text-gray-900 text-[12px] min-[394px]:text-xl m680:text-3xl md:text-5xl  not-italic font-medium leading-[116.667%] 
						-tracking-[0.02em] mb-4 m680:mb-[32px]"
                >
                    Unlock your potential with the best{' '}
                    <span
                        className="text-gray-900 bg-hero-bg text-[12px] min-[394px]:text-xl 
                        m680:text-3xl md:text-5xl italic font-normal 
							leading-[116.667%] -tracking-[0.02em]"
                    >
                        language
                    </span>{' '}
                    tutors
                </h1>
                <p
                    className="text-gray-900 text-[10px] min-[448px]:text-sm m680:text-base  
                    not-italic font-normal leading-[137.5%] 
						-tracking-[0.07em] mb-4 md:mb-[64px]"
                >
                    Embark on an Exciting Language Journey with Expert Language
                    Tutors: Elevate your language proficiency to new heights by
                    connecting with highly qualified and experienced tutors.
                </p>
                <Link
                    href="/teachers"
                    className="flex justify-center items-center py-1 min-[480px]:py-4 px-8  m680:px-[88px]
						text-gray-900 text-sm  min-[394px]:text-lg not-italic font-bold leading-7 bg-hero-btn
						hover:bg-hero-btn-hover rounded-xl transition-all 
					duration-300 ease-in-out hv:cursor-pointer"
                >
                    Get started
                </Link>
            </div>

            <div
                className="bg-hero-bg   rounded-[30px] flex flex-col 
                items-center justify-end px-4  
            desktop1160:px-[104px] flex-shrink flex-1 max-w-[568px] overflow-hidden"
            >
                <div className="">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        width={339}
                        height={339}
                    />
                </div>

                <div
                    className="relative rounded-t bg-gradient-to-b from-gradient-color-1 to-gradient-color-2 
                w-full flex items-center justify-center  max-h-[176px] 
                py-2 h-full mt-[-30px] m420:mt-[-40px] m520:mt-[-45px] 
                m600:mt-[-55px] m680:mt-[-60px] min-[780px]:mt-[-70px]"
                >
                    {' '}
                    <AppleIcon
                        firstGradient={heroBG}
                        secondGradient={secondIconColor}
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero
