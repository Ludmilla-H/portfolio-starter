import React, { useState } from 'react'
import './Portfolio.css'
import Projet1 from '../Porfolio/Img/Projet1.png'
import Projet2 from '../Porfolio/Img/Projet2.png'
import Projet3 from '../Porfolio/Img/Projet3.png'
import Projet4 from '../Porfolio/Img/Projet4.png'
import Projet5 from '../Porfolio/Img/Projet5.png'
import Projet6 from '../Porfolio/Img/Projet6.png'
import Projet7 from '../Porfolio/Img/Projet7.png'
import Projet8 from '../Porfolio/Img/Projet8.png'
import Projet9 from '../Porfolio/Img/Projet9.png'
import Projet10 from '../Porfolio/Img/Projet10.png'
import Projet11 from '../Porfolio/Img/Projet11.png'
import Projet12 from '../Porfolio/Img/Projet12.png'
import Projet13 from '../Porfolio/Img/Projet13.png'
import Projet14 from '../Porfolio/Img/Projet14.png'
import Projet15 from '../Porfolio/Img/Projet15.png'

const Portfolio = () => {


  let data = [
    {
      id: 1,
      imgSrc: Projet1,
      h1: 'ToDoList',
      text: 'Todo list réalisée en Php avec Laravel' ,
    },
    {
      id: 2,
      imgSrc: Projet2,
      h1: 'LeBonCoin',
      text: "Application de revente d'objet " ,
      text2 : "de particuliers réalisé en php",

    },
    {
      id: 3,
      imgSrc: Projet3,
      h1: 'Carousel',
      text: 'Carousel réalisé en html css' ,

    },
    {
      id: 4,
      imgSrc: Projet4,
      h1: 'Entrainement',
      text: 'Ceci est un petit entrainement de site ' ,
      text2: "de nourriture réalisé en html css.",

    },
    {
      id: 5,
      imgSrc: Projet5,
      h1: 'Entrainement',
      text: '(suite)' ,

    },

    {
      id: 6,
      imgSrc: Projet6,
      h1: 'Entrainement',
      text: '(suite)' ,

    },
    {
      id: 14,
      imgSrc: Projet14,
      h1: "Site d'e-commerce",
      text: 'Site réalisé en Php ' ,

    },

    {
      id: 7,
      imgSrc: Projet7,
      h1: "Panier du site d'e-commerce",
      text: 'Prix et quantités fonctionelle' ,

    },
    {
      id: 8,
      imgSrc: Projet8,
      h1: "checkout du site d'e-commerce",
      text: '' ,

    },
    {
      id: 9,
      imgSrc: Projet9,
      h1: 'Entrainement JavaScript',
      text: 'Première partir de site réalisée en react js' ,

    },
    {
      id: 10,
      imgSrc: Projet10,
      h1: 'Entrainement JavaScript',
      text: '(suite de la page web en scrollant)' ,

    },
    {
      id: 11,
      imgSrc: Projet11,
      h1: 'Entrainement JavaScript',
      text: 'page de détail avec react' ,

    },
    {
      id: 12,
      imgSrc: Projet12,
      h1: 'LoGin',
      text: 'Page de loGin fonctionelle afin de se connecter ' ,
      text2: 'a un site internet' ,

    },
    {
      id: 13,
      imgSrc: Projet13,
      h1: 'Register',
      text: "Page de loGin fonctionelle afin de s'inscrire"  ,
      text2: 'a un site internet',

    },
    {
      id: 15,
      imgSrc: Projet15,
      h1: 'ToDoList js',
      text: 'Todo list réalisée en Javascrip' ,

    },
  ]

  const [model, setModel] = useState(false) ;
  const [tempImgSrc, setTempImgSrc] = useState('') ;

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc) ;
    setModel(true) ;
   }


  return (
    <>

    <div className= {model? 'model open ' : "model"}>
      <img src={tempImgSrc} alt=""/>
      <button onClick={() => setModel(false)}>X</button>
    </div>
    
      <div className="portfolio" id="Portfolio">
        <h2 className='p-title'> Mon <span> Portfolio </span> </h2>
        <span className='p-description'> Voici les travaux que j'ai éffectué au cours des mois précédents. De nombreux travaux sont encore a venir. </span>
      </div>

        <div className='p-img'>
          {data.map((item, index) => {
            return (
              <div className='p-images ' keys={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} className="p-image " />
                <h1 className='p-h1'>{item.h1}</h1>
                <p className='p-text'>{item.text}</p>
                <p className='p-text'>{item.text2}</p>
              </div>

            )
          })}
        </div>

    </>
  )
}

export default Portfolio 