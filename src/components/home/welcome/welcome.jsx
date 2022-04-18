import "./welcome.scss"
import welcomebackground from"../../../assets/images/qigong-buecher.jpg"
import welcomebackgroundMobile from"../../../assets/images/Joga-Welcome.svg"
import { Parallax } from 'react-scroll-parallax';
import {Link} from 'react-scroll'

const Welcome = () => {
    




    return (
        <section id="welcome">
            <div className="welcomesection">
                <div className="h1-container">
                    <h1 className="welcome-h1">Qigong Kurse bei Doris Jungbauer</h1>
                </div>
                <Parallax speed={15}>
                    <div className="parallax" style={{ backgroundImage: `url(${welcomebackground})` }}>
                    </div>
                </Parallax>
                <div className="parallax-mobile-sector">
                    <img className="parallax-mobile" src={welcomebackgroundMobile} alt="Qigong Pose für Mobile Version" title="Qigong Kurse buchen"/>
                    </div>
                <div className="welcome-container">
                    <div className="welcome-content">
                        <p className="welcome-infotext">Qigong Kurse bei Doris Jungbauer</p>
                        <p className="welcome-infotext">Ich freue mich über eine Anmeldung</p>
                        <div className="margin-important-stuff">
                            <p className="welcome-important-stuff">Körpertraining für ganzheitliche Gesundheit </p>
                        </div>
                        <div className="centered-btn">
                            <Link to="anmelden" smooth={true} duration={1000} offset={-60}>
                            <div className="btn white-btn">Anmelden</div>
                            </Link>
                            
                        </div>
                        
                    </div>
                </div>

            </div>
           
        </section>
        
    )
}

export default Welcome;