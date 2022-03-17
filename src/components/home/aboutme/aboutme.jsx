import React from "react"
import AboutmeImg from "../../../assets/images/aboutme.jpg"
import "./aboutme.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

const AboutMe = () => {
    return (
        <section id="aboutme">
                <div className="flex-container-about">

            <div className="flex-items-about">
               
                        <div className = "shadow">
                            <div className = "about-image">
                                <img src = {AboutmeImg} alt = "about-image"/>
                            </div>
                        </div>
                            <h2 className="centered marginh2">Doris Jungbauer</h2>
                            <h3 className="about-h3-left">Qigong usw</h3>

                            <ul className = "icons-about curser-pointer">
                                <li>
                                    <a target="_blank" className="curser-pointer" href="">
                                        <FaFacebookF/> 
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" className="curser-pointer" href="">
                                        <FaInstagram/>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" className="curser-pointer" href="">
                                    <FaYoutube/>
                                    </a>                                   
                                </li>    
                            </ul>
                    
             </div>
            <div className="flex-items-about">
                <h1 className="about-h1-right">Hey<span>!</span></h1>

                <div className = "about-btns">
                    <Link to="contact" smooth={true} duration={1000}>
                        <button type = "button" className = "btn btn-gruen ">Kontakt</button>
                    </Link>
                    <Link to="anmelden" smooth={true} duration={1000}>
                        <button type = "button" className = "btn white-btn margin2vh">Anmelden</button>
                    </Link>         
                </div>
                    <div className = "about-description">
          
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                        
                         </p>

                        <p> <br></br>
                        Heute will ich meine Leidenschaft an andere weitergeben und junge Menschen dazu bewegen, sich Ziele zu setzen und diese zu verfolgen.
                        . 
                        </p>
                 </div>
            </div>
        </div>
        </section>
    )
}

export default AboutMe;