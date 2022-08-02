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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis perspiciatis aperiam, minus neque repellendus minima rerum modi autem sed, alias libero quis iusto voluptate commodi dolores saepe laborum maiores provident.
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