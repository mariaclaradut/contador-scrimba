let btnError = document.querySelector("#btn-error")

btnError.addEventListener("click", function error() {
    let error = document.getElementById("error")
    if (error.style.display === "block") {
        error.style.display = "none"
    }
    else {
        error.style.display = "block"
    }
})


// Números inseridos
let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

// Elementos do HTML
let btnAdd = document.getElementById("btn-add")
let btnSubtract = document.getElementById("btn-subtract")
let btnDivide = document.getElementById("btn-divide")
let btnMultiply = document.getElementById("btn-multiply")
let resultEl = document.getElementById("sum-el")
let symbol = document.getElementById("symbol")

// Botão de adição
btnAdd.addEventListener("click", function add() {
    doOperation("add")
})

// Botão de subtração
btnSubtract.addEventListener("click", function subtract() {
    doOperation("subtract")
})

// Botão de divisão
btnDivide.addEventListener("click", function divide() {
    doOperation("divide")
})

// Botão de multiplicação
btnMultiply.addEventListener("click", function multiply() {
    doOperation("multiply")
})

function getInputValues() {
    let num1 = document.getElementById("num1-el").valueAsNumber
    let num2 = document.getElementById("num2-el").valueAsNumber
    return [num1, num2]
}

function checkInput() {
    let [num1, num2] = getInputValues()
    if (isNaN(num1) || isNaN(num2)) {
        resultEl.textContent = "Resultado Inválido"
        alert("Por favor, insira um número válido em ambos os campos.")
        return false
    }
    else {
        return true
    }
}

// Realiza a operação matemática
function doOperation(operation) {
    if (checkInput() === false) {
        return; 
    }
    let [num1, num2] = getInputValues()
    if (operation === "add") {
        let result = num1 + num2
        resultEl.textContent = "Resultado: " + result
        symbol.textContent = "+"
    } else if (operation === "subtract") {
        let result = num1 - num2
        resultEl.textContent = "Resultado: " + result
        symbol.textContent = "-"
    } else if (operation === "divide") {
        let result = num1 / num2
        resultEl.textContent = "Resultado: " + result
        symbol.textContent = "/"
    } else if (operation === "multiply") {
        let result = num1 * num2
        resultEl.textContent = "Resultado: " + result
        symbol.textContent = "×"
    }
}



