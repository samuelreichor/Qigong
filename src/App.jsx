import React, {useState, useEffect, lazy, Suspense} from "react"

//common imports
import Navbar from "./components/common/navbar/navbar"

const Footer = lazy(() => import('./components/common/footer/footer'))

//home imports
import Welcome from "./components/home/welcome/welcome"
import AboutQigong from "./components/home/Slider/slider-card.jsx"
import Termine from "./components/home/termine/termine"
import Anmelden from "./components/home/anmelden/anmelden"
import Information from "./components/home/Information/information"
const AboutMe = lazy(() => import('./components/home/aboutme/aboutme'))
const Contact = lazy(() => import('./components/home/contact/contact'))


//dependencies
import { ParallaxProvider } from 'react-scroll-parallax';
import { CookiesProvider, CookieBannerUniversal } from 'react-cookie-banner';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";



const App = () => {
  const options = {
    timeout: 4000,
    position: positions.TOP_RIGHT
  };

  

  return(


<section id="home">
        <CookiesProvider>
      <CookieBannerUniversal
        styles={{
          banner: { backgroundColor: '#000',
          height: '6vh' },
          message: { fontWeight: 400 },
          button: {backgroundColor: 'transparent', 
                  border: '2px solid #fff',
                  borderRadius: '13px',
                  color: '#fff',},
        }}
        message="Wir benutzen cookies"
        onAccept={() => {}}
        cookie="user-has-accepted-cookies"
      />
      </CookiesProvider>
        <Navbar/>    
      <ParallaxProvider>
       <Welcome/>
       </ParallaxProvider>
       <AboutQigong/>
       <Information/>
       <Suspense fallback={<div>Loading...</div>}>
       <AboutMe/>
       
       <Termine/>
       <Provider template={AlertTemplate}  {...options}>
       <Anmelden/>
       </Provider>
       <Provider template={AlertTemplate}  {...options}>
       <Contact/>
      </Provider>
       <Footer/>   
      </Suspense>
      
         
</section>  
       
     
   )  
 }
 
 export default App