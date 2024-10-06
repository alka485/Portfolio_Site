/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/personal.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-content">
            <h3>Hi</h3>
            <h1>I'm<span> Alka Sah</span> a FullStack Web Developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel adipisci doloremque optio, cum ex vero? Consequuntur dolor inventore dolorum!</p>
            <div className="btn-box">
                <button className="btn-1">Hire Me</button>
                <button className='btn-2'>Experience</button>
            </div>
      </div>
      <div className="img-box">
        <img src={image} alt="Alka image" />
      </div>
    </div>
  )
}

export default Home