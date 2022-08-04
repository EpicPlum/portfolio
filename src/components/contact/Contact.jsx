import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' target='_blank'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>willem.kupec@gmail.com</h5>
            <a href="mailto:willem.kupec@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+4915239526820</h5>
            <a href="https://wa.me/4915239526820" target="_blank">Send a message</a>
          </article>
        </div>
        
      </div>
    </section>
  )
}

export default Contact