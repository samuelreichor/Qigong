import "./anmelden.scss"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useAlert } from "react-alert";

const Anmelden = () => {
   
    const form = useRef();
    const alert = useAlert();
    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_mwlh8b7', 'template_ve0jhtj', form.current, 'user_4qCEPNJsuE6MTOkr5IRBD')
      .then(() => {
        alert.success("Danke für die Anmeldung")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    
  };

  

    return (
<section id="anmelden">
    <div className="h1-anmelden">
        <h4 className="h1-anmelden">Anmelden</h4>
    </div>
   
  
<form  ref={form} onSubmit={sendEmail}>
  
  <div className="anmelden-box">
  <div className="anmelden-links-wrapper">
      <p className='anmelden-para-rechts'>Wählen sie ein Kurs aus:</p>
      <div className="anmelden-form-item">
      
      <select name="user_termin" id="datum-auswahl"  className="form-select appearance-none 
             
              
              text-black
              mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" aria-label="Default select example">
          
         <option selected value="hii"></option>
    
      </select>
      </div>
      
      <div className="anmelden-haftung">
              <input required type="checkbox" className="form-checkbox text-hard-green h-4 w-4"/>
              <span className="ml-2 ">Ich stimme den <a className='ul' target='_blank' href=''>
                  Datenschutz</a>/<a className='ul' target='_blank' href=''>Haftungserklärung</a> zu.</span>
              </div>
      
  
  </div>
     
  
      <div className="anmelden-rechts-wrapper">
              <p className='anmelden-para-rechts'>Persönliche Daten: </p>
              <div className="anmelden-form-item">
              <label>Voller Name*</label>
              <input required type="text" name="user_name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Max Mustermann'/>
              
              </div>
              <div className="anmelden-form-item">
              <label>Email*</label>
              <input required type="email" name="user_email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" placeholder='example@example.com' />
              
              </div>
              <div className="anmelden-form-item">
              <label>Telefonnummer*</label>
              <input required type="telefonNummer" name="user_tel" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-hard-green focus:ring-hard-green block w-full rounded-md sm:text-sm focus:ring-1" placeholder='0660123456789' />   
              </div>
             
      
     
          
  </div>
  </div>
         <div className='anmelden-button-section'>
         <p className="position-para">Bei einer Erfolgreichen Anmeldung erhalten sie ein Email mit den wichtigsten Daten:)</p>
         <input className="btn btn-gruen anmelden-btn" type="submit" value="Anmelden" />
          
         </div>
  </form>
            
</section>
    )
}

export default Anmelden;