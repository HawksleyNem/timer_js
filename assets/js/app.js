// Initialisation des variables des dates
let countDownDate = new Date(2023, 4, 15, 0, 0, 0);

// Sélection des éléments de la page Web
let daysElem = document.querySelector("#days span");
let hoursElem = document.querySelector("#hours span");
let minutesElem = document.querySelector("#minutes span");
let secondsElem = document.querySelector("#seconds span");
let timerId = null;

function startCountDown() {
    // Valeurs globales
    let startDate = new Date();
    let diff = countDownDate - startDate;
    let daysGlobal = Math.floor(diff/24/3600/1000);
    let hoursGlobal = Math.floor(diff/3600/1000);
    let minutesGlobal = Math.floor(diff/60/1000);
    let secondsGlobal = Math.floor(diff/1000);
    
    // Compteur littéral
    let daysCounter = daysGlobal;
    let hoursCounter = hoursGlobal - (daysGlobal * 24);
    let minutesCounter = minutesGlobal - (hoursGlobal * 60);
    let secondsCounter = secondsGlobal - (minutesGlobal * 60);

    // Mise en place des valeurs du compteur site le site Web
    daysElem.textContent = daysCounter;
    hoursElem.textContent = hoursCounter;
    minutesElem.textContent = minutesCounter;
    secondsElem.textContent = secondsCounter;

    if (diff < 1) {
        endCountDown();
    }

    formatTimeStr();
}

let interval = setInterval(() => {
    startCountDown();
}, 1000);


function endCountDown() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    clearInterval(interval);
}

function formatTimeStr() {
    document.querySelector('#days').lastChild.textContent = daysElem.textContent < 2 ? "Jour" : "Jours";
    document.querySelector('#hours').lastChild.textContent = hoursElem.textContent < 2 ? "Heure" : "Heures";
    document.querySelector('#minutes').lastChild.textContent = minutesElem.textContent < 2 ? "Minute" : "Minutes";
    document.querySelector('#seconds').lastChild.textContent = secondsElem.textContent < 2 ? "Seconde" : "Secondes";
}