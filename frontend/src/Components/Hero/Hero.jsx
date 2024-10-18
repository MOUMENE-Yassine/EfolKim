import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <img src={hero_image} alt='' />
        </div>
        <div className='hero-right'>
            <h2>So What's New?</h2>
            <div>
                <div>
                    <p>From leather travel bags to straw beach bags, explore the latest.</p>
                </div>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
            </div>
        </div>
    </div>
  )
}

export default Hero
