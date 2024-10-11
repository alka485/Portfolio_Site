/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <a href="/" className='logo'>A<span>LK</span>A</a>
      <nav className='navbar'>
        <Link to="/" className='active'>Portfolio</Link>
        <a href="#">Projects</a>
        <a href="#">Education</a>
        <Link to="/about">About Me</Link>
      </nav>
      <Link to="/contact" className='contact'>Contact Me</Link>
    </div>
  )
}

export default Header

