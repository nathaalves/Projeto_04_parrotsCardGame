
let timer
const cardsContainer = document.querySelector(".container")

startGame()  

function startGame() {

    let numberOfCards = prompt("Com quantas cartas você quer jogar?")

    while (numberOfCards%2 !== 0 || numberOfCards < 2 || numberOfCards > 14) {

        alert("Você deve inserir um número par de 2 a 14")
        numberOfCards = prompt("Com quantas cartas você quer jogar?")
    }

    let cards = []
    for (let i = 0; i < numberOfCards/2; i++) {

        for (let j = 0; j < 2; j++) {
            cards.push(`images/img${i}.gif`)
        }
    }

    cards.sort(function comparador() { 
        return Math.random() - 0.5; 
    })

    for ( let i = 0; i < numberOfCards; i++) {

        cardsContainer.innerHTML += `
        <div class="card fliped" onclick="flipCard(this)">
            <div class="cardFace front">
                <img src=${cards[i]} alt="">
            </div>
            <div class="cardFace back">
                <img src="images/front.png" alt="">
            </div>
        </div>`
    }

    timer = setInterval(timeCounter, 1000)
}

let unflipedCards = []
let unflipedCount = 0
let playCount = 0

function flipCard(fliped) {

    playCount += 1

    fliped.classList.remove("fliped")
    unflipedCards[unflipedCount] = fliped
    unflipedCount += 1

    fliped.setAttribute("onclick", "")

    if (unflipedCount === 2) {
        
        const temp1 = unflipedCards[0]
        const temp2 = unflipedCards[1]
        const img1 = temp1.querySelector("img").src
        const img2 = temp2.querySelector("img").src

        if (img1 !== img2) {

            setTimeout(flipCardsBack, 1000)
            function flipCardsBack () {
                
                temp1.classList.add("fliped")
                temp1.setAttribute("onclick", "flipCard(this)")
                temp2.classList.add("fliped")
                temp2.setAttribute("onclick", "flipCard(this)")
            }
        }
        
        unflipedCount = 0
    }

    setTimeout(win, 500)
}

function win() {

    if(document.querySelectorAll(".fliped").length === 0) {    

        clearInterval(timer)
        alert(`Você venceu em ${playCount} jogadas, com um tempo de ${document.querySelector(".stopwatch").innerHTML}`)

        let answer = prompt("Você quer jogar novamente? responda com 'sim' ou 'não'")

        while (answer !== "sim" && answer !== "não") {
            alert("A única opções de resposta é 'sim' ou 'não'")
            answer = prompt("Você quer jogar novamente? responda com 'sim' ou 'não'")
        }

        if (answer === "sim") {

            cardsContainer.innerHTML = ""
            playCount = 0
            sec = 0
            startGame()
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

    timerSec = (sec < 10) ? "0" + sec : sec

    if (min === 60) {
        hour++
        min = 0
    }
    
    timerMin = (min < 10) ? "0" + min : min

    if (hour > 24) {
        hour = 0
    }

    timerHour = (hour < 10) ? "0" + hour : hour

    document.querySelector(".stopwatch").innerHTML = `${timerHour}:${timerMin}:${timerSec}`
}