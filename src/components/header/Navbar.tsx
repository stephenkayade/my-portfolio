import React from 'react'
import Logo from '../logo'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import { usePositionScroll } from '../../hooks'


const Navbar: React.FC = () => {

    const scrollPosition = usePositionScroll()

    const scrollTo =  scrollPosition > 150

    return (
        <>
            <nav className={`${scrollTo ? 'bg-[rgba(0,0,0,0.4)] py-4 px-5' : ''} transition-all ease-in-out duration-400 sticky top-0 z-20 mx-auto flex w-full items-center justify-between mb-8`}>
                <Link to='/'>
                    <Logo width='2.5rem' height='3rem' />
                </Link>
                <NavLinks />
            </nav>
        </>
    )
}

export default Navbar