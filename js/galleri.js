const indhold = ["baby1.jpg", "baby2.jpeg", "baby3.png"];

let galleri = document.getElementById("Galleri");

for (let i = 0; i < indhold.length; i++) {
    let x = indhold[i];
    galleri.innerHTML += '<img class="billedelille" src="'+x+'" onclick="skiftbillede('+i+')">';
}

function skiftbillede(x) {
let stortbillede = 0;
if (Number(x)==0) {
    document.getElementById("billede").innerHTML='<img class="billedestor" src="img/baby1.jpg"> '
}
 if (Number(x)==1) {
    document.getElementById("billede").innerHTML='<img class="billedestor" src="img/baby2.jpeg"> '
}
if (Number(x)==2) {
    document.getElementById("billede").innerHTML='<img class="billedestor" src="img/baby3.png"> '
}
}