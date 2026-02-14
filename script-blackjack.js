let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cardsEl = document.getElementById("cards-el")
let instructions = document.getElementById("instructions")
let sumEl = document.getElementById("sum-el")
let btnComprarMais = document.getElementById("btn-comprar-mais")
let btnNovoJogo = document.getElementById("btn-novo-jogo")

cardsEl.textContent += firstCard + " - " + secondCard

function getRandomCard() {
    min = Math.ceil(2)
    max = Math.floor(11)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let sum = firstCard + secondCard
sumEl.textContent = "Soma: " + sum
verificarSoma(sum)

function verificarSoma(sum) {
    if (sum < 21) {
        instructions.textContent = "Ainda pode comprar mais cartas 🙂"
        btnComprarMais.style.display = "block"
    }
    else {
        if (sum === 21) {
            instructions.textContent = "Você tem Blackjack! 🥳"
            btnComprarMais.style.display = "none"
            btnNovoJogo.style.display = "block"
        }
        else {
            instructions.textContent = "Você perdeu 😭"
            btnComprarMais.style.display = "none"
            btnNovoJogo.style.display = "block"
        }
    }
}


btnComprarMais.addEventListener("click", comprarMais)
function comprarMais() {
    let newCard = getRandomCard()
    sum += newCard
    sumEl.textContent = "Soma: " + sum
    cardsEl.textContent += " - " + newCard
    verificarSoma(sum)
}

btnNovoJogo.addEventListener("click", novoJogo)
function novoJogo() {
    location.reload()
}