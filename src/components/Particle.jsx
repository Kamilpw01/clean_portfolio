import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function Particle() {
   async function loadParticles(main) {
      await loadFull(main)
   }
   return (
      <Particles
         id='tsparticles'
         init={loadParticles}
         options={{
            "fullScreen": {
               "enable": true,
               "zIndex": 0
            },
            "particles": {
               "number": {
                  "value": 80,
                  "density": {
                     "enable": true,
                     "value_area": 236
                  }
               },
               "color": {
                  "value": "#000"
               },
               "shape": {
                  "type": "circle"
               },
               "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                     "enable": false,
                     "speed": 2,
                     "opacity_min": 0.1,
                     "sync": false
                  }
               },
               "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                     "enable": false,
                     "speed": 40,
                     "size_min": 0.1,
                     "sync": false
                  }
               },
               "rotate": {
                  "value": 0,
                  "random": true,
                  "direction": "clockwise",
                  "animation": {
                     "enable": true,
                     "speed": 5,
                     "sync": false
                  }
               },
               "line_linked": {
                  "enable": false,
                  "distance": 40,
                  "color": "#000",
                  "opacity": 1,
                  "width": 0.5
               },
               "move": {
                  "enable": true,
                  "speed": 0.5,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                     "enable": false,
                     "rotateX": 3000,
                     "rotateY": 3000
                  }
               }
            },
            "interactivity": {
               "events": {
                  "onhover": {
                     "enable": true,
                     "mode": ["grab"]
                  },
                  "onclick": {
                     "enable": false,
                     "mode": "push"
                  },
                  "resize": true
               },
               "modes": {
                  "grab": {
                     "distance": 200,
                     "line_linked": {
                        "opacity": 1
                     }
                  },
                  "bubble": {
                     "distance": 200,
                     "size": 80,
                     "duration": 0.4,
                     "opacity": 8,
                     "speed": 3
                  },
                  "repulse": {
                     "distance": 200
                  },
                  "push": {
                     "particles_nb": 4
                  },
                  "remove": {
                     "particles_nb": 2
                  }
               }
            },
            "retina_detect": false,
            "background": {
               "color": "#EAEAEE",
               "image": "",
               "position": "50% 50%",
               "repeat": "no-repeat",
               "size": "cover"
            }
         }}

      />

   )
}

export default Particle