const indhold = ["et.jpeg", "to.jpg", "tre.png"];

let galleri = document.getElementById("Galleri");

for (let i = 0; i < indhold.length; i++) {
    let x = indhold[i];
    galleri.innerHTML += '<img class="billedelille" src="'+x+'" onclick="skiftbillede('+i+')">';
}

function skiftbillede(x) {
let stortbillede = 0;
if (Number(x)==0) {
    document.getElementById("billede").innerHTML='<img class="billedestor" src="et.jpeg"> '
}
 if (Number(x)==1) {
    document.getElementById("billede").innerHTML='<img class="billedestor" src="to.jpg"> '
}
if (Number(x)==2) {
    document.getElementById("billede").innerHTML='<img class="billedestor" src="tre.png"> '
}
}