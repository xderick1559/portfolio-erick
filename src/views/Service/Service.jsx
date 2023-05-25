import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Meus serviços</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Desenvolvimento Web" text = "Eu ofereço um vasto conhecimento em linguagens de programação web, como: CSS, JSX, HTML." />
        <ServiceBox animation = "fade-up" icon = "fas fa-pencil" heading = "Design" text = "Conhecimento em Adobe Photoshop e Adobe Illustrator para criação de logo tipos" />
      </div>
    </div>
    </>
  )
}

export default Service
