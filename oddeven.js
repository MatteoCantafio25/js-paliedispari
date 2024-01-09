/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in console.
*/


//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");


// CREO UN PROMPT PER AVERE UNA RISPOSTA DALL'UTENTE
const evenOdd = prompt("Scegli pari o dispari?");
console.log("Scelta di Francesco: ", evenOdd);
const humanNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Scelta di Francesco: ", humanNumber);

// ? JSDOC syntax
/**
 * generating a random number from a min to a max number (max included)
 * @param {number} min minimum number
 * @param {number} max maximum number
 * @returns {number} the randomized number
 */

// CREO UNA FUNZIONE PER GENERARE UN NUMERO DA 1 A 5
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

// CREO UNA COSTANTE CHE STAMPERA' IN CONSOLE IL NUMERO RANDOM

const randomNumber = getRandomNumber(1, 5);
console.log("Scelta cpu: ", randomNumber);

// CREO UNA COSTANTE CHE STAMPERA' IN CONSOLE LA SOMMA TRA IL NUMERO DELLA CPU E IL NUMERO UMANO

const sum = humanNumber + randomNumber;
console.log("La somma dei due numeri è: ", sum);

// ? JSDOC syntax
/**
 * checking if a number is even or odd
 * @param {number} number number to check
 * @returns {boolean} the result of the check
 */

// CREO UNA FUNZIONE PER SAPERE SE IL NUMERO E' PARI O DISPARI
function isEven(number) {
    return number % 2 === 0;
}

// STAMPO IN CONSOLE SE LA SOMMA E' PARI O DISPARI
console.log("La somma dei due numeri è pari?: ", isEven(sum));


// CREO UNA CONDIZIONE PER DECRETARE IL VINCITORE

if (evenOdd === "pari" && isEven(sum)) {
    console.log("Francesco ha vinto");
} else {
    console.log("La CPU ha vinto");
}



