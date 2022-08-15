import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/metalink_photo.JPG'
import IMG2 from '../../assets/wegreen_title.jpg'
import IMG3 from '../../assets/wegreen_tomate.jpg'
import IMG4 from '../../assets/wegreen_messfunktion_2.jpg'
import IMG5 from '../../assets/wegreen_messfunktion.jpg'
import IMG6 from '../../assets/beastball_1.JPG'
import IMG7 from '../../assets/beastball_2.JPG'
import IMG8 from '../../assets/beastball_3.JPG'
import IMG9 from '../../assets/beastball_4.JPG'
import IMG10 from '../../assets/collapse1.JPG'
import IMG11 from '../../assets/collapse2.JPG'
import IMG12 from '../../assets/collapse5.JPG'
import IMG13 from '../../assets/collapse9.JPG'

const data = [
  {
    id: 1,
    image_single: IMG1,
    title: "Meta.link",
    github: 'https://www.meta.link/',
    link_name: "N/A, company property",
    p1:"Briefly, I interned for a startup aiming to improve the existing landscape of online scholarly research. To do this, they intended to create a site that uses a graph-based data system and research validated by both users and experts. I was tasked with developing the prototype of the frontend for this so-called \"knowledge graph\". Initially the aim was to create a UI with multiple layers that simultaneously works in VR and conventional browsers using A-Frame, but this was deemed uneccessary later on, thus I transitioned all the code to next.js for a 2D-only approach.",
    p2:"As seen above, the prototype is composed of individual cards that correlate to a type of digital media, be it video, audio, or  text. These cards are then linked in a chain of research, essentially, helping the user track all the sources that they've viewed thus far. The pieces of media are categorized based on generated tags to create this chain. (the history of the chain can be viewed in the top left of the example) I was unable to fully develop the \"tag\" and \"history\" features as my internship ended before I had the chance to, so those shown are purely visual."
  },
  {
    id: 2,
    image_1x4_1: IMG2,
    image_1x4_2: IMG3,
    image_1x4_3: IMG4,
    image_1x4_4: IMG5,
    title: "weGreen",
    github: 'https://github.com/LuckyLuke16/WEgreen',
    link_name: "Github, owned by team",
    p1:"My team of four and I wanted to create an app to help amateur plant-owners with limited space; primarily, helping them manage said space for plants, and informing them on basic info regarding houseplants. To reach this goal we created a mobile app within the Unity engine that utilized both the AR Foundation library and custom-made models by our team. Our app essentially allowed the user to place virtual plants on the ground via their phone's camera. The user could then measure the space around the plant, research the plant, take notes about plantcare, or track watering cycles with a provided calendar.",
    p2:"I personally developed the function to measure the plants real-time and the \"encyclopedia\" page, which provided vital info about the plant species (both seen above). The encyclopedia was composed of standard UI elements and a touchscreen scrollbar, thus wasn't very complex. The measuring function however, was made using a C# script that went through every mesh of the plant model and created a cube using the found boundaries of said meshes. The units of size within Unity were then converted to meters and displayed with the cube. The app was purely a proof-of-concept, so there are only 3 sample plants we used for the models and encyclopedia. (the tomato plant and apple tree can be seen above)"
  },
  {
    id: 3,
    image_2x2_1: IMG6,
    image_2x2_2: IMG7,
    image_2x2_3: IMG8,
    image_2x2_4: IMG9,
    title: "Beastball",
    github: 'https://github.com/EpicPlum/Beastball',
    link_name: "Github",
    p1:"Beastball was my first endeavor creating a 3D game within Unity. It was essentially the project I conceived of to teach myself the basics of 3D game programming. It took me about two months to build, and plays similarly to old arcade shoot-em-ups. The textures and meshes are all very crude, as I don't have a strong artistic background, but I tried my best within GIMP.",
    p2:"As time passes different waves of animals spawn in before you. Dogs, pigs and cheetahs, each with their own attributes. Specifically, speed and  weight. These attributes and different animal types were added to the game to add variability to the experience. Additionally, they have a programmed AI \"pursuit\" system, in which they chase the player. This adds difficulty and a slight bit of tension. You can shoot blue balls by clicking, and your goal is to keep bouncing balls at them to keep them away. If they pass the bright red line, then you lose. Points are awarded based on the time that passes, and the game gets exponentially difficult as you play, similar to classic shooters like Galaga."
  },
  {
    id: 4,
    image_2x2_1: IMG10,
    image_2x2_2: IMG11,
    image_2x2_3: IMG12,
    image_2x2_4: IMG13,
    title: "Collapse",
    github: 'https://github.com/EpicPlum/Collapse',
    link_name: "Github",
    p1:"Collapse served as my introduction to Unity and C# programming. I had an idea for a puzzle platformer and turned said idea into a game to teach myself the fundamentals of Unity. I made a couple basic menus, a few core UI elements, and 15 levels to play through. Let it be noted, that at the time I had little to no experience with digital art, thus all of the assets are very rudimentary, and some are even rough on the eyes. (sorry about the background and timer)",
    p2:"The mechanics of the game are quite simple, use the arrow keys to traverse the given level to the green square. There's three things to watch out for though, you have to reach the end before time runs out, you lose if you go off the edge, and you MUST touch every square in the level. This makes for a game that rewards muscle memory and rapid, calculated decisions. Additionally, blue and red squares are introduced later on, which have to be stepped on two and three times respectively. This adds a bit of difficulty and makes for a simple, but fun game."
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image_single, image_1x4_1, image_1x4_2, image_1x4_3, image_1x4_4, image_2x2_1, image_2x2_2, image_2x2_3, image_2x2_4, title, github, p1, p2, link_name}) => {
            return (
            <article className='portfolio__item'>
              <h3>{title}</h3>
              <div className='portfolio__item-image_1x4'>
                  <img src={image_1x4_1} alt=""/>
                  <img src={image_1x4_2} alt=""/>
                  <img src={image_1x4_3} alt=""/>
                  <img src={image_1x4_4} alt=""/>
              </div>
              <div className='portfolio__item-image_2x2'>
                  <img src={image_2x2_1} alt=""/>
                  <img src={image_2x2_2} alt=""/>
                  <img src={image_2x2_3} alt=""/>
                  <img src={image_2x2_4} alt=""/>
              </div>
              <div className='portfolio__item-image_single'>
                <img src={image_single} alt=""/>
              </div>
              <p>{p1}</p>
              <br />
              <p>{p2}</p>
              <div className="portfolio__item-cta">
                <h3>Repo Link:</h3>
                <a href={github} className='btn' target='_blank' rel="noreferrer">{link_name}</a>
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