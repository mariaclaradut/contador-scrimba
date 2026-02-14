let countEl = document.querySelector("#count-el")
let btnIncrement = document.querySelector("#btn-increment")
let saveEl = document.querySelector("#save-el")
let btnSave = document.querySelector("#btn-save")
let count = 0

let btnError = document.querySelector("#btn-error")

btnIncrement.addEventListener("click", function increment() {
    count += 1
    countEl.innerText = count
})


function resetCount() {
    count = 0
    countEl.textContent = count
}

btnSave.addEventListener("click", function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    resetCount()
})

btnError.addEventListener("click", function error() {
    let error = document.querySelector("#error")
    if (error.style.display === "block") {
        error.style.display = "none"
    }
    else {
        error.style.display = "block"
    }
})

