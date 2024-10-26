/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/personal.jpg'
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiJqueryLogo,
} from "react-icons/di";
const About = () => {
  return (
    <div className='about'>
      <div className="about-icons">
       <button className='icon-button'>Css<DiCss3/></button>
       <button className='icon-button'>JavaScript<DiJavascript1/></button>
       <button className='icon-button'>Html<DiHtml5/></button>
       <button className='icon-button'>React<DiReact/></button>
       {/* <button className='btn-1'>jQuery<DiReact/></button> */}

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