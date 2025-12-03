/* ---------------------------------- UPPGIFT 4 ---------------------------------- */

/* Här skapar vi variabler med const som vi har namnget med "getCheckbox", 
"getButton" och "getEmptybox". Vi har hämtat HTML-element med getElementById 
och deklarerat till de tidigare namngivna variablerna. */
const getCheckbox = document.getElementById('divStyle'); 

const getButton = document.getElementById('btn');

const getEmptybox = document.getElementById('divEmpty');

/* Hämtat inputfälten från HTML och tilldelat de variablen "getTextfield". */
/* Vi valde att hämta med ClassName för att den har flera innehållande element. */
const getTextfield = document.getElementsByClassName('textfield');

/* Utskrift i konsol. */
console.log(getCheckbox, getTextfield, getButton, getEmptybox);



/* ---------------------------------- UPPGIFT 5 ---------------------------------- */

/* Skapat en funktionsdeklaration vid namn "handleClick" 
för att kunna anropas vid ett senare stadie (återanvändbar). */
function handleClick(e) {
    /* Utskrift i konsol för:
        e.target.id --> Läsa av de HTML-element genom id som användaren är positionerad på.
        e.target.value --> Läsa av texten som användaren skriver in i inputfältet. */
    console.log("Inputfältet för:", e.target.id, e.target.value);

    /* En if-sats som gör en strickt jämförelse. e.target.name går in i HTML och letar 
    efter elementet med name="content" eftersom det är det vi gör en jämförelse på. */
    if(e.target.name === "content") {
        /* Vid en lyckad jämförelse ändrar vi med innerHTML det tomma div-elementet "getEmptybox".
        Det tomma elementet får nu istället värdet från användarens input. */
        getEmptybox.innerHTML = e.target.value;
    }
}



/* ---------------------------------- UPPGIFT 6 ---------------------------------- */

/* Vi skapar en variabel där vi hämtar element med id:et "content". */
const getContent = document.getElementById('content');

/* Vi hämtar inputfältet för färg genom index. */
const getColor = getTextfield[0];

/* Här använder vi eventlyssnare som har eventtypen input. 
När en input i variabeln "getContent" respektive "getColor" 
triggas startas funktionen "handleClick". */
getContent.addEventListener('input', handleClick);
getColor.addEventListener('input', handleClick);


/* En skapad anonym funktion med eventtypen change. Detta innebär att 
vid förändring hos "getCheckbox" startas funktionen. */
getCheckbox.addEventListener('change', () => {
    console.log("Ikryssad checkbox");

    /* .value läser av inpultfältet tillhörande labeln färg. */
    const getInputValue = getColor.value;
    /* Den tomma rutan "getEmptybox" får en egenskap ".style.backgroundColor"
    som gör att rutan kommer ändra färg till det värdet som lästs in från användaren. */
    getEmptybox.style.backgroundColor = getInputValue;
});


/* En arrowfunction med eventtypen click som innebär att när användaren klickar 
på "Ta bort" knappen så så försvinner outputrutan med metoden .remove(). */
getButton.addEventListener('click', () => {
    getEmptybox.remove();
})



/* ---------------------------------- Generativ AI ---------------------------------- */

/* Vi har använt generativ AI för att få hjälp med förklaringar av syntax. 
    Exempelvis: 
        1. Vad menas med target? 
        2. Vad är eventlyssnare i javascript? Kan du förklara pedagogiskt för en nybörjare? 
        3. getContent.addEventListener('input', handleClick); Vad heter positionen för input?
        4. Vad gör en funktion anonym och inte?
           Men inga arrow functions är namngivna så då är alla de anonyma?
        */

/* Vi har också nyttjat generativ AI för att få uppgiftsbeskrivningen förklarad på ett 
enklare sätt, framför allt på uppgift 5 och 6 som vi tyckte var svårtolkat. */

/* Vi stötte på en problematik gällande hur vi hämtade HTML-elementen. Först hämtade 
vi button med getElementByClassName vilket gav ett felmeddelnade senare i koden när 
vi skapade funktionen som hanterar button. Vi felsökte problemet med hjälp av chatGPT 
som förklarade att om man använder ClassName så är det en hel lista med element. 
Den gav oss förslag att använda querySelector eller querySelectorAll. Vi ifrågasatte 
svaret och undrade varför getElementBy inte funkar för elementet button. Då fick vi 
som svar att getElementById alltid returnerar ett enda element. Vi ändrade hämtningen 
av button från ClassName till Id. */
