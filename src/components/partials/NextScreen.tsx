import React, { FC } from 'react'
import { INextScreenText } from '../../utils/types'
import { Link } from 'react-router-dom'

const NextScreenButton: FC<INextScreenText> = ({ text, link }) => {
    return (
        <>
            <Link to={`${link}`} className='text-white/80 font-light flex items-center'>
                <span className='pr-4 hover:underline transition-all duration-500 ease-in-out text-sm capitalize'>{text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 next-arrow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </Link>
        </>
    )
}

export default NextScreenButton