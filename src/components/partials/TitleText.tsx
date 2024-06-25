import React, { FC } from 'react'
import {  ItitleText } from '../../utils/types'

const TitleText: FC<ItitleText> = ({ text, size, fontWeight }) => {
    return (
        <>
            <p className={`text-white text-${size ? size : '3xl'} font-${fontWeight ? fontWeight : 'bold'}  capitalize`}>{text}</p>
        </>
    )
}

export default TitleText