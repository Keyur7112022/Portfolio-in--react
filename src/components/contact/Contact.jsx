import React from 'react'
import   './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () =>{
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>keyurnjaswal@gmail.com</h5>
                        <a href='mailto:keyurnjaswal@gmail.com' target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerFill className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Testing</h5>
                        <a href='https://m.me/xyz.achiever' target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+91123456789</h5>
                        <a href='http://api.whatsapp.com/send?phone=123456789' target="_blank">Send a message</a>
                    </article>
                   
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button type='Submit' className='btn btn-primary'>Send Message</button>
                    </form> 
            </div>
        </section>
    )
}

export default Contact