import React, { useState, useRef, useEffect } from 'react'
import './Projects.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const textStyles = {
   WebkitLineClamp: 2,
   WebkitBoxOrient: 'vertical',
   overflow: 'hidden',
   display: '-webkit-box',

}
const textStylesShow = {
}

const photoStyles = {
   display: 'none',
}
const contStylesShow = {
   marginTop: 'auto',
   marginBottom: 'auto',

}


const Projects = () => {
   const proCoRef = useRef(null);

   useEffect(() => {
      const proCoElement = proCoRef.current;
      let tl = gsap.timeline({
         // Your animation properties here
         scrollTrigger: {
            trigger: proCoElement,
            start: '10% center',
            end: '80% center',
            scrub: false,
            markers: false,
            toggleActions: 'play reverse play reverse',
         }
      });
      tl.to(proCoElement, {
         opacity: 1,
         x: 300,
         duration: 0.5
      })
   })


   const [isOpen1, setIsOpen1] = useState(false)
   const [isOpen2, setIsOpen2] = useState(false)
   const [isOpen3, setIsOpen3] = useState(false)

   return (

      <div className='projects' id="projects">



         <div className="proContainer" ref={proCoRef}>


            <div className="proTitle">My Projects</div>
            <div className="proExamples">
               <ul className='proUl'>
                  <li className='proLi'   >
                     <div className='proPhoto1' style={isOpen1 ? photoStyles : null}>
                     </div>
                     <div className='proDesc' style={isOpen1 ? contStylesShow : null}>
                        <div className='proName'>
                           SOWA
                        </div>
                        <div className='proText' style={isOpen1 ? textStylesShow : textStyles}>
                           The application responsible for conducting student elections. Working in a multi-person team and using git. The technologies I use are mainly Javascript with frameworks, php and sql. It was my first serious project where I worked with other programmers and learned a lot of practical things

                        </div>
                     </div>
                     <button onClick={() => setIsOpen1(!isOpen1)} className="proSeeMore">{isOpen1 ? 'Read Less' : 'Read More'}</button>


                  </li>
                  <li className='proLi'>
                     <div className='proPhoto2' style={isOpen2 ? photoStyles : null}>
                     </div>
                     <div className='proDesc' style={isOpen2 ? contStylesShow : null}>
                        <div className='proName'>
                           SEARCH BLOG
                        </div>
                        <div className='proText' style={isOpen2 ? textStylesShow : textStyles}>
                           A simple web application that will allow me to search the "Blog" archive. Blog entries are open API - jsonplaceholder. Searching consists in searching for entries by title and displaying them from the longest to the shortest and vice versa. Application created in React with the ability to change the theme depending on the default theme of the computer (light / dark).I used Tailwind to change the theme of the website

                        </div>
                     </div>
                     <button onClick={() => setIsOpen2(!isOpen2)} className="proSeeMore">{isOpen2 ? 'Read Less' : 'Read More'}</button>
                  </li>
                  <li className='proLi'>
                     <div className='proPhoto3' style={isOpen3 ? photoStyles : null}>
                     </div>
                     <div className='proDesc' style={isOpen3 ? contStylesShow : null}>
                        <div className='proName'>
                           FLAPPY BIRD
                        </div>
                        <div className='proText' style={isOpen3 ? textStylesShow : textStyles}>
                           I wrote a famous browser game flappy bird using 3js and react. For the needs of the university, I had to remake it in such a style that the main motif was a horse. The game was used at the polytechnic fair of Student Research Groups. In addition, I was the organizer of the department responsible for digitization at this fair

                        </div>
                     </div>
                     <button onClick={() => setIsOpen3(!isOpen3)} className="proSeeMore">{isOpen3 ? 'Read Less' : 'Read More'}</button>
                  </li>
               </ul>
            </div>

         </div>
      </div>

   )
}

export default Projects