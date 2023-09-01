import { useState, useRef, useEffect } from 'react'
import React from 'react'
import './Interests.css'
import { gsap } from "gsap";



const rmintTitle = {
   display: 'none',
}


const rmText = {
   display: 'none'

}

const interests = () => {


   const [isOpen1, setIsOpen1] = useState(false)
   const [isOpen2, setIsOpen2] = useState(false)
   const [isOpen3, setIsOpen3] = useState(false)
   const [isOpen4, setIsOpen4] = useState(false)


   const tl1 = useRef()
   const tl2 = useRef()
   const tl3 = useRef()
   const tl4 = useRef()

   const proCoRef1 = useRef(null);
   const proCoRef2 = useRef(null);
   const proCoRef3 = useRef(null);
   const proCoRef4 = useRef(null);

   useEffect(() => {
      const proCoElement = proCoRef1.current;
      tl1.current = gsap.timeline({
         paused: true
      })
      tl1.current.to(proCoElement, {
         opacity: 1,
         duration: 0.7
      })
   }, [])

   useEffect(() => {
      const proCoElement = proCoRef2.current;
      tl2.current = gsap.timeline({
         paused: true
      })
      tl2.current.to(proCoElement, {
         opacity: 1,
         duration: 0.7
      })
   }, [])

   useEffect(() => {
      const proCoElement = proCoRef3.current;
      tl3.current = gsap.timeline({
         paused: true
      })
      tl3.current.to(proCoElement, {
         opacity: 1,
         duration: 0.7
      })
   }, [])

   useEffect(() => {
      const proCoElement = proCoRef4.current;
      tl4.current = gsap.timeline({
         paused: true
      })
      tl4.current.to(proCoElement, {
         opacity: 1,
         duration: 0.7
      })
   }, [])

   useEffect(() => {
      isOpen1 ? tl1.current.play() : tl1.current.reverse()

   }, [isOpen1])
   useEffect(() => {
      isOpen2 ? tl2.current.play() : tl2.current.reverse()

   }, [isOpen2])
   useEffect(() => {
      isOpen3 ? tl3.current.play() : tl3.current.reverse()

   }, [isOpen3])
   useEffect(() => {
      isOpen4 ? tl4.current.play() : tl4.current.reverse()

   }, [isOpen4])






   const handleClick1 = () => {
      setIsOpen2(null)
      setIsOpen1(!isOpen1)
      setIsOpen3(null)
      setIsOpen4(null)
   }
   const handleClick2 = () => {
      setIsOpen2(!isOpen2)
      setIsOpen1(null)
      setIsOpen3(null)
      setIsOpen4(null)
   }
   const handleClick3 = () => {
      setIsOpen2(null)
      setIsOpen1(null)
      setIsOpen3(!isOpen3)
      setIsOpen4(null)
   }
   const handleClick4 = () => {
      setIsOpen2(null)
      setIsOpen1(null)
      setIsOpen3(null)
      setIsOpen4(!isOpen4)
   }




   return (

      <div className='interests' id="interests" >
         <div className='polygon4'></div>




         <div className='intLeft' >
            <div className='intContainer'>

               <div className='intRow'>
                  <div className='intSection'>Web development </div>
                  <i onClick={handleClick1} className="fa-regular fa-plus"></i>
               </div>

               <div className='intRow'>
                  <div className='intSection'>Cyber Security</div>
                  <i onClick={handleClick2} className="fa-regular fa-plus"></i>
               </div>

               <div className='intRow'>
                  <div className='intSection'>Web Design</div>
                  <i onClick={handleClick3} className="fa-regular fa-plus"></i>
               </div>

               <div className='intRow'>
                  <div className='intSection'>Self-development</div>
                  <i onClick={handleClick4} className="fa-regular fa-plus"></i>
               </div>

            </div>

         </div>
         <div className='intRight'>
            <div className='intTitle' style={isOpen1 || isOpen2 || isOpen3 || isOpen4 ? rmintTitle : null}>Interests</div>
            <p className="intDesc" style={isOpen1 ? null : rmText} ref={proCoRef1}>
               I really like creating new websites or web applications because it is a combination of creative and artistic thinking with logical programming. When writing new websites, I use various technologies: React, Vue, Angular or even Next. Here I can also add that I have experience in programming in many less important frameworks, for example: Materialize , bootstrat or sass.</p>

            <p className="intDesc" style={isOpen2 ? null : rmText} ref={proCoRef2}>In addition to creating websites, I like to spend my time learning about new network security. I regularly use Linux, ubuntu and windows server. I often solve various CTFs using sql, php, python or c++. I know the basics of computer networks, I use wireshark and postman</p>

            <p className="intDesc" style={isOpen3 ? null : rmText} ref={proCoRef3}>In addition, when creating websites and web applications, I attach great importance to its styling and overall appearance. When programming, I often use new libraries that allow me to create new animations and various types of models. I use such libraries as Gsap, 3js, Figma or even a simple canva with html. For this I also use Particlejs, Tailwind or Materialize</p>

            <p className="intDesc" style={isOpen4 ? null : rmText} ref={proCoRef4}>I am a 3rd year student at the Warsaw University of Technology at the Faculty of Mechatronics. In addition to developing in the direction of programming, I am active in the student government. I help solve IT problems by acting in the digitization committee. I took part in the organization of the Juwenalia and the fair of scientific circles. In my free time, I like to spend it actively. I often go out for a run and in the winter I go skiing with my friends</p>
         </div>
         <div className='polygon5'></div>
      </div >

   )
}

export default interests