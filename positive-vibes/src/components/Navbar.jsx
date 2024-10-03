import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='nav'>
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'nav__link active-nav' : 'nav__link'
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              Home
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'nav__link active-nav' : 'nav__link'
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              About Me
            </NavLink>
          </li>
          {/* Add the Services page to the navbar */}
          <li className='nav__item'>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive ? 'nav__link active-nav' : 'nav__link'
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
