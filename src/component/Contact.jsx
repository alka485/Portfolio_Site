/* eslint-disable no-unused-vars */
import React from 'react'

const Contact = () => {
  return (
    <div className='contact-form'>
        <h2 className='contact-me'>Contact <span>Me</span></h2>
        <form action="#">
            <div className="input-box">
                <input type="text" placeholder='FullName'/>
                <input type="email" placeholder='Email' />
            </div>
            <div className="input-box">
                <input type="number" placeholder='PhoneNumber' />
                <input type="text" placeholder='Subject'/>
            </div>
            <textarea name="" id="" rows='10' cols='30' placeholder='Your Message'></textarea>
            <input type="submit" value='Send Message' className='btn-1' />
        </form>
    </div>
  )
}

export default Contact