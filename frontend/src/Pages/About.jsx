import React from 'react'
import './CSS/About.css'
import about from '../Components/Assets/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} alt='' />
        </div>
            <div className='about-right'>
                <h2>ABOUT US</h2>
                <div>
                    <p>EfolKim was founded with a passion for innovation and a vision to transform online shopping. Our journey began with a simple goal: to create a platform where customers can seamlessly discover, explore, and purchase a wide variety of products from the comfort of their homes.</p>
                    <p>Since our launch, we have been dedicated to curating a diverse selection of high-quality items to suit every style and need. We offer an extensive range of products sourced from reliable brands and suppliers.</p>
                    <b>Our Mission</b>
                    <p>At EfolKim, our mission is to empower customers with choice, convenience, and confidence. We're committed to offering a smooth shopping experience that goes above and beyond, from browsing and purchasing to delivery and beyond.</p>
                </div>
            </div>
    </div>
  )
}

export default About