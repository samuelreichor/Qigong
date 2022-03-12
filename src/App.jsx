import react from "react"

//common imports
import Navbar from "./components/common/navbar/navbar"
import Footer from "./components/common/footer/footer"


//home imports
import Welcome from "./components/home/welcome/welcome"
import AboutQigong from "./components/home/aboutqigong/aboutqigong"
import AboutMe from "./components/home/aboutme/aboutme"
import Termine from "./components/home/termine/termine"
import Anmelden from "./components/home/anmelden/anmelden"
import Contact from "./components/home/contact/contact"

//dependencies
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return(
     <section id="home">
       <Navbar/>
       <ParallaxProvider>
       <Welcome/>
       </ParallaxProvider>
      
       <AboutQigong/>
        
       <AboutMe/>
       {/*
       <Termine/>
       <Anmelden/>
       <Contact/>
       <Footer/>
       */}
     </section>   
   )
   
 }
 
 export default App