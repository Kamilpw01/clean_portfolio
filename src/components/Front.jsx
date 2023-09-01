import React from 'react'
import './Front.css'
import Particle from './Particle'



const Front = () => {
   return (

      <div className='frontContainer' id="front">
         <Particle />


         <div className='frontSection'>
            <div className='frontTitle'>
               Hi, I'm Kamil
            </div>
            <div className='frontDesc'>
               "Practice Makes Perfect"
            </div>
         </div>
      </div >
   )
}

export default Front