const datumAuswahl = document.querySelector('#datum-auswahl');
    const eventAmtToFetch = document.querySelector('#eventAmt');
    const getMonth = (month) => ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'][month];
    const getDayOfWeek = (weekday) => ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][weekday]
    const getHour = (hour) => (hour);
    const getMinute = (minute) => (minute === 0 ? '00' : minute);
   
    function processDates(date){
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
      
      
      
      function mapEventObjects(event){
        const startDate = event.start.dateTime 
        ? processDates(new Date(event.start.dateTime))
        : processDates(new Date(`${event.start.date}T00:00:00`))
        //console.log(startDate)
        const endDate = event.end.dateTime 
        ? processDates(new Date(event.end.dateTime))
        : processDates(new Date(`${event.end.date}T00:00:00`))
        let dateRange;
        if (startDate.date !== endDate.date){
          dateRange = ` ${startDate.month} ${startDate.date}–${endDate.month} ${endDate.date}`
        } else if (!startDate.time) {
            dateRange  = `${startDate.month} ${startDate.date}`;
          } else {
            dateRange = `${startDate.date}. ${startDate.month}, ${startDate.time}–${endDate.time}`;
          }
        return {

            
          start: startDate,
          end: endDate,
          dateRange,
        }
      }




    async function loadDates(max=3, e){
  
        try {
          const endpoint = await fetch(`./.netlify/functions/calFetch?maxResults=${max}`);
          const dates = await endpoint.json();
          const processedEvents = dates.map(e => mapEventObjects(e));
          
          datumAuswahl.innerHTML = processedEvents.map((event, i) => createEvents(event, i)).join('');
          
          
        } catch (error) {
      
          console.log(error);
        }
     
    }
    loadDates();

    function createSelected(e){
        return `
            <option>Kurstermin wählen</option>
        `
    
}

    function createEvents(e, i){
        return `
           
            <option name="user_termin" value="${e.dateRange}">${e.dateRange}</option>
   
        `
    
}

eventAmtToFetch.addEventListener('change', (e) => loadDates(eventAmtToFetch.value))