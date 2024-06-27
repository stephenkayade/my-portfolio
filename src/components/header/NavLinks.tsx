import React, { MouseEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { NavLinkData } from '../mocks'

const NavLinks = () => {

    const navigate = useNavigate()

    const [active, setActive] = useState<string>('Home')

    const handleClick = (e: MouseEvent<HTMLElement>, val: string, to: string) => {

        setActive(val)

    }

    const option = ({ isActive }: any) => {

        return {
            display: isActive ? 'none' : ''
        }

    }

    return (
        <div className=''>
            {
                NavLinkData.map((navlink) => (
                    <NavLink
                        key={navlink.id}
                        to={`/${navlink.link}`}
                        onClick={(e) => handleClick(e, navlink.title, navlink.link)}
                        className={`nav-link text-white/80 2xl:text-xl text-base font-light pl-8 ${navlink.title === active ? 'hidden' : 'inline-flex'}`}
                        style={option}
                    >
                        {navlink.title}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default NavLinks