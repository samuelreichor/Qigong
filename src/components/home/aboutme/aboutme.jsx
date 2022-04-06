import React, {useState} from "react";
import AboutmeImg from "../../../assets/images/aboutme.jpeg";
import "./aboutme.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsVimeo } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import MoreInfo from "./moreInfo";


const AboutMe = () => {

    const [show, setShow]=useState(false)
  
  

    return (
      <>
       
  
        <section id="aboutme">
           
                <div className="flex-container-about">

            <div className="flex-items-about">
               
                        <div className = "shadow">
                            <div className = "about-image">
                                <img src = {AboutmeImg} alt = "Doris Jungbauer Profil Bild" title="Das bin ich"/>
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
                                    <BsVimeo/>
                                    </a>                                   
                                </li>    
                            </ul>
                    
             </div>
            <div className="flex-items-about">
                <p className="about-h1-right">Wer bin ich<span>?</span></p>

                <div className = "about-btns">
                    <Link to="contact" smooth={true} duration={1000} offset={-20}>
                        <button type = "button" className = "btn btn-gruen ">Kontakt</button>
                    </Link>
                    <Link to="anmelden" smooth={true} duration={1000} offset={-60}>
                        <button type = "button" className = "btn white-btn margin2vh">Anmelden</button>
                    </Link>         
                </div>
                    <div className = "about-description">
          
                    <p> Studiert habe ich zeitgenössischen Tanz auf dem Brucknerkonservatorium in Linz. 
                        Nach einigen Tanzprojekten und Bewegungsausbildungen, fing ich nicht ganz unfreiwillig an, 
                        mich für die traditionelle chinesische Medizin und vor allem für Qigong zu interessieren. 
                        Leider habe ich schon in jungen Jahren eine klassische rheumatoide Form entwickelt und ich wusste 
                        sehr schnell, dass ich nach alternativen medizinischen Methoden suchen muss. Ich habe mich für TCM 
                        entschieden und dann 2008 angefangen Qigong professionell zu erlernen. Durch das Verinnerlichen der 
                        Qigong-Prinzipien, konnte ich meine Autoimmunerkrankung schließlich besänftigen und mich wieder beweglich 
                        und kräftig fühlen.   
                        
                         </p>

                        <p> <br></br>
                        Gerne gebe ich dir mein Wissen in meinen Kursen weiter.
                        Ich freue mich auf dich! 
                        </p>
                 </div>
                 <div className="position-btn-aboutme">
                     <Link>
                     <button type = "button" className = "btn white-btn margin4vh" onClick={() => setShow(!show)}>Mehr Infos</button>
                     </Link>
                 
                 
                 </div>
                 
            </div>
        </div>
        </section>
        {
            show ? <MoreInfo/> : null
        }
        </>
    )
}

export default AboutMe;