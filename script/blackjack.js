// Botão de erro
let btnError = document.getElementById("btn-error")

btnError.addEventListener("click", function error() {
    let error = document.getElementById("error")
    if (error.style.display === "block") {
        error.style.display = "none"
    }
    else {
        error.style.display = "block"
    }
})

// Elementos do HTML
let cardsEl = document.getElementById("cards-el")
let instructions = document.getElementById("instructions")
let sumEl = document.getElementById("sum-el")
let btnNewCard = document.getElementById("btn-new-card")
let btnNewGame = document.getElementById("btn-new-game")

// Variáveis do jogo
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

// Configurações iniciais do jogo
cardsEl.textContent += firstCard + " - " + secondCard
sumEl.textContent = "Soma: " + sum
verificarSoma(sum)

// Função que gera nova carta (1 a 11)
function getRandomCard() {
    return Math.floor((Math.random() * 11) + 1)
}

// Função que checa o estado do jogador (e atualiza os botões)
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

// Comprando nova carta
btnNewCard.addEventListener("click", 
    function comprarMais() {
        // Criando nova carta e adicionando ao deck
        let newCard = getRandomCard()
        cards.push(newCard)

        // Atualizando a soma e as cartas na tela
        sum += newCard
        sumEl.textContent = "Soma: " + sum
        cardsEl.textContent = "Cartas: " + cards.join(" - ")

        // Verificando o estado do jogador
        verificarSoma(sum)
    }
)

// Iniciando um novo jogo
btnNewGame.addEventListener("click", 
    function novoJogo() {
        location.reload()
    }
)