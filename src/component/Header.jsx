/* eslint-disable no-unused-vars */
import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
      <a href="/" className='logo'>A<span>LK</span>A</a>
      <nav className='navbar'>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Portfolio</Link>
        {/* <a href="/projects">Projects</a> */}
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <a href="#">Education</a>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Me</Link>
      </nav>
      <Link to="/contact" className='contact'>Contact Me</Link>
    </div>
  )
}

export default Header

