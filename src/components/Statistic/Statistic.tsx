import React from 'react'

type StatisticProps = {}

const Statistic: React.FC<StatisticProps> = () => {
    return (
        <div className="rounded-[30px] border-dashed border-[1.5px] border-hero-btn w-full py-5 sm:pt-10 sm:pb-11">
            <ul className="flex md:gap-5 min-[900px]:gap-8 min-[1190px]:gap-12 min-[1340px]:gap-[100px] items-center justify-around md:justify-center text-center">
                <li className="flex  flex-col md:flex-row gap-2 min-[900px]:gap-4 justify-center items-center ">
                    <span className="text-gray-900 text-base min-[810px]:text-xl min-[1070px]:text-3xl not-italic font-medium leading-[114.286%] -tracking-[0.02em]">
                        32,000 +
                    </span>
                    <span className="max-w-[60px] md:max-w-[96px] text-xs min-[810px]:text-sm not-italic font-normal text-stats-color leading-[128.571%] -tracking-[0.02em]">
                        Experienced tutors
                    </span>
                </li>
                <li className="flex flex-col md:flex-row gap-2 min-[900px]:gap-4 justify-center items-center ">
                    <span className="text-gray-900 text-base min-[810px]:text-xl min-[1070px]:text-3xl not-italic font-medium leading-[114.286%] -tracking-[0.02em]">
                        300,000 +
                    </span>
                    <span className="max-w-[60px] md:max-w-[96px] text-xs min-[810px]:text-sm not-italic font-normal text-stats-color leading-[128.571%] -tracking-[0.02em]">
                        5-star tutor reviews
                    </span>
                </li>
                <li className="flex flex-col md:flex-row gap-2 min-[900px]:gap-4 justify-center items-center ">
                    <span className="text-gray-900 text-base min-[810px]:text-xl min-[1070px]:text-3xl not-italic font-medium leading-[114.286%] -tracking-[0.02em]">
                        120 +
                    </span>
                    <span className="max-w-[60px] md:max-w-[74px] text-xs min-[810px]:text-sm not-italic font-normal text-stats-color leading-[128.571%] -tracking-[0.02em]">
                        Subjects taught
                    </span>
                </li>
                <li className="flex flex-col md:flex-row gap-2 min-[900px]:gap-4 justify-center items-center ">
                    <span className="text-gray-900 text-base min-[810px]:text-xl min-[1070px]:text-3xl not-italic font-medium leading-[114.286%] -tracking-[0.02em]">
                        200 +
                    </span>
                    <span className="max-w-[60px] md:max-w-[74px] text-xs min-[810px]:text-sm not-italic font-normal text-stats-color leading-[128.571%] -tracking-[0.02em]">
                        Tutor nationalities
                    </span>
                </li>
            </ul>
        </div>
    )
}
export default Statistic
