
import "./slider-card.css"
import Card1Desktop from"../../../assets/images/Card1-desktop.jpeg"
import Card2Desktop from"../../../assets/images/Card2-desktop.jpeg"
import Card3Desktop from"../../../assets/images/Card3-desktop.jpeg"


import Card1 from"../../../assets/images/card1.svg"
import Card2 from"../../../assets/images/card2.svg"
import Card3 from"../../../assets/images/card3.svg"
import {CgChevronRightO, CgChevronLeftO} from "react-icons/cg"

const Slider = () => {
    return (
<section id="aboutqigong">
    <h1 className="h1-slider marginb4vh">Was ist Qigong</h1>
        <div className="slider">
            <div className="slide_viewer">
                <div className="slide_group">
                <div className="slide">
                    <div className="slide-content">
                    <div className="image-content-slider">
                    <img className="Svg1Img" src={Card1Desktop} alt="about-qigong" />
                        </div>
                        <div className="text-content-slider">
                        <h2>Card 1</h2> 
                        <p className="cardtext">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                            ipsum dolor sit amet.  </p>
                        </div>
                    </div>
                   
                </div>
                <div className="slide">
                <div className="slide-content">
                    <div className="image-content-slider">
                    <img className="Svg1Img" src={Card2Desktop} alt="about-qigong" />
                        </div>
                        <div className="text-content-slider">
                        <h2>Card 2</h2> 
                        <p className="cardt">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                            ipsum dolor sit amet.  </p>
                        </div>
                    </div>
                </div>
                <div className="slide">
                <div className="slide-content">
                    <div className="image-content-slider">
                    <img className="Svg1Img" src={Card3Desktop} alt="about-qigong" />
                        </div>
                        <div className="text-content-slider">
                        <h2>Card 3</h2> 
                        <p className="cardt">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                            ipsum dolor sit amet.  </p>
                        </div>
                    </div>
                </div>               
                </div>
            </div>
            
        </div>
        <img className="Card1Mobile" src={Card1} alt="about-qigong" />
    <h2 className="mobileh2 centered">
        Card1
    </h2>
    <div className="card-text-mobile centered">
        <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
        ipsum dolor sit amet.
        </p>
    </div>
    <img className="Card1Mobile" src={Card2} alt="about-qigong" />
    <h2 className="mobileh2 centered">
        Card2
    </h2>
    <div className="card-text-mobile centered">
        <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
        ipsum dolor sit amet.
        </p>
    </div>
    <img className="Card1Mobile" src={Card3} alt="about-qigong" />
    <h2 className="mobileh2 centered">
        Card3
    </h2>
    <div className="card-text-mobile centered">
        <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
        ipsum dolor sit amet.
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

    <p className="paragraph-slider margin4vh text-center">Die 3 Säulen von Qigong</p>
</section>
        
    )
}

export default Slider;