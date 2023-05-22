
const userChoice = prompt("Choose even or odd");
const userNumber = parseInt(prompt("Choose a number between 1 and 5"));

console.log(userNumber);

function pcRandomNumber (){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

let risultato = pcRandomNumber();

console.log (risultato);

let sum = userNumber + risultato;

console.log(sum);

function isResultEven (){
    if (sum % 2 === 0){
        return true;
    } {
        return false;
    }
}

if (isResultEven && userChoice == "even" ){
    console.log ("You won!");
} else {
    console.log ("You lose");
}


/* Determinare se lo user sceglie pari o dispari
Determinare pari e dispari nel sistema
Determinare il numero dello user
Determinare il numero casuale del computer con una funzione
Sommare i due numeri
Determinare con una funzione se il risultato sia pari o dispari
Confrontare il risultato con la scelta dell'utente
Mostrare se l'utente abbia vinto
*/