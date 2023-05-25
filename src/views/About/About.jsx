import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/erick.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>Sobre mim</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Prazer, eu sou o Erick</h2>
        <p>Prazer, meu nome é Erick Raimundo e eu sou um designer junior, meus hobbies são jogar RPGs de mesa com meus amigos, criar personagens e ficar com a familia.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
