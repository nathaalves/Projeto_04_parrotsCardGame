let numberOfCards = prompt("Com quantas cartas você quer jogar?")

while (numberOfCards%2 !== 0 || numberOfCards < 2 || numberOfCards > 14) {

    alert("Você deve inserir um número par de 2 a 14")
    numberOfCards = prompt("Com quantas cartas você quer jogar?")

}

for (let i = 1; i <= numberOfCards; i++) {

    let divElement = document.createElement("div")
    divElement.setAttribute("class", "card")
    document.querySelector(".container").appendChild(divElement);
    
}

const cards = document.querySelectorAll(".card")

for (let i = 0; i < cards.length; i++) {

    let imgElement = document.createElement("img")
    imgElement.setAttribute("src", "images/front.png")
    cards[i].appendChild(imgElement);
    
}