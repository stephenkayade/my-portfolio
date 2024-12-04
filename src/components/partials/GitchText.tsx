import { FC } from 'react'
import { IGlitchText } from '../../utils/types'

const GlitchText: FC<IGlitchText> = ({ text }) => {
    return (
        <>
            <p className="text-white text-4xl glitch pb-20 2xl:pb-0 xl:pb-0 md:pb-0 lg:pb-8">
                <span aria-hidden='true'>{text}</span>
                <span aria-hidden='true'>{text}</span>
                <span aria-hidden='true'>{text}</span>
            </p>
        </>
    )
}

export default GlitchText