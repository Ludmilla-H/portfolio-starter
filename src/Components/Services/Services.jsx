import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'
import CvHarnaisLudmilla from './CvHarnaisLudmilla.pdf'

const Services = () => {
  return (
<div className="services" id="Services">
    {/* Left side */}
    <div className="awesome">
        <span>Mes</span>
        <span>Services</span>

        <span> Voici les services que j'effectue et dans lesquelles je me forme. 
            <br/>
            
        </span>
        <a href={CvHarnaisLudmilla} download>
        <button className="button s-button">Telécharger mon CV</button>
        </a>
        <div className="blur s-blur1" style={{background : '#abf1ff94'}}></div>

    </div>

    {/* right side */}
    <div className="cards">

        {/* first card */}
        <div style={{left : "14rem"}}>
            <Card 
            emoji = {HeartEmoji}
            heading = {"Design"}
            detail = {"Figma : faire les visuels des applications mobile et des sites web / Canva"}
            />
        </div>

        {/* second card */}
        <div style={{top : "12rem" , left : "-4rem"}}>
            <Card 
            emoji = {Glasses}
            heading = {"Developper"}
            detail = {"html  , css  , Javascript  , React  ,  php (with Laravel) , Mobile (react Native)"}
            />
        </div>

        {/* third card */}
        <div style={{top : "19rem" , left : "12rem"}}>
            <Card 
            emoji = {Humble}
            heading = {"Front-end / Back-end"}
            detail = {"Des visuels des sites et des app mobiles à la création de celles-ci"}
            />
        </div>
        <div className="blur s-blu2" style={{background : 'var(--purple)'}}></div>

    </div>
</div>  )
}

export default Services