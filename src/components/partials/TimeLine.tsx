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
                                            <span className="text-white text-sm text-extralight capitalize pb-[3px]">{timeline.title}</span>

                                        }

                                    </h2>
                                    <a href={`${timeline.link}`} target='_blank' className='underline text-white -mt-1.5 font-light capitalize'>{timeline.linkText}</a>
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