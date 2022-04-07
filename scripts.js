
let numberOfCards = ""
let timer

startGame()  

function startGame() {

    numberOfCards = prompt("Com quantas cartas você quer jogar?")

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
        card[i].setAttribute("class", "card fliped")
        card[i].setAttribute("onclick", "flipCard(this)")
        document.querySelector(".container").appendChild(card[i]);

        cardFront[i] = document.createElement("div")
        cardFront[i].setAttribute("class", "cardFace front")
        card[i].appendChild(cardFront[i])

        cardBack[i] = document.createElement("div")
        cardBack[i].setAttribute("class", "cardFace back")
        card[i].appendChild(cardBack[i])

        let imgFront = document.createElement("img")
        imgFront.setAttribute("src", `images/img${sortCards[i]}.gif`)
        cardFront[i].appendChild(imgFront);

        let imgBack = document.createElement("img")
        imgBack.setAttribute("src", "images/front.png")
        cardBack[i].appendChild(imgBack);
        
    }

    timer = setInterval(timeCounter, 1000)

}

let flipedCards = []
let flipedCount = 0
let playCount = 0

function flipCard(fliped) {

    fliped.classList.toggle("fliped")
    flipedCards[flipedCount] = fliped
    flipedCount += 1

    fliped.setAttribute("onclick", "")

    playCount += 1

    if (flipedCount === 2) {

        const img1 = flipedCards[0].querySelector("img").src
        const img2 = flipedCards[1].querySelector("img").src

        if (img1 === img2) {

            flipedCards[0].classList.add("ok")
            flipedCards[1].classList.add("ok")

        } else {

            setTimeout(flipCardsBack, 1000)
            function flipCardsBack () {
                for (let i = 0; i < 2; i++) {
                    flipedCards[i].classList.toggle("fliped")
                    flipedCards[i].setAttribute("onclick", "flipCard(this)")
                }
            }
        }
        flipedCount = 0
    }

    setTimeout(win, 500)
    function win() {
        if(document.querySelectorAll(".ok").length === Number(numberOfCards)) {            
            clearInterval(timer)
            alert(`Você venceu em ${playCount} jogadas, em um tempo de ${document.querySelector(".stopwatch").innerHTML}`)

            answer = prompt("Você quer jogar novamente? responda com 'sim' ou 'não'")

            while (answer !== "sim" && answer !== "não") {
                alert("As únicas opções de resposta é 'sim' ou 'não'")
                answer = prompt("Você quer jogar novamente? responda com 'sim' ou 'não'")
            }

            if (answer === "sim") {
                let cards = document.querySelectorAll(".card")
                for (let i = 0; i < numberOfCards; i++) {
                    cards[i].remove()
                }
                playCount = 0
                sec = 0
                startGame()
            }
        }
    }
}

let sec = 0
let min = 0
let hour = 0

function timeCounter () {

    sec++

    if (sec === 60) {
        min++
        sec = 0
    }
    if (sec < 10) {
        timerSec = "0" + sec
    } else {
        timerSec = sec
    }

    if (min === 60) {
        hour++
        min = 0
    }
    if (min < 10) {
        timerMin = "0" + min
    } else {
        timerMin = min
    }

    if (hour > 24) {
        hour = 0
    }
    if (hour < 10) {
        timerHour = "0" + hour
    } else {
        timerHour = hour
    }    

    document.querySelector(".stopwatch").innerHTML = `${timerHour}:${timerMin}:${timerSec}`

}

