import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className='n-name'>Portfolio</div>
                <Toggle/>
            </div>
            <div className="n-right"></div>
            <div className="n-list">
                <ul style = {{listStyleType: 'none'}}>

                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Accueil</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className='button n-button'>
                Contact
            </button>
            </Link>

        </div>

    )
}

export default Navbar