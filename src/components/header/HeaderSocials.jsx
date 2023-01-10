import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="http://linkdin.com" target="_blank"><FaLinkedinIn/> </a>
        <a href="http://github.com" target="_blank"><FaGithub/></a>
        <a href="http://dribbble.com" target="_blank"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocial