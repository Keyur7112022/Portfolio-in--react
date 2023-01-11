import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/download.jfif'
import HeaderSocial from './HeaderSocials'

const Header = () =>{
    return(
       <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Keyur Jayswal</h1>
            <h5 className="test-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
            <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll_down'>Scrol down</a>
        </div> 
       </header>
 
    )
}

export default Header