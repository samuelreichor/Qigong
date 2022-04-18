import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useAlert } from "react-alert";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

import './contact.scss'


const Contact = () => {
    const form = useRef();
    const alert = useAlert();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ys35be4', 'template_8844i5b', form.current, '3WgIzozHv0oGOOLna')
      .then(() => {
        alert.success("Die Nachricht wurde versendet");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()   
  };

  
    return (
<section id="contact">
  <div className="contact-box">
    <div className="contact-links-wrapper">
      <h2 className='contact-h2'>Kontaktiere mich</h2>
      <p className='contact-para'>
          Ich freue mich, das du Interesse zeigst. Du kannst mich 
          jederzeit bei Problemen oder Fragen kontaktieren. Wenn die Nachricht 
          angekommen ist, erhaltest du eine Bestätigungs-Email. :)
      </p>
      <div className="contact-links">
        <div className="contact-link">
          <a target="_blank" className="curser-pointer" href="https://www.facebook.com/hubraum.linz">
          <FaFacebookF/>
          </a>
          
        </div>
        <div className="contact-link">
          <a target="_blank" className="curser-pointer" href="https://www.instagram.com/doris_jungbauer/">
          <FaInstagram/>
          </a>
         
        </div>
        <div className="contact-link">
        <a target="_blank" className="curser-pointer" href="https://www.youtube.com/channel/UC0Si2S5Q1sU8SlxyWXCuW-A">
          <BsYoutube/>
          </a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail} >
        <div className="contact-form-item">
        <label>Name:</label>
        <input required id="name" type="text" name="user_name" className="mt-1 px-3 py-2 bg-white border  border-slate-500 placeholder-slate-500 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Max Mustermann'/>
        
        </div>
        <div className="contact-form-item">
        <label>Email:</label>
        <input required id="email" type="email" name="user_email" className="mt-1 px-3 py-2 bg-white border  border-slate-500 placeholder-slate-500 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" placeholder='example@example.com' />
          
        </div>
        <div className="contact-form-item">
        <label>Telefonnummer:</label>
        <input required id="phone" type="telefonNummer" name="user_tel" className="mt-1 px-3 py-2 bg-white border  border-slate-500 placeholder-slate-500 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md  focus:ring-1" placeholder='+43123456789' />
          
        </div>
        <div className="contact-form-item">
        <label>Nachricht:</label>
        <textarea required id='message' name="message" className="mt-1 px-3 py-2 bg-white border  border-slate-500 placeholder-slate-500 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Deine Muster Nachricht ...' />
          
        </div>
        <div className="contact-btn">
        <input className="btn btn-gruen contact-btn" type="submit" value="Nachricht senden"  />
        </div>
        
      </form>
    </div>
  </div>
</section>
    );
};

export default Contact;