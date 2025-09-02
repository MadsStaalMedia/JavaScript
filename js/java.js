const msgs=[ // opretter en konstant variabel // msgs er en liste af objekter 
    {t:"Årslev Bibliotek",x:"Velkommen! Se arrangementer."},  // { t: "...", x: "..." } (array liste)
 {t:"Åbningstider",x:"Man-fre:10-17, Lør:10-13"}
];

const o=document.createElement("div");  // laver en variabel o med et <div> element
const p=document.createElement("div"); // laver endnu et <div>
const b=document.createElement("button"); // laver et <button> element 

o.style="position:fixed;inset:0;background:#f6f6f6;display:flex;align-items:center;justify-content:center";
p.style="background:#FFF;padding:20px;border-radius:12px;text-align:center;font-family:sans-serif"; //CSS 

msgs.forEach(m=>{
    if(m&&m.t&&m.x){ // tjekker om objektet (m) har titel (t) og en tekst (x)
        const h=document.createElement("h2"); // laver en overskrift
        const t =document.createElement("p"); // laver et afsnit <p> til pop'upen
        h.textContent=m.t; // sætter  tekstindholdet ind fra objektet 
        t.textContent=m.x;
        p.append(h,t) // smider dem ind i pop-up boksen (p)
    }else console.warn("Fejl")
});

b.textContent="Luk"; // giver knappen teksten ''luk'' 
b.onclick=()=>o.remove(); // når man klikker, fjernes pop'upen (o)
p.appendChild(b); //sætter knappen ind i boksen 
o.appendChild(p); // lægger boksen ind i overlayet 
document.body.appendChild(o); // sætter hele pop'upen ind i siden, så man kan se den 