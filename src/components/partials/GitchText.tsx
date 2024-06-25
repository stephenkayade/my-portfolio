import React, { FC } from 'react'
import { IGlitchText } from '../../utils/types'

const GlitchText: FC<IGlitchText> = ({ text }) => {
    return (
        <>
            <p className="text-white text-5xl glitch">
                <span aria-hidden='true'>{text}</span>
                <span aria-hidden='true'>{text}</span>
                <span aria-hidden='true'>{text}</span>
            </p>
        </>
    )
}

export default GlitchText