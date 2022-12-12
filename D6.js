/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log("-------- Esercizio 1 --------");

function area(l1, l2) {
  return l1 * l2;
}

let result = area(24, 56);

console.log(result); //Verifica non richiesta dall'esercizio

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("-------- Esercizio 2 --------");

function crazySum(n1, n2) {
  if (n1 != n2) {
    return n1 + n2;
  } else {
    return (n1 + n2) * 3;
  }
}
const x = crazySum(21, 22);

console.log(x);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("-------- Esercizio 3 --------");

function crazyDiff(n1, z) {
  if (n1 > z) {
    return Math.abs[(n1 - z) * 3];
  } else {
    return Math.abs(n1 - z);
  }
}
const z = 19;
const y = crazyDiff(10, z);

console.log(y);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("-------- Esercizio 4 --------");

function boundary(h) {
  if ((h >= 20 && h <= 100) || h === 400) {
    return true;
  } else {
    return false;
  }
}
const h = 19;
const q = boundary(h);

console.log(q);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("-------- Esercizio 5 --------");

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}

let frase = epify("saluti!");
//let frase = epify("EPICODE saluti!");
console.log(frase);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("-------- Esercizio 6 --------");

function check3and7(n) {
  if (typeof n !== "number" || n < 0) {
    risultato = ": Il valore inserito non è un numero o è un numero negativo";
  } else {
    switch (0) {
      case n % 3:
        risultato = ": Il valore inserito è un multiplo di 3";
        break;
      case n % 7:
        risultato = ": Il valore inserito è un multiplo di 7";
        break;
      default:
        risultato = ": Il valore inserito non è multiplo di 3 o di 7";
    }
  }
  return risultato;
}

const n = 10;
//const n = -10;
//const n = 14
//const n = 18
//const n = "gattino"
console.log(n + check3and7(n));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("-------- Esercizio 7 --------");

function reverseString(myStr) {
  return myStr.split("").reverse().join("");
}
const myStr = "EPICODE SALUTI";

console.log(reverseString(myStr));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("-------- Esercizio 8 --------"); //NON FUNZIONA RITORNACI

function upperFirst(string1) {
  const splitstring = string1.split(" ");
  for (let i = 0; i < splitstring.lenght; i++) {
    splitstring[i] =
      splitstring[i].charAt(0).toUppercase() + splitstring[i].substring(1);
  }
  return splitstring.join(" ");
}
let upperedWords = upperFirst("Stringa di diverse parole");
console.log(upperedWords);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("-------- Esercizio 9--------");

function cutString(string) {
  if (typeof string === "string") {
    stringF = string.slice(1, -1);
    console.log(stringF);
  } else {
    console.log("inserisci stringa");
  }
}
cutString("Salute e vita");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("-------- Esercizio 10 --------");

function giveMeRandom(n) {
  if (typeof n !== "number") {
    return "Non è stato inserito un numero";
  } else {
    let rng = [];
    for (let i = 0; i < n; i++) {
      rng.push(Math.floor(Math.random() * 10 + 1));
    }

    return rng;
  }
}
const eG = giveMeRandom(2);
console.log(eG);
