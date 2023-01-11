import React from 'react'
import './footer.css'
import {FaFacebookF } from 'react-icons/fa'
import {FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter } from 'react-icons/io'


const Footer = () =>{
    return(
       <footer>
        <a href="#" className='footer_logo'></a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#'>Home</a></li>
        </ul>

        <div className='footer_socials'>
            <a href='http://facebook.com'><FaFacebookF/></a>
            <a href='http://instagram.com'><FiInstagram/></a>
            <a href='http://twitter.com'><IoLogoTwitter/></a>
        </div>
       </footer>
    )
}

export default Footer