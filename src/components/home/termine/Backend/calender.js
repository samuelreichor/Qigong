import '../termine.scss'

const eventContainer = document.querySelector('#events-container');
const eventAmtToFetch = document.querySelector('#eventAmt');

const getMonth = (month) => ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'][month];
const getDayOfWeek = (weekday) => ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][weekday]
const getHour = (hour) => (hour);
const getMinute = (minute) => (minute === 0 ? '00' : minute);


function createEvent(e, i){
  return `
  <article class="bg-white text-black rounded-lg cardshadow ">
          <div class="p-3 greenbg  grid place-items-center rounded-t-lg">
            <div class="text-sm text-black">${e.start.month}</div>
            <div class="text-3xl font-bold text-black">${e.start.date}</div>
          </div>
          <div class="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
            <div class="grid gap-1">
              <p class="  text-sm">${e.dateRange}</p>
              <h3 class="font-bold text-2xl text-color">
                <a href="#">${e.name}</a>
                ${e.location 
                  ? `<p class=" text-sm">${e.location}</p>`
                  : ''}
              </h3>
              ${
                e.description
              ? `<div class="grid gap-1">
                <button class=" text-black flex gap-1 items-center cursor-pointer" aria-expanded="false" aria-controls="details-${i}" id="btn-${i}">
                  <p class="pointer-events-none">See details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div class=" gap-1 hidden" id="details-${i}" aria-labelledby="btn-${i}">
                  <p class="">${e.description}</p>
                </div>
              </div>
            </div>`
            : '<div class=""h-4></div>'
              }
            <a href="${e.link}"  class="greenbg rounded-md px-4 py-2 text-black  text-center font-bold   focus:outline-none focus:ring-offset-2">Im Kalender ansehen</a>
          </div>
        </article>`
        
}

function processDate(date){
  const hour = getHour(date.getHours()) === 0 
    ? false 
    : getHour(date.getHours());
  const minute = getMinute(date.getMinutes());
  const time = hour && `${hour}:${minute}`;
  return{
    month: getMonth(date.getMonth()),
    weekday: getDayOfWeek(date.getDay()),
    time,
    date: date.getDate(),
  }
}



function mapEventObject(event){
  const startDate = event.start.dateTime 
  ? processDate(new Date(event.start.dateTime))
  : processDate(new Date(`${event.start.date}T00:00:00`))
  //console.log(startDate)
  const endDate = event.end.dateTime 
  ? processDate(new Date(event.end.dateTime))
  : processDate(new Date(`${event.end.date}T00:00:00`))
  let dateRange;
  if (startDate.date !== endDate.date){
    dateRange = `${startDate.month} ${startDate.date}–${endDate.month} ${endDate.date}`
  } else if (!startDate.time) {
    dateRange  = `${startDate.month} ${startDate.date}`;
  } else {
    dateRange = `${startDate.weekday}, ${startDate.time}–${endDate.time}`;
  }
  return {
    name: event.summary,
    description: event.description,
    location: event.location,
    start: startDate,
    end: endDate,
    dateRange,
    link: event.htmlLink, /*link btn*/
  }
}




async function loadEvents(max=3, e){
  
    try {
      const endpoint = await fetch(`./.netlify/functions/calFetch?maxResults=${max}`);
      const data = await endpoint.json();
      const processedEvents = data.map(e => mapEventObject(e));
      eventContainer.innerHTML = processedEvents.map((event, i) => createEvent(event, i)).join('');
     
    } catch (e) {
      eventContainer.innerHTML = `<p class="text-center text-3xl">🙀 Something went wrong!</p>`
      console.log(e);
    }
 
}
loadEvents();

eventContainer.addEventListener('click', (e) =>{
 
  if(e.target.hasAttribute('aria-expanded')){
    e.target.setAttribute('aria-expanded', e.target.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    e.target.querySelector('svg').classList.toggle('rotate-180');
    e.target.nextElementSibling.classList.toggle('hidden');
  }
})
eventAmtToFetch.addEventListener('change', (e) => loadEvents(eventAmtToFetch.value))