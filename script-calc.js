let btnError = document.getElementById("btn-error")

btnError.addEventListener("click", function error() {
    let error = document.getElementById("error")
    if (error.style.display === "block") {
        error.style.display = "none"
    }
    else {
        error.style.display = "block"
    }

    error.classList.toggle("hidden")
})

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let btnAdd = document.getElementById("btn-add")
let btnSubtract = document.getElementById("btn-subtract")
let btnDivide = document.getElementById("btn-divide")
let btnMultiply = document.getElementById("btn-multiply")
let resultEl = document.getElementById("sum-el")
let symbol = document.getElementById("symbol")

btnAdd.addEventListener("click", function add() {
    let result = num1 + num2
    resultEl.textContent = "Resultado: " + result
    symbol.textContent = "+"
})

btnSubtract.addEventListener("click", function subtract() {
    let result = num1 - num2
    resultEl.textContent = "Resultado: " + result
    symbol.textContent = "-"
})

btnDivide.addEventListener("click", function divide() {
    let result = num1 / num2
    resultEl.textContent = "Resultado: " + result
    symbol.textContent = "/"
})

btnMultiply.addEventListener("click", function multiply() {
    let result = num1 * num2
    resultEl.textContent = "Resultado: " + result
    symbol.textContent = "×"
})
