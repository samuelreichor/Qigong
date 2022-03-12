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
                    <h1 className="welcome-h1">Qigong Kurse</h1>
                </div>
                <Parallax speed={15}>
                    <div className="parallax" style={{ backgroundImage: `url(${welcomebackground})` }}>
                    </div>
                </Parallax>
                <div className="parallax-mobile-sector">
                    <img className="parallax-mobile" src={welcomebackgroundMobile} alt="Qigong-Mobile" />
                    </div>
                <div className="welcome-container">
                    <div className="welcome-content">
                        <p className="welcome-infotext">Qigong Kurse bei Doris Jungbauer</p>
                        <p className="welcome-infotext">Ich freue mich über eine Anmeldung</p>
                        <div className="margin-important-stuff">
                            <p className="welcome-important-stuff">Some motivation Some Motivatiooonnnnn (Important shitt)</p>
                        </div>
                        <div className="centered-btn">
                            <Link to="anmelden">
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