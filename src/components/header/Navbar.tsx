import React from 'react'
import Logo from '../logo'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import { usePositionScroll } from '../../hooks'


const Navbar: React.FC = () => {
    
    // scrollPosition = usePositionScroll()
    // bg-[rgba(0,0,0,0.4)]

    return (
        <>
            <nav className=" sticky top-0 z-20 mx-auto flex w-full items-center justify-between mb-8">
                <Link to='/'>
                    <Logo width='2.5rem' height='3rem' />
                </Link>
                <NavLinks />
            </nav>
        </>
    )
}

export default Navbar