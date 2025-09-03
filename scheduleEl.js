
const days = [
  { name: "Mandag", date: "01/09", times: [["Selvbetjening", "07:00 - 13:00"], ["Med betjening", "13:00 - 18:00"], ["Selvbetjening", "18:00 - 22:00"]] },
  { name: "Tirsdag", date: "02/09", times: [["Selvbetjening", "07:00 - 11:00"], ["Med betjening", "11:00 - 17:00"], ["Selvbetjening", "17:00 - 22:00"]] },
  { name: "Onsdag", date: "03/09", times: [["Selvbetjening", "07:00 - 13:00"], ["Med betjening", "13:00 - 17:00"], ["Selvbetjening", "17:00 - 22:00"]] },
  { name: "Torsdag", date: "04/09", times: [["Selvbetjening", "07:00 - 13:00"], ["Med betjening", "13:00 - 17:00"], ["Selvbetjening", "17:00 - 22:00"]] },
  { name: "Fredag", date: "05/09", times: [["Selvbetjening", "07:00 - 13:00"], ["Med betjening", "13:00 - 17:00"], ["Selvbetjening", "17:00 - 22:00"]] },
  { name: "Lørdag", date: "06/09", times: [["Selvbetjening", "07:00 - 22:00"]] },
  { name: "Søndag", date: "07/09", times: [["Selvbetjening", "07:00 - 22:00"]] }
];



const scheduleEl = document.getElementById("schedule");
// "schedule" id'et fra html'en er sat sammen med en class "schedule-box" som bruges i css'en 
// hvoraf elementet "id'et" bliver i en const som får navnet scheduleEl for at give åbningstider "liv" i  javascriptet samt at scheduleEl er et DOM-element


// Generer HTML for åbningstider der kan "ses"
// "" - betyder at der abejdes med strings
// for() - betyder loop () betyder varibel 
// i = 0 - betyder start ved starten
// i <  days.length - betyder "er 0 mindre end længden på arrayet? (days) = ja"
// i++ - efter hver runde tæller vi op med 1 (går til næste dag) indtil vi når samme antal som længden og starter forfra.
// let day = days[i] - betyder [i] tager den første dag fra listen og gemmer den aktuelle dag i en variabel kaldet "day"
// += - betyder “læg det her til det, der allerede står i html”.

/*    '<div class="day">' - betyder Starter en ny tekstboks i HTML med class'en "day" som bliver lagt ind i pop-up kassen. 
       derefter bliver der skrevet '<strong>' + day.name + ' d. ' + day.date + '</strong>' + som fortæller at der skal skrives name = mandag date = d. 01/09 fra arrayet 
*/

//   j fortæller nummeret i listen (0, 1, 2) ligesom "i"
//   t = står for times altså teksten med tiderne fra arrayet "selvbetjening 7:00 - 13:00"  

/* timesHtml += '<div class="time-row"><span>' + t[0] + '</span><span>' + t[1] + '</span></div>';
fortæller egentlig bare at variablen der er blevet sat med åbningsTIDERNE lægge sammen med flex space-between "time-row" 
t[0] = "selvbetjening" t[1] = "07:00 - 13:00" - lige som i arrayet [["Selvbetjening", "07:00 - 13:00"]  
og <span> gøre at alt tekst bliver på samme linje */ 

// sidste del sætter delene med mandag + d. + dato sammen rent sammen til sidst.

let html = "";

for (let i = 0; i < days.length; i++) {
  let day = days[i]; 

let timesHtml = ""; 

for (let j = 0; j < day.times.length; j++) {
  let t = day.times[j];
  timesHtml += '<div class="time-row"><span>' + t[0] + '</span><span>' + t[1] + '</span></div>';
}

html += '<div class="day">' +
  '<strong>' + day.name + ' d. ' + day.date + '</strong>' +
  timesHtml +
'</div>';
}


scheduleEl.innerHTML = html;

// document.querySelector - finder det første element med klassen .open-time.

// button.addEventListener("click", function() { - 
// button.addEventListener → tilføjer en event listener, altså noget, der lytter efter en bestemt
// "click" → typen af event, i dette tilfælde et klik med musen.
// function() { ... } → den funktion, der skal udføres, når eventet sker.

// if → betyder “hvis”
// scheduleEl.style.display → tjekker den inline CSS-egenskab display på elementet.
// === "block": sammenligner om display er "block" (altså synlig som blok)
// "block" = CSS-display-egenskab, ikke teksten i elementet
// === betyder "sammenlign både værdi "block" og type "scheduleEl.style.display" (streng vs. streng) = true
// else - betyder “ellers” (dvs. hvis if ikke var true).
// scheduleEl.style.display = "none"; - Hvis betingelsen er true, sættes display til "none". "none" = skjuler elementet, og det tager ingen plads på siden.
// else { scheduleEl.style.display = "block"; } Her vises elementet ved at sætte display til "block" - fordi if'en sluttede af med "none"

//           Klik på knap
//               |
//               v
// scheduleEl.style.display === "block" ?
//         /           \
//       Ja             Nej
//      Skjul            Vis
//  (display:none)   (display:block)
//
const button = document.querySelector(".open-time");

// Event: vis/skjul boks
button.addEventListener("click", function() {
  if (scheduleEl.style.display === "block") {
    scheduleEl.style.display = "none"; // skjul hvis allerede vist
  } else {
    scheduleEl.style.display = "block"; // vis ellers
  }
});

// .addEventListener("click" - Hver gang nogen klikker et sted på dokumentet (siden), skal du udføre denne funktion”.
// function(e) - Funktionen, der kører, når et klik sker. e kortform for event er et objekt der beskriver alt om det klik.
// 

// if (!scheduleEl.contains(e.target) && e.target !== button) { ... } 
// "Hvis klikket IKKE (!scheduleEl) er inde i boksen og (&&) det heller ikke er på knappen (!== button) → så skal boksen lukkes (display = none)."
// !scheduleEl - ! = NOT → det vender betingelserne om. true = false, false = true
// contains(e.target) = “Er det klik inde i mit element?” uden contains = e.target = e = event target = uanset hvor du trykker, funktion(e) fortæller funktionen at der er et event som udgør sig i et klik uanset hvor det er 


// luk når man klikker udenfor
document.addEventListener("click", function(e) {
  if (!scheduleEl.contains(e.target) && e.target !== button) {
    scheduleEl.style.display = "none";
  }
});