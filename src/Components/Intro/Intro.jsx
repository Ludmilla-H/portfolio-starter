import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector from '../../img/vector.png'
import girl from '../../img/girl.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Salut! Je Suis</span>
                <span> Ludmilla HARNAIS</span>
                <span>Je suis Dévellopeuse Conceptrice D'aplications, 
                        je suis a la recherche d'un stage de trois mois et je souhaiterais le réaliser dans votre entreprise.</span>
            </div>
            <button className="button i-button">Engager-moi</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>

        </div>
        <div className="i-right">
            <img src={Vector} alt="" />
            <img src={girl} alt="" />
            <div style={{top : '-5%' , left : '72%'}} 
            className="floating-div"
            >
                <FloatingDiv image={Crown} txt1='Developpeur' txt2='Web'/>
            </div>
            <div style={{top : '18rem' , left : '-2rem'}}
            className="floating-div"
            >
                <FloatingDiv image={thumbup} txt1='Design !'/>
            </div>

            {/* Blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}>

            <div className="blur" style={{top: '17rem',
                widht : "21rem" ,
                height : "11rem", 
                left : "5rem"}}></div>


            </div>

        </div>
        
    </div>
  )
}

export default Intro