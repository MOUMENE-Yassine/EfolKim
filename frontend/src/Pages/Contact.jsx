import React from 'react'
import './CSS/Contact.css'
import contact from '../Components/Assets/contact-us.png'

const Contact = () => {
  return (
    <div className='contact-section-title'>
        <div className='contact-section'>
            <h2>CONTACT <span>US</span></h2>
        </div>
        <div className='contact-container'>
            <div className='contact-image'>
                <img src={contact} alt="" />
            </div>
            <div className='contact-info'>
                <h3>Our Store</h3>
                <p>BOLVARD ABDELKARIM KHATABI <br /> app 15, MARRAKECH</p>
                <p>Tel: (121) 70559632 <br /> Email: admin@EfolKim.com</p>
                <h3>Careers at EfolKim</h3>
                <p>Learn more about our teams and job openings.</p>
                <button>Explore Jobs</button>
            </div>
        </div>
    </div>
  )
}

export default Contact