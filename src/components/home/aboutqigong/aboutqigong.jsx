import "./aboutqigong.scss"
import Card1Img from"../../../assets/images/card1.jpg"
import Card1 from"../../../assets/images/card1.svg"
import Card2 from"../../../assets/images/card2.svg"
import Card3 from"../../../assets/images/card3.svg"
import React from "react";



const AboutQigong = () => {

    return (
<section id="aboutqigong">
    <div className="aboutqigongsection">
                <div className="h1-container">
                <h1>Was ist Qigong?</h1>
                </div>

  
<div id="slider">
  
    <input type="radio" name="slider" id="slide1" defaultChecked/>
    <input type="radio" name="slider" id="slide2" />
    <input type="radio" name="slider" id="slide3" />
  
    

    
      <div id="slides">
        <div id="overflow">
          <div className="inner">
            <div className="slide slide_1">
              <div className="slide-content">
               
                                <div className="cardSection">
                                    <div className="card">
                                        <div className="icon">
                                           
                                        </div>
                                    
                                        <div className="aboutqi-img">
                                            <img className="Card1Img" src={Card1Img} alt="about-qigong" />
                                            
                                        </div>
                                        <img className="Card1Mobile" src={Card1} alt="about-qigong" />
                                        <div className="aboutqi-text"> 
                                            <h2>Card 1</h2> 
                                            <p className="cardtext ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                                                ipsum dolor sit amet.  </p>
                                        </div>                      
                                    </div>
                                </div>

              </div>
            </div>
            <div className="slide slide_2">
              <div className="slide-content">
               
                                <div className="cardSection">
                                    <div className="card">
                                        <div className="icon">
                                           
                                        </div>
                                    
                                        <div className="aboutqi-img">
                                            <img className="Card1Img" src={Card1Img} alt="about-qigong" />
                                        </div>
                                        <img className="Card1Mobile" src={Card2} alt="about-qigong" />
                                        <div className="aboutqi-text"> 
                                            <h2>Card 2</h2> 
                                            <p className="cardtext ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                                                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                                        </div>                      
                                    </div>
                                </div>

              </div>
            </div>
            <div className="slide slide_3">
              <div className="slide-content">
                
                                <div className="cardSection">
                                    <div className="card">
                                        <div className="icon">
                                           
                                        </div>
                                    
                                        <div className="aboutqi-img">
                                            <img className="Card1Img" src={Card1Img} alt="about-qigong" />
                                        </div>
                                        <img className="Card1Mobile" src={Card3} alt="about-qigong" />
                                        <div className="aboutqi-text"> 
                                            <h2>Card 3</h2> 
                                            <p className="cardtext ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
                                                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                                        </div>                      
                                    </div>
                                </div>
                
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="controls">
                    <label htmlFor="slide1"></label>
                    <label htmlFor="slide2"></label>
                    <label htmlFor="slide3"></label>

                </div>
                <div id="bullets">
                <label htmlFor="slide1"></label>
                <label htmlFor="slide2"></label>
                <label htmlFor="slide3"></label>

            </div>
    
      
      
        </div>
    </div>
  </section>
    )
}

export default AboutQigong;