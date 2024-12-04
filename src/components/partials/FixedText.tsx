import { FC } from 'react'
import {  IFixedText } from '../../utils/types'

const FixedText: FC<IFixedText> = ({ text, size, fontWeight, position }) => {
    return (
        <>
            <p aria-hidden='true' className={`fixed-text font-${fontWeight ? fontWeight : 'bold'} ${position === 'fixed' ? 'fixed bottom-20 -left-12' : ''}  capitalize`}>{text}</p>
        </>
    )
}

export default FixedText