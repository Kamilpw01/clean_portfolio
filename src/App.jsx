import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Front from './components/Front'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'



function App() {



  return (
    <BrowserRouter>

      <div className='Container'>
        <Navbar />
        <Front />
        <Projects />
        <Interests />
        <Contact />

      </div>
    </BrowserRouter>
  )


}

export default App
