import "./footer.scss"

import React, { useRef } from 'react';

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-scroll'



import logo from '../../../assets/images/logo_black.png';

const Footer = () => {
    return (
        <div id="footer">
<div className="footer-box relative  ">
    <div className=" mx-auto ">

        <div className="sm:flex  sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8   flex flex-col md:flex-row justify-between footer-content">
                <div className="flex flex-col">
                    <span className="">
                    <Link to="home" smooth={true} duration={1000} >
                    <img  src={logo}  alt="logo" className="w-24 cursor-pointer " title="Nach oben Scrollen"/>
                    </Link>
                    
                    </span>
                    <div className="container-footer  ">
                        <div className="icontel-footer icon-footer"><BsFillTelephoneForwardFill/></div>
                        <div className="telefonnummer-footer"><p className='contact-footer my-2'>+43676841928216</p></div>
                        <div className="email-footer"><p className='contact-footer my-2'>djqigong@gmail.com</p></div>
                        <div className="iconmail-footer icon-footer"><MdEmail/></div>
                        </div>
                       
                </div>
                <div className="flex flex-col  ">
                    <span className="font-bold text-grey uppercase mt-4 md:mt-0 mb-2">Wichtiges</span>
                    <Link className="hover-footer my-1" to="aboutme" offset={-60} smooth={true} duration={1000}>Über mich</Link>
                    <Link className="hover-footer my-1" to="aboutqigong"  offset={-60}smooth={true} duration={1000}>Über Qigong</Link>
                    <Link className="hover-footer my-1" to="termine" offset={-60} smooth={true} duration={1000}>Termine</Link> 
                    <Link className="hover-footer my-1" to="contact"  offset={-60}smooth={true} duration={1000}>Kontakt</Link> 
                </div>
                <div className="flex flex-col  ">
                    <span className="font-bold text-grey uppercase mt-4 md:mt-0 mb-2">Langweiliges</span>
                    <a className="hover-footer my-1" target='_blank' href=''>Impressum</a>
                    <a className="hover-footer my-1" target='_blank' href=''>Datenschutz</a>
                    <a className="hover-footer my-1" target='_blank' href=''>Haftungsbeschluss</a> 
                </div>
            </div>
        </div>
    </div>
    <div className=" mx-auto px-6 ">
        <div className=" borderline-top margin4vh flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6 ">
                <p className="">
                    ©2022 WebDev GmbH
                </p>
            </div>
        </div>
    </div>
</div>
        </div>



    )
}

export default Footer;