import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from "./components/Resume";
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage'

function App() {

  return (
    <div>
      <BrowserRouter>
         {/* <Navbar/> */}
         <Routes>
             {/* </Routes><Route path='/' element={<Landingpage/>}/> */}
             <Route path='/' element={<Landingpage/>}>

                 {/* <Route path="" element={<Home/>}/> */}
                 <Route index element={<Home/>}/>
                 <Route path='skills' element={<Skills/>}/>
                 <Route path='resume' element={<Resume/>}/>
                 <Route path='about' element={<About/>}/>
            </Route>

         </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
