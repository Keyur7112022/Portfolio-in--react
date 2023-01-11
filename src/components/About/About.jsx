import React from 'react'
import './about.css'
import ME from '../../assets/1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () =>{
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className='about_me-image'>
                        <img src={ME} alt="About Image"/>
                    </div>

                </div>
                <div className="about_content">
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>1 Years Working</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                        <h5>Project</h5>
                        <small>80+ Completed </small>
                        </article> 

                    </div>
                    <p>
                       Full-stack technology refers to the entire depth of a computer system application, 
                       and full stack web developers are those who are capable of developing both the front 
                       end and the back end of web development. All of the features that are visible to the client, 
                       or the viewer of the site, are included in the front end.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About