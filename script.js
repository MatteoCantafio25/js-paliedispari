/*
Chiedere all’utente di inserire una parola (con un prompt)
Creare una funzione per capire se la parola inserita è palindroma
Stampiamo il risultato in console
*/


//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

// CREO UN PROMPT PER AVERE UNA RISPOSTA DALL'UTENTE
const question = prompt("Quale parola vuoi inserire?");


// ? JSDOC syntax

/**
 * Cheks if an element is still the same also if is reversed
 * @param {string} text the text to check
 * @returns {boolean} the result of the check
*/

// CREO UNA FUNZIONE PER CAPIRE SE LA PAROLA E' PALINDROMA O MENO

function isPalindrome(text) {
    // CREO UNA VARIABILE PER STABILIRE SE LA PAROLA E' PALINDROMA TRAMITE UN VALORE BOOLEANO
    let palindrome = false;

    // CREO UNA VARIABILE CHE SARA' LA PAROLA AL CONTRARIO
    let reversedText = text.split("").reverse().join("");

    // VERIFICO SE LA PAROLA AL CONTRARIO E' UGUALE ALLA PAROLA DATA DALL'UTENTE E AGISCO DI CONSEGUENZA
    if (text === reversedText) {
        palindrome = true;
        console.log(`La parola ${text} è palindroma`);
    } else {
        console.log(`La parola ${text} non è palindroma`)
    }

    return palindrome;
}

// STAMPO IN CONSOLE LA FUNZIONE

console.log(isPalindrome(question));


