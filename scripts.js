let numberOfCards = prompt("Com quantas cartas você quer jogar?")

while (numberOfCards%2 !== 0 || numberOfCards < 2 || numberOfCards > 14) {

    alert("Você deve inserir um número par de 2 a 14")
    numberOfCards = prompt("Com quantas cartas você quer jogar?")

}