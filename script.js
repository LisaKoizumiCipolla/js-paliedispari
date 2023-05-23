
const userChoice = prompt("Choose even or odd");
const userNumber = parseInt(prompt("Choose a number between 1 and 5"));

const pcNumber = pcRandomNumber(1,5);

console.log(userChoice);

console.log(userNumber);

console.log(pcNumber)

function pcRandomNumber (minNumber, maxNumber){
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return randomNumber;
}

let sum = userNumber + pcNumber;

console.log(sum);

function isResultEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
    
}

if (isResultEven(sum) && userChoice.toLocaleLowerCase() == "even" ){
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


function isThisAPalindrome (userChoice){
    const len = userWord.length;

    for ( let i = 0 ; i < len / 2 ; i++){
        if (userWord[i] !== userWord[len - 1 - i]){
            return "it is not a palindrome";
        }
    }
    return "It is a palindrome";
}

const userWord = prompt ("Enter a string; ");

const value = isThisAPalindrome(userWord);

console.log(value);

/**
 * const userWord = prompt ("Type a word")
 * 
 * if (userWord === wordReverser(userWord)){
 * console.log("the given word is a palindrome")
 * } else {
 * console.log("the given word is not palindrome")
 * }
 * 
 * function isPalindrome(word){
 * if( word.toLowerCase() === wordReverser(word).toLowerCase()){
 * return true;
 * }
 * return false;
 * }
 * 
 * 
 * function wordReverser(wordToReverse){
 * let reversedWord = "";
 * for  (let index = wordToReverse. length -1; index >= 0 ;index--){
 * reversedWord += wordToReverse[index].toLowerCase();
 * }
 * return reversedWord;
 * }
 * 
 * 
 */