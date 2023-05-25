import React from 'react'
import './Home.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Oi, eu sou o</p>
          <h1>Erick</h1>
          <h2>E eu sou um <span className="typing"></span></h2>
          <a href="https://drive.google.com/file/d/10PTT-kzaFX3hcXw7wCP_6T9dEcPLoPV8/view?usp=share_link" target="_blank" rel="noopener noreferrer">Download Curriculo</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

