import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div style={{display:"flex", gap:"10px"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/skills">Skills</Link>

        </div>
    )
}
export default Navbar