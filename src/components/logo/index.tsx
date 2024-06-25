import React, { FC } from 'react'
import { ILogo } from '../../utils/types'

const Logo: FC<ILogo> = ({ width, height }) => {
    return (
        <>
            <div className={`logo`} style={{ width: `${width ? width : `2rem`}`, height: `${height ? height : '3rem'}` }}>
                <img src="../../../assets/images/img@logo-pic.webp" alt="" className={`w-full h-full rounded-full`} />
            </div>
        </>
    )
}

export default Logo