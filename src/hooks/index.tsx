import { useEffect, useState } from 'react'

export const usePositionScroll = () => {

    const [scrollPosition, setScrollPosition] = useState<number>(0)

    useEffect(() => {

        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => {
            window.removeEventListener('scroll', updatePosition)
        }

    }, [])

    return scrollPosition 
}


