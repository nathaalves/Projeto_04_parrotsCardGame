let numberOfCards = prompt("Com quantas cartas você quer jogar?")

while (numberOfCards%2 !== 0 || numberOfCards < 2 || numberOfCards > 14) {

    alert("Você deve inserir um número par de 2 a 14")
    numberOfCards = prompt("Com quantas cartas você quer jogar?")

}

let sortCards = []
let cont = 0
for (let i = 0; i < numberOfCards/2; i++) {

    for (let j = 0; j < 2; j++) {
        sortCards[cont] = i
        cont++
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

sortCards.sort(comparador)

let card = []
let cardFront = []
let cardBack = []

for ( let i = 0; i < numberOfCards; i++) {

    card[i] = document.createElement("div")
    card[i].setAttribute("class", "card")
    card[i].setAttribute("onclick", "flipCard(this)")
    document.querySelector(".container").appendChild(card[i]);

    cardFront[i] = document.createElement("div")
    cardFront[i].setAttribute("class", "cardFace front")
    card[i].appendChild(cardFront[i])

    cardBack[i] = document.createElement("div")
    cardBack[i].setAttribute("class", "cardFace back")
    card[i].appendChild(cardBack[i])

    let imgFront = document.createElement("img")
    imgFront.setAttribute("src", "images/front.png")
    cardFront[i].appendChild(imgFront);

    let imgBack = document.createElement("img")
    imgBack.setAttribute("src", `images/img${sortCards[i]}.gif`)
    cardBack[i].appendChild(imgBack);
    
}

function flipCard(fliped) {
    fliped.classList.toggle("fliped")
}

