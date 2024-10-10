/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/personal.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-img">
        <img src= {image} alt="image" />
      </div>
      <div className="about-content">
        <h2 className="heading">About<span>Me</span></h2>
        <h3>FullStack<span>Developer</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis incidunt repellat placeat, exercitationem dolores laborum debitis alias repellendus porro soluta?</p>
        <a href="#" className='btn-2'>Experience</a>
      </div>
    </div>
  )
}

export default About