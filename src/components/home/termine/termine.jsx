import "./termine.scss"
import React, {useState} from 'react'

const Termine = () => {

    const [value,onChange]=useState(3);

    return (
        <section id="termine">
          <div className="margin-termine  grid gap-4 md:gap-6 lg:gap-8 grid-rows-auto1 ">
            <header className="text-center grid  place-items-center content-center">
            <div className="h1-container">
                <h1>Kurskalender</h1>
                </div>
      <label htmlFor="eventAmt">Slider bewegen um mehr Termine anzuzeigen</label>
      <input type="range" id="eventAmt" min="1" value={value} max="10" className="accent cursor-grab slider-width" onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}/>
    </header>
    <main className="w-full mx-auto " >
      <section className="grid gap-4 md:gap-6  items-start grid-cols-cards " id="events-container" >
      <div className="flex gap-3 items-center text-black mx-auto">
          <svg className="animate-spin h-8 w-8" width="20" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="77.5" cy="77.5" r="60" stroke="currentColor" strokeWidth="10" />
            <path d="M120.329 35.48a59.998 59.998 0 0 1 6.712 75.868" className="opacity-75" stroke="currentColor" strokeWidth="10" />
          </svg>
          <p className="text-center text-3xl animate-pulse">Loading Events</p>
        </div>
        
      </section>
    </main>
            </div>
        </section>
    )
}

export default Termine;