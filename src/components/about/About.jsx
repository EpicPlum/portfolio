import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img id="about__me__img" src={ME} alt=""></img>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <h5>
                Hi, I'm Will. I'm a Computer Science Student and aspiring programmer studying at HTW Berlin. I specialize in digital media programming and frontend development, but have plenty of experience in other areas of coding as well. If you're interested in hiring me, or just want to talk, please feel free to send me a message through any of my socials. Thanks :)
              </h5>
            </article>
          </div>

          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About