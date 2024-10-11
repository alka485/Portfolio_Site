/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="social">
            <a href="#">
                <i className='bx bxl-facebook-circle'></i>
            </a>
            <a href="#">
                <i className='bx bxl-linkedin-square' ></i>
            </a>
            <a href="#">
                <i className='bx bxl-twitter' ></i>
            </a>
            <a href="#">
                <i className='bx bxl-instagram-alt' ></i>
            </a>
        </div>
        <ul className="list">
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">About Me</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Privacy</a>
            </li>
        </ul>
    </section>
  )
}

export default Footer