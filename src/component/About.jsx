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
        {/* <h3>FullStack<span>Developer</span></h3> */}
        <p> I take pride in my keen attention to detail, ensuring my work is pixel-perfect. I am excited to bring my skills and experience to help businesses achieve their goals by creating a compelling and strong online presence</p>
        <a href="/projects" className='btn-2'>Experience</a>
      </div>
    </div>
  )
}

export default About