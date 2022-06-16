// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.26 € al km)
// va applicato uno sconto del 15% per i minorenni
// va applicato uno sconto del 35% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.


const nameUser = document.querySelector(`#name-user`);
const kmTravel = document.querySelector(`#km-travel`);
const userAge = document.querySelector(`#age-user`);
const priceBox = document.querySelector(`#price`);
const nameUserSee = document.querySelector(`#name_user_see`);
const sendButton = document.querySelector(`#btn-send`);
const offerUser = document.querySelector(`#offer_user`);
const numberCab = document.querySelector(`#number_cab`);
const codeUser = document.querySelector(`#code_user`);

sendButton.addEventListener(`click`, function () {
    console.log(document.querySelector(`#name-user`).value);
    console.log(document.querySelector(`#km-travel`).value);
    console.log(document.querySelector(`#age-user`).value);

    if ((isNaN(kmTravel.value) == true) || (isNaN(userAge.value) == true)) {
        console.log(`Numero non accettato. Inserisci correttamente i tuoi dati`);
        alert(`Inserisci correttamente i tuoi dati`);
    } else {
        let priceTicket = kmTravel.value * 0.26;

        if (userAge.value < 18) {
            priceTicket = priceTicket - ((priceTicket * 15) / 100);
            console.log(`Il passeggero è minorenne, il prezzo del biglietto è: € ${priceTicket.toFixed(2)}`);
            priceBox.innerHTML = "€" + " " + priceTicket.toFixed(2);
            offerUser.innerHTML = "Offerta Giovane";
        } else if (userAge.value > 65) {
            priceTicket = priceTicket - ((priceTicket * 35) / 100);
            console.log(`Il passeggero è un over 65, il prezzo del biglietto è: € ${priceTicket.toFixed(2)}`);
            priceBox.innerHTML = "€" + " " + priceTicket.toFixed(2);
            offerUser.innerHTML = "Offerta Senior";
        } else {
            console.log(`Il prezzo del biglietto è: € ${priceTicket.toFixed(2)}`);
            priceBox.innerHTML = "€" + " " + priceTicket.toFixed(2);
            offerUser.innerHTML = "Biglietto Standard";
        }

        nameUserSee.innerHTML = nameUser.value;
        let randomNumber = Math.floor((Math.random() * 12) + 1);
        numberCab.innerHTML = randomNumber;
        let randomNumberCode = Math.floor((Math.random() * 12000) + 1);
        codeUser.innerHTML = randomNumberCode;
    }
});




