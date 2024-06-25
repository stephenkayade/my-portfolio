import React, { FC } from 'react'
import { IContentHeader } from '../../utils/types'

const ContentHeader: FC<IContentHeader> = ({ size, title, fontWeight }) => {
    return (
        <>
            <p className={`font-${fontWeight ? fontWeight : 'bold'} text-${size ? size : '5xl'}`}>{title}</p>
        </>
    )
}

export default ContentHeader