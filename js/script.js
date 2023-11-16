// Chiedere all'utente: nome, cognome, colore preferito per generare la sua password


// chiedo all'utente il suo nome
const nomeUtente = prompt("Qual'è il tuo Nome?");

// chiedo all'utente il suo cognome
const cognomeUtente = prompt("Qual'è il tuo Cognome?");

// chiedo all'utente il suo colore preferito
const colorePrefeUtente = prompt("Qual'è il tuo colore preferito?");
console.log(nomeUtente, cognomeUtente, colorePrefeUtente);

// output risultato password in HTML
document.getElementById("risultato").innerHTML = nomeUtente + cognomeUtente + colorePrefeUtente + 21;
