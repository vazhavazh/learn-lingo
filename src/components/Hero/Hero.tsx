import React from 'react'
import AppleIcon from '@/components/UI/Icon/AppleIcon'
import Image from 'next/legacy/image'
import config from '../../../tailwind.config'
type HeroProps = {}

const Hero: React.FC<HeroProps> = () => {
    const heroBG = config.theme?.extend?.colors['hero-bg']
    const secondIconColor = config.theme?.extend?.colors['second-icon-color']

    return (
        <div className="flex gap-2 m680:gap-6 mb-6">
            <div className="py-2 min-[394px]:py-6  xl:py-[98px] px-2 min-[476px]:pr-[27px] lg:pr-[108px] min-[476px]:pl-[16px] lg:pl-[64px] bg-gray-100 rounded-[30px] max-h-[530px] max-w-[720px] flex-1 flex-shrink">
                <h1
                    className="text-gray-900 text-[12px] min-[394px]:text-xl m680:text-3xl md:text-5xl  not-italic font-medium leading-[116.667%] 
						-tracking-[0.02em] mb-4 m680:mb-[32px]"
                >
                    Unlock your potential with the best{' '}
                    <span
                        className="text-gray-900 bg-hero-bg text-[12px] min-[394px]:text-xl m680:text-3xl md:text-5xl italic font-normal 
							leading-[116.667%] -tracking-[0.02em]"
                    >
                        language
                    </span>{' '}
                    tutors
                </h1>
                <p
                    className="text-gray-900 text-[10px] min-[448px]:text-sm m680:text-base  not-italic font-normal leading-[137.5%] 
						-tracking-[0.07em] mb-4 md:mb-[64px] "
                >
                    Embark on an Exciting Language Journey with Expert Language
                    Tutors: Elevate your language proficiency to new heights by
                    connecting with highly qualified and experienced tutors.
                </p>
                <button
                    className="flex justify-center items-center py-1 min-[480px]:py-4 px-8  m680:px-[88px]
						text-gray-900 text-sm  min-[394px]:text-lg not-italic font-bold leading-7 bg-hero-btn
						hover:bg-hero-btn-hover rounded-xl transition-all 
					duration-300 ease-in-out hv:cursor-pointer"
                >
                    Get started
                </button>
            </div>
            <div className="flex items-end pb-[136px]  lg:pb-[190px] lg:min-h-[530px] overflow-hidden justify-center bg-hero-bg   rounded-[30px]  flex-1 flex-shrink">
                <div className="  relative border-2 border-solid border-red-500 m680:min-w-[240px]  lg:min-w-[339px] min-h-[140px] lg:min-h-[196px] max-h-[140px] lg:max-h-[196px]">
                    {' '}
                    <div className="absolute w-full  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <Image
                            src="/hero.png"
                            alt="hero"
                            width={339}
                            height={339}
                        />
                    </div>
                    <div>
                        <div
                            className="absolute bottom-[-100%]  h-full w-full rounded-t  bg-gradient-to-b from-gradient-color-1 
        						to-gradient-color-2  "
                        >
                            {' '}
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <AppleIcon
                                    firstGradient={heroBG}
                                    secondGradient={secondIconColor}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
