import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-row'>
        <div className='footer-left'>
            <h1>EfolKim</h1>
            <p>Discover our curated collection of high-quality bags for men and women.</p>
            <p>Stylish, functional, and crafted with care, designed to complement your</p>
            <p>everyday look.</p>
        </div>
        <div className='footer-right'>
            <h1>COMPANY</h1>
            <ul>
                <li>HOME</li>
                <li>Delivery</li>
                <li>Offices</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="contact">
            <h1>LETS CONNECT</h1>
            <div className="footer-social-icons">
                <div className="footer-icons-container"><img src={instagram_icon} alt='' /></div>
                <div className="footer-icons-container"><img src={pinterest_icon} alt='' /></div>
                <div className="footer-icons-container"><img src={whatsapp_icon} alt='' /></div>
            </div>
        </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
