import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Home from './components/Home'
import Reg from './components/Reg'
import Login from './components/Login'
import './App.css'




function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}>
                  {/* it is nested element(outlet) */}
                <Route index element={<Home/>}/>    
                <Route path="/login" element={<Login/>}/>
                <Route path="/reg" element={<Reg/>}/>
        </Route>
  
      </Routes>

 



      
      </BrowserRouter>
    
    </div>
  )
}

export default App
