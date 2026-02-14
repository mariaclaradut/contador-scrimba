let btnError = document.querySelector("#btn-error")

btnError.addEventListener("click", function error() {
    let error = document.querySelector("#error")
    if (error.style.display === "block") {
        error.style.display = "none"
    }
    else {
        error.style.display = "block"
    }
})

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cardsEl = document.querySelector("#cards-el")
let instructions = document.querySelector("#instructions")
let sumEl = document.querySelector("#sum-el")
let btnNewCard = document.querySelector("#btn-new-card")
let btnNewGame = document.querySelector("#btn-new-game")

cardsEl.textContent += firstCard + " - " + secondCard

function getRandomCard() {
    return Math.floor((Math.random() * 10) + 1)
}

let sum = firstCard + secondCard
sumEl.textContent = "Soma: " + sum
verificarSoma(sum)

function verificarSoma(sum) {
    if (sum < 21) {
        instructions.textContent = "Ainda pode comprar mais cartas 🙂"
        btnNewCard.style.display = "block"
    } else {
        if (sum === 21) {
            instructions.textContent = "Você tem Blackjack! 🥳"
            btnNewCard.style.display = "none"
            btnNewGame.style.display = "block"
        } else {
            instructions.textContent = "Você perdeu 😭"
            btnNewCard.style.display = "none"
            btnNewGame.style.display = "block"
        }
    }
}


btnNewCard.addEventListener("click", comprarMais)
function comprarMais() {
    let newCard = getRandomCard()
    sum += newCard
    sumEl.textContent = "Soma: " + sum
    cardsEl.textContent += " - " + newCard
    verificarSoma(sum)
}

btnNewGame.addEventListener("click", novoJogo)
function novoJogo() {
    location.reload()
}