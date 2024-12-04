import { FC } from 'react'
import {  ItitleText } from '../../utils/types'

const TitleText: FC<ItitleText> = ({ text, size, fontWeight, className }) => {
    return (
        <>
            <p className={`title-text ${className} text-white text-${size ? size : '3xl'} font-${fontWeight ? fontWeight : 'bold'}  capitalize`}>{text}</p>
        </>
    )
}

export default TitleText