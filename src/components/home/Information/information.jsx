import "./information.scss"
import { Link, animateScroll as scroll } from "react-scroll";
import InformationImg from "../../../assets/images/information.webp"
const Information = () => {
    return(
    <section id="information-section">
        <p className="h1-container">
        Kraft&Balance
        </p>
        <div className="container-information">
            <div className="text-information">
                <p className="information-content">Das von mir entwickelte Kräftigungsprogramm ist aus denselben, positiv motivierten, 
                    in die Länge denkenden, Meridian öffnenden, aber auch in die Kraft gehenden und 
                    trotzdem gelenksschonenden, Prinzipien entstanden.</p>
                <p>
                Dieses alte traditionelle Wissen, doch aber neu verpackt, ist in meinen Bewegungs- und Trainingsformen nicht mehr wegzudenken.
                </p>
                <p className="information-content">
                Ich freue mich auf ein gemeinsames Training, in der Gruppe oder auch einzeln, Präsenz oder online. 
                </p>
                <p className="information-content">
                Du lenkst in meinen Einheiten deine Aufmerksamkeit zu 100 Prozent auf dich und deine Entspannung oder deine Übung. 
                Denn diese Zeit, und auch dieses Wohlgefühl soll ganz dir gehören. 
                </p>
                <div className = "about-btns">
                    <Link to="contact" smooth={true} duration={1000} offset={-20}>
                        <button type = "button" className = "btn btn-gruen ">Kontakt</button>
                    </Link>
                    <Link to="anmelden" smooth={true} duration={1000} offset={-60}>
                        <button type = "button" className = "btn white-btn margin2vh">Anmelden</button>
                    </Link>         
                </div>
            </div>

            <div className="img-information">
            <img src={InformationImg} alt="Doris-Jungbauer Qigong Kursinfo Bild" title="Qigong Workshops jetzt buchen"/>
            </div>
        </div>
    </section>
    )
}

export default Information