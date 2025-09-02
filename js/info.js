const indhold = ["Velkommen", "Selvbetjening", "Have", "Lokale"];

let tekst = document.getElementById("info");

for (let i = 0; i < indhold.length; i++) {
    let x = indhold[i]
    tekst.innerHTML += '<br><button class="infoknap" onclick="skabtekst('+i+')">' + x + '</button>';
};

function skabtekst(x) {
    let afsnit = 0;
    if (Number(x) == 0) {
        afsnit = "<p>Du finder Årslev Bibliotek i Sdr. Nærå ved boldbanerne og overfor kirken. Du finder gode parkeringsmuligheder og nemme adgangsforhold for alle. <br><br>Biblioteket velindrettet og familievenligt. Her er et et aktuelt udvalg af skønlitteratur, faglitteratur, musik, film og spil. Årslev Bibliotek er et oplagt sted til fordybelse, leg og hygge.</p>"
    };

    if (Number(x) == 1) {
        afsnit = "<p>Når biblioteket er åbent uden betjening, kan du lukke dig ind ved at scanne dit sundhedskort i kortlæseren til venstre for døren. <br><br>Vær opmærksom på ændrede selvbetjente åbningstider i weekenderne i vinterhalvåret, og faste lukkedage på helligdage.<p>"
    };

    if (Number(x) == 2) {
        afsnit = "<p>I den hemmelige gård bag Årslev Bibliotek har vi indrettet en hyggelig lille have, hvor du kan gå på opdagelse mellem højbedene eller nyde en stille stund med en god bog.<br><br>Fra april til september vil du indimellem kunne opleve små indslag og aktiviteter i haven, der kredser om litteratur, bæredygtighed og biodiversitet.<br><br>I det lille frøbytteskab er du velkommen til at lægge dine frø eller hente frø der er sanket af andre biblioteksgæster.</p>"
    };

    if (Number(x) == 3) {
        afsnit = "<p>Årslev Bibliotek har et lyst og lækkert mødelokale, som foreninger og interessegrupper kan låne til enkeltstående arrangementer.<br><br>Du kan låne lokalet til f.eks. foreningsmøder, kulturelle arrangementer eller heldagsmøder. Børneinstitutioner er også velkomne til at benytte lokalet til madpakkespisning.<br><br>Brugen af mødelokalet administreres af Årslev Bibliotek.</p>"
    };

    document.getElementById("afsnit").innerHTML = afsnit;
};