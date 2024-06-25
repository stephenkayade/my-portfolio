import React, { FC } from 'react'
import { AboutTimelines } from '../mocks'
import { IAboutTimeLine } from '../../utils/types'

const TimeLine: FC<IAboutTimeLine> = ({ data }) => {
    return (
        <>
            <div className="timeline">

                {
                    data.map((timeline) => (

                        <div className="checkpoint">

                            <div className=''>
                                <div className='flex items-center justify-between pb-3'>
                                    <h2 className={`flex ${timeline.text ? 'items-end' : 'items-center'} -mt-1.5`}>
                                        <span className="text-white text-lg capitalize pr-2">{timeline.title}</span>

                                        {
                                            timeline.icon &&
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                fill="#e1e1e1"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d={`${timeline.icon}`} />
                                            </svg>

                                        }

                                        {
                                            timeline.text &&
                                            <span className="text-white text-sm font-extralight capitalize pb-[3px]">{timeline.text}</span>

                                        }

                                    </h2>

                                    <a href={`${timeline.link}`} target='_blank' className='flex items-center -mt-1.5 font-light capitalize'>
                                        {
                                            timeline.linkIcon &&
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                            </svg>
                                        }
                                        <span className='underline text-white font-light capitalize pl-2'>{timeline.linkText}</span>
                                    </a>
                                </div>
                                <p className='text-slate-300 text-[15px] font-extralight leading-loose tracking-wide'>
                                    {timeline.desc}
                                </p>
                            </div>

                        </div>

                    ))
                }

            </div>
        </>
    )
}

export default TimeLine