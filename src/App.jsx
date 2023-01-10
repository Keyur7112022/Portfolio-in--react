import React  from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Experince from './components/expirence/Experince'
import Testemonail from './components/Testemonails/Testemonails'

const App =() =>{
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Footer/>
            <Portfolio/>
            <Services/>
            <Contact/>
            <Experince/>
            <Testemonail/>
            </>
        
    )
} 
export default App