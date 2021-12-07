let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  het is een tekst, dus heeft het "" nodig.____ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________ waarom? ______ het is een getal en heeft geen "" nodig._____ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _____als je voor het eerst variabele gaat maken, moet je eerst _______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______regel 17______ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____________ de waarde noemen we een A__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ___naam____ op het scherm met de tekst _____jayden____ deze tekst staan op regel ___17____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____nee____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _____het veranderd _____ en waar wordt deze in je HTML aangeroepen? _____regel 22_____ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML __regel 17__ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById?____ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ____je krijgt een blok met een foto____ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ____regel 30____ en wanneer wordt deze aangeroepen __regel 32___ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ___van de rekensom___ en waar komt de waarde van getal vandaan? ___van die zelfde rekensom___ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ____  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ___je krijgt een antwoord ___ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ___het getal veranderd___ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ___regel 44__ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan __this__ en waar komt de waarde van kleur vandaan? __orange__ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? __30px__ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _____het veranderd de kleur grote en element____ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven __er is een alert__ en wanneer gebeurt dat __als je de pagina oppstrart en refrescht__ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? __als je de pagina opstartdan is er een alert met een tekst die veranderd___ vul je antwoord in op de lijn.