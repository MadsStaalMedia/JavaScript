const msgs=[
    {t:"Årslev Bibliotek",x:"Velkommen! Se arrangementer."},
    {t:"Åbningstider",x:"Man-fre:10-17, Lør:10-13"}
];

const o=document.createElement("div");  //hest
const p=document.createElement("div");
const b=document.createElement("button");

o.style="position:fixed;inset:0;background:#f6f6f6;display:flex;align-items:center;justify-content:center";
p.style="background:#FFF;padding:20px;border-radius:12px;text-align:center;font-family:sans-serif";

msgs.forEach(m=>{
    if(m&&m.t&&m.x){
        const h=document.createElement("h2");
        const t =document.createElement("p");
        h.textContent=m.t;
        t.textContent=m.x;
        p.append(h,t)
    }else console.warn("Fejl")
});
b.textContent="Luk";
b.onclick=()=>o.remove();
p.appendChild(b);
o.appendChild(p);
document.body.appendChild(o);