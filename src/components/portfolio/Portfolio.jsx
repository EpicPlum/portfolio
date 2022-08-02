import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/metalink_photo.JPG'
//import IMG2 from '../../assets/portfolio1.jpg'
//import IMG3 from '../../assets/portfolio1.jpg'
//import IMG4 from '../../assets/portfolio1.jpg'
//import IMG5 from '../../assets/portfolio1.jpg'
//import IMG6 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Meta.link",
    github: 'https://github.com',
    p1:"Briefly, I interned for a startup aiming to improve the existing landscape of online scholarly research. To do this, they intended to create a site that uses a graph-based data system and research validated by both users and experts. I was tasked with developing the prototype of the frontend for this so-called \"knowledge graph\". Initially the aim was to create a UI with multiple layers that simultaneously works in VR and conventional browsers using A-Frame, but this was deemed uneccessary later on, thus I transitioned all the code to next.js for a 2D-only approach.",
    p2:"As seen above, the prototype is composed of individual cards that correlate to a type of digital media, be it video, audio, or  text. These cards are then linked in a chain of research essentially, helping the user track their research and all the sources that they've viewed thus far. The pieces of digital are categorized based on generated tags to create this chain and the history of the chain can be viewed in the top left of the example. I was unable to fully develop the \"tag\" and \"chain\" features as my internship ended before I had the chance to, so those shown are purely visual."
  },
  {
    id: 2,
    image: "",
    title: "Title2",
    github: 'https://github.com',
    p1:"",
    p2:""
  },
  {
    id: 3,
    image: "",
    title: "Title3",
    github: 'https://github.com',
    p1:"Briefly, I interned for a startup aiming to improve the existing landscape of online scholarly research. To do this, they intended to create a site that uses a graph-based data system and research validated by both users and experts. I was tasked with developing the prototype of the frontend for this so-called \"knowledge graph\". Initially the aim was to create a UI with multiple layers that simultaneously works in VR and conventional browsers using A-Frame, but this was deemed uneccessary later on, thus I transitioned all the code to next.js for a 2D-only approach.",
    p2:"As seen above, the prototype is composed of individual cards that correlate to a type of digital media, be it video, audio, or  text. These cards are then linked in a chain of research essentially, helping the user track their research and all the sources that they've viewed thus far. The pieces of digital are categorized based on generated tags to create this chain and the history of the chain can be viewed in the top left of the example. I was unable to fully develop the \"tag\" and \"chain\" features as my internship ended before I had the chance to, so those shown are purely visual."
  },
  {
    id: 4,
    image: "",
    title: "Title4",
    github: 'https://github.com',
    p1:"Briefly, I interned for a startup aiming to improve the existing landscape of online scholarly research. To do this, they intended to create a site that uses a graph-based data system and research validated by both users and experts. I was tasked with developing the prototype of the frontend for this so-called \"knowledge graph\". Initially the aim was to create a UI with multiple layers that simultaneously works in VR and conventional browsers using A-Frame, but this was deemed uneccessary later on, thus I transitioned all the code to next.js for a 2D-only approach.",
    p2:"As seen above, the prototype is composed of individual cards that correlate to a type of digital media, be it video, audio, or  text. These cards are then linked in a chain of research essentially, helping the user track their research and all the sources that they've viewed thus far. The pieces of digital are categorized based on generated tags to create this chain and the history of the chain can be viewed in the top left of the example. I was unable to fully develop the \"tag\" and \"chain\" features as my internship ended before I had the chance to, so those shown are purely visual."
  },
  {
    id: 5,
    image: "",
    title: "Title5",
    github: 'https://github.com',
    p1:"Briefly, I interned for a startup aiming to improve the existing landscape of online scholarly research. To do this, they intended to create a site that uses a graph-based data system and research validated by both users and experts. I was tasked with developing the prototype of the frontend for this so-called \"knowledge graph\". Initially the aim was to create a UI with multiple layers that simultaneously works in VR and conventional browsers using A-Frame, but this was deemed uneccessary later on, thus I transitioned all the code to next.js for a 2D-only approach.",
    p2:"As seen above, the prototype is composed of individual cards that correlate to a type of digital media, be it video, audio, or  text. These cards are then linked in a chain of research essentially, helping the user track their research and all the sources that they've viewed thus far. The pieces of digital are categorized based on generated tags to create this chain and the history of the chain can be viewed in the top left of the example. I was unable to fully develop the \"tag\" and \"chain\" features as my internship ended before I had the chance to, so those shown are purely visual."
  },
  {
    id: 6,
    image: "",
    title: "Title6",
    github: 'https://github.com',
    p1:"Briefly, I interned for a startup aiming to improve the existing landscape of online scholarly research. To do this, they intended to create a site that uses a graph-based data system and research validated by both users and experts. I was tasked with developing the prototype of the frontend for this so-called \"knowledge graph\". Initially the aim was to create a UI with multiple layers that simultaneously works in VR and conventional browsers using A-Frame, but this was deemed uneccessary later on, thus I transitioned all the code to next.js for a 2D-only approach.",
    p2:"As seen above, the prototype is composed of individual cards that correlate to a type of digital media, be it video, audio, or  text. These cards are then linked in a chain of research essentially, helping the user track their research and all the sources that they've viewed thus far. The pieces of digital are categorized based on generated tags to create this chain and the history of the chain can be viewed in the top left of the example. I was unable to fully develop the \"tag\" and \"chain\" features as my internship ended before I had the chance to, so those shown are purely visual."
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, p1, p2}) => {
            return (
            <article className='portfolio__item'>
              <h3>{title}</h3>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <p>{p1}</p>
              <br />
              <p>{p2}</p>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio