import { NavLink } from 'react-router-dom'
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Layout/ThemeContext';

import { FaBars } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import logo_light from '../../assets/logo-light.svg'
import logo_dark from '../../assets/logo-dark.svg'
import { Gallery } from '../../pages/Gallery';


export const Headers = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <header>
      <div className='container'>
        <nav>
          <NavLink to="/">
            <div className='logo'>
              <img src={theme == 'light' ? logo_light : logo_dark} alt="Pixie Studios Logo"/>
            </div>
          </NavLink>

          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li><NavLink to='/' isactive='active'>Home</NavLink></li>
            <li><NavLink to='/gallery' isactive='active'>Gallery</NavLink></li>
            <li><NavLink to='/product' isactive='active'>Products</NavLink></li>
            <li><NavLink to='/contact' isactive='active'>Contact</NavLink></li>
            <li className={`toggleTheme ${theme}`}>
              <button onClick = {toggleTheme}>
                  {theme === 'light' ? <FaMoon className='moon'/> : <IoSunny className='sun'/>}
              </button>
            </li>
          </ul>

          <div className="icon" onClick={toggleMenu}>
            <FaBars/>
          </div>

        </nav>
      </div>
    </header>
  )
}