import "./slider-card.css"


import Card1Desktop from"../../../assets/images/Card1Desktop.webp"
import Card2Desktop from"../../../assets/images/Card2Desktop.webp"
import Card3Desktop from"../../../assets/images/Card3Desktop.webp"


import Card1 from"../../../assets/images/card1.svg"
import Card2 from"../../../assets/images/card2.svg"
import Card3 from"../../../assets/images/card3.svg"
import {CgChevronRightO, CgChevronLeftO} from "react-icons/cg"

const Slider = () => {
    return (
<section id="aboutqigong">
    <p className="h1-slider">Was ist Qigong</p>
    <p className="paragraph-slider">Und seine wunderbaren drei Säulen </p>
        <div className="slider">
            <div className="slide_viewer">
                <div className="slide_group">
                <div className="slide">
                    <div className="slide-content">
                  
                    <img className="DesktopImg" src={Card1Desktop} alt="Bild von Doris Jungbauer in einer Qigong Pose" title="Doris Jungbauer"/>
                 
                        <div className="text-content-slider">
                            
                        <h2>Atmung:</h2> 
                        <p className="cardtext">
                        Die Atmung ist ein wichtiger Bestandteil jeder Übung. Gezielt eingesetzt, 
                        stärkst du mit jedem Atemzug dein Immunsystem und deinen Körper. 
                        Du atmest ein, was dir guttut und lässt los, was du nicht mehr 
                        brauchst.  
                        </p>
                        </div>
                    </div>
                   
                </div>
                <div className="slide">
                <div className="slide-content">
                   
                    <img className="DesktopImg" src={Card2Desktop} alt="Bild von Doris Jungbauer in einer Qigong Pose" title="Doris Jungbauer"/>
                  
                        <div className="text-content-slider">
                       
                        <h2>Bewegung:</h2> 
                        <p className="cardt">
                        Im bewegten Qigong erlernst du dynamische Übungsabfolgen.
                        Eine zentrierte, aufrechte, gesunde Haltung und der Blick auf deine innere 
                        aufrechte Achse sind dabei wichtig. In exakt geübten Bewegungsabfolgen, öffnest du deine 
                        Energieleitbahnen, trainierst den Rücken, 
                        schonst deine Gelenke, und darfst dich im Anschluss leicht 
                        und beweglich fühlen.  </p>
                        </div>
                    </div>
                </div>
                <div className="slide">
                <div className="slide-content">
                    
                    <img className="DesktopImg" src={Card3Desktop} alt="Bild von Doris Jungbauer in einer Qigong Pose" title="Doris Jungbauer" />
                       
                        <div className="text-content-slider">
                       
                        <h2>Vorstellungskraft:</h2> 
                        <p className="cardt">
                        Durch deine innere Bewegung, den Fokus und die meditative Vorstellung, deiner inneren
                        wie äußeren Umgebung, pflegst du deine Gedanken in Ruhe, in Kraft, in Mut,
                        in Leichtigkeit und in Kreativität.</p>
                        </div>
                    </div>
                </div>               
                </div>
            </div>
            
        </div>
        <img className="MobileImg" src={Card1} alt="Qigong Übung" title="Qigong Übung"/>
    <h2 className="mobileh2 centered">
        Atmung:
    </h2>
    <div className="card-text-mobile centered">
        <p>
        Die Atmung ist ein wichtiger Bestandteil jeder Übung. Gezielt eingesetzt, 
        stärkst du mit jedem Atemzug dein Immunsystem und deinen Körper. 
        Du atmest ein, was dir guttut und lässt los, was du nicht mehr 
        brauchst.  
        </p>
    </div>
    <img className="MobileImg" src={Card2} alt="Meditierender Mensch" title="Meditierender Mensch"/>
    <h2 className="mobileh2 centered">
        Bewegung:
    </h2>
    <div className="card-text-mobile centered">
        <p>
        Im bewegten Qigong erlernst du dynamische Übungsabfolgen.
        Eine zentrierte, aufrechte, gesunde Haltung und der Blick auf deine innere 
        aufrechte Achse sind dabei wichtig. In exakt geübten Bewegungsabfolgen,
        welche dich geschmeidig und beweglich halten, öffnest du deine 
        Energieleitbahnen, (auch werden sie Meridiane in traditionelle 
        chinesische Medizin kurz TCM genannt) trainierst den Rücken, 
        schonst deine Gelenke, und darfst dich im Anschluss leicht 
        und beweglich fühlen.
        </p>
    </div>
    <img className="MobileImg" src={Card3} alt="Landschaft" title="Beruhigende Landschaft" />
    <h2 className="mobileh2 centered">
    Vorstellungskraft:
    </h2>
    <div className="card-text-mobile centered">
        <p>
        Durch deine innere Bewegung, den Fokus und die meditative Vorstellung, deiner inneren
        wie äußeren Umgebung, pflegst du deine Gedanken in Ruhe, in Kraft, in Mut,
        in Leichtigkeit und in Kreativität.
        </p>
    </div>

    <div className="slide_buttons">
    </div>

    <div className="directional_nav">
    <div className="previous_btn icons" title="Previous">
        <CgChevronLeftO  className="icons"/>
    </div>
    <div className="next_btn" title="Next">
        <CgChevronRightO className="icons"/>
    </div>
    </div>

    
</section>
        
    )
}

export default Slider;