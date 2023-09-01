import React, { useRef, useEffect, useState } from 'react'
import './Contact.css'
import Computer from './Computer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Contact = () => {

   const proCoRef = useRef(null);
   const [succes, setSuccess] = useState(null)

   useEffect(() => {
      const proCoElement = proCoRef.current;
      let tl = gsap.timeline({
         // Your animation properties here
         scrollTrigger: {
            trigger: proCoElement,
            start: '10% center',
            end: '50% center',
            scrub: true,
            markers: false,

         }
      });
      tl.to(proCoElement, {
         opacity: 1,
         x: -500,
         duration: 0.5
      })
   })


   const ref = useRef();

   const handleSubmit = e => {
      e.preventDefault()

      emailjs.sendForm('service_mbj4tvw', 'template_tiyn2ll', ref.current, 'mESv9YDwlra-9nIN8')
         .then((result) => {
            console.log(result.text);
            setSuccess(true)
         }, (error) => {
            console.log(error.text);
            setSuccess(false)
         });
   }
   return (
      <div className='contact' id="contact" >
         <div className='polygon6'></div>
         <div className='conLeft'>
            <div className='conModel'>
               <Canvas>
                  <Computer />
                  <OrbitControls enableZoom={false} autoRotate />
                  <directionalLight intensity={5} position={[3, 3, -5]} />

               </Canvas>
            </div>
         </div>
         <div className='conRight' ref={proCoRef} >
            <div className='conTitle'>Get in Touch</div>
            <form action="POST" onSubmit={handleSubmit} ref={ref}>
               <input className='conInput' type='text' placeholder="Name" name="name" />
               <input className='conInput' type='text' placeholder="Email" name="email" />
               <textarea
                  className='conInput'
                  placeholder="Write your message"
                  name="message"
                  rows={4}
               />
               <button className='conButton' type="submit">Send</button>
               <p>{succes && "Your message has been sent :)"}</p>
            </form>
         </div>
      </div >
   )
}

export default Contact