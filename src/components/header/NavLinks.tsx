import { NavLink } from 'react-router-dom'
import { NavLinkData } from '../mocks'

const NavLinks = () => {

    return (
        <div className=''>
            {
                NavLinkData.map((navlink) => (
                    <NavLink
                        key={navlink.id}
                        to={`/${navlink.link}`}
                        className={`nav-link text-white/80 2xl:text-xl text-base font-light pl-8 inline-flex`}
                    >
                        {navlink.title}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default NavLinks