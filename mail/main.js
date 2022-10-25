"use: strict";

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Emails
const Mails = [ "nomecognome@gmail.com", "cognomenome@gmail.com", "laszlokreizler@gmail.com", "spongebobsquarepants@gmail.com", "harrypotter@gmail.com", "batmangotham@gmail.com" ];
console.log(Mails);

// Email inserita da tastiera
const myEmail = prompt("Inserire email");
console.log(myEmail);

// Verifica
for (let i = 0; i < Mails.length; i++) {
    const element = Mails[i];
    if(myEmail === element){
        alert("Mail accettata");
        break;
    }
    else{
        alert("Mail rifiutata");
        break;
    }
}

window.location.reload();

// accetta solo la prima mail, perchè?