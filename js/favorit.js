       
       console.log("tekst");

       let book = [
            { navn: "Harry Potter",titel: "Flammernes pokal", forfatter: "J.K Rowiling",billede: "harry.webp"},
            { navn: "Rolf og Ritter",titel: "Historier fra 20år", forfatter: "Dennis og Rolf",billede: "rolf.webp"},
            { navn: "Hækling",titel: "Strik og sjov hækling", forfatter: "Sophie Britten",billede: "strik.webp"},
            { navn: "Krimi",titel:"Det forsvundne barn" , forfatter: "Linda Lassen",billede: "detforsvundespædbarn.webp"},
            { navn: "Krimi",titel: "Havhesten", forfatter: "Vibeke Marx",billede: "havhesten.webp"},
            { navn: "Ben Elton",titel: "I kamp mod tiden", forfatter: "Turbulenz",billede: "Benelton.webp"}
        ];


        let output=document.getElementById("bogbox");


        for(i=0; i < book.length; i++){
           let htmlBog = '<div class="bog"><img src="/img/'+ book[i].billede +' "width="300px" height="400px" '+ book[i].titel + ' class="afstand"> <div class="bog__tekst"> <button onclick ="farvoritKnap('+ i +')">Farvorit</button> </div></div>'
            output.innerHTML+=htmlBog;''
    
            console.log("teks2t");
        };

        let farvoritliste=[ ];

        function farvoritKnap(titel){
             if(farvoritliste.includes(titel)){
                alert("hello");
            }
            else(farvoritliste.includes(title))



            farvoritliste.push(titel);

            console.log(farvoritliste);

         
          }
        

         

       

            
        
