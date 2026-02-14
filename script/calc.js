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

let num1 = 8
let num2 = 2

document.querySelector("#num1-el").textContent = num1
document.querySelector("#num2-el").textContent = num2

let btnAdd = document.querySelector("#btn-add")
let btnSubtract = document.querySelector("#btn-subtract")
let btnDivide = document.querySelector("#btn-divide")
let btnMultiply = document.querySelector("#btn-multiply")
let resultEl = document.querySelector("#sum-el")
let symbol = document.querySelector("#symbol")

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
