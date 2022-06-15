// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.26 € al km)
// va applicato uno sconto del 15% per i minorenni
// va applicato uno sconto del 35% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.


const kmTravel = document.querySelector(`#km-travel`);
const userAge = document.querySelector(`#age-user`);
const priceBox = document.querySelector(`#price`);

const sendButton = document.querySelector(`#btn-send`);
sendButton.addEventListener(`click`, function(){
    console.log(document.querySelector(`#km-travel`).value);
    console.log(document.querySelector(`#age-user`).value);
    let priceTicket = kmTravel.value * 0.26;
     if (userAge.value < 18) {
        priceTicket = priceTicket - ((priceTicket * 15) / 100);
        console.log(`il passeggero è minorenne, il prezzo del biglietto è: € ${priceTicket.toFixed(2)}`);
        priceBox.innerHTML += priceTicket.toFixed(2);
    } else if (userAge.value > 65) {
        priceTicket = priceTicket - ((priceTicket * 35) / 100);
        console.log(`il passeggero è un over 65, il prezzo del biglietto è: € ${priceTicket.toFixed(2)}`);
        priceBox.innerHTML += priceTicket.toFixed(2);
    } else {
        console.log(`Il prezzo del biglietto è: € ${priceTicket.toFixed(2)}`);
        priceBox.innerHTML += priceTicket.toFixed(2);
    }
});




