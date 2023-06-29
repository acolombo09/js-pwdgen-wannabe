/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/*
BONUS: domandare all'utente l'età. Nella password, sommare al numero 21 l'età inserita.
Esempio: età = 30, password = nomecognomecolorepreferito51
*/

const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const fixedNumber = 21;
const age = prompt("Inserisci la tua età");

document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML =  lastName;
document.getElementById("fav-color").innerHTML =  favColor;

document.getElementById("age").innerHTML = age;

console.log(firstName + lastName + favColor + fixedNumber);
const pswGenerated = (firstName + lastName + favColor + fixedNumber);

document.getElementById("psw-generated").innerHTML = pswGenerated;

const bonusNumber = fixedNumber + parseInt((age));
// document.getElementById("bonus-number").innerHTML = bonusNumber;

const pswBonus = (firstName + lastName + favColor + bonusNumber);
document.getElementById("psw-bonus").innerHTML = pswBonus;



