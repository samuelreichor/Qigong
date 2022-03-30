import React, {useState} from "react";

import "./navbar.scss"

import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll'

import logo from "../../../assets/images/logo_black.png"


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav className="sticky top-0 z-50">
        <div className="navbar">
                <div className="navbar-container container ">
                    <Link to="home" smooth={true} duration={1000} className='navbar-logo' onClick={closeMobileMenu}>
                        <img  src={logo}  alt="logo" className="cursor-pointer "/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                          
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className=" nav-item">
                <Link to="aboutqigong" smooth={true} offset={-70} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                    Qigong
                </Link>
                </li>
                <li className=" nav-item">
                <Link to="aboutme" smooth={true} offset={-60} duration={1100} className='nav-links' onClick={closeMobileMenu}>
                    Über mich
                </Link>
                </li>
                <li className="nav-item">
                <Link to="termine" smooth={true} offset={-60} duration={1300} className='nav-links' onClick={closeMobileMenu}>
                    Kurskalender
                </Link>
                </li> 
                <li className="nav-item">
                <Link to="contact" smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                    Kontakt
                </Link>
                </li> 
                <li>
               

            
                  <Link to="anmelden" smooth={true} offset={-60} duration={1000}>
                  <button className="btn-gruen btn">Anmelden</button>
                  </Link>
               
                    </li>   
                </ul>
                </div>
        </div>

        
        </nav>  
    )
}

export default Navbar;