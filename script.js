let countEl = document.getElementById("count-el")
let btnIncrement = document.getElementById("btn-increment")
let saveEl = document.getElementById("save-el")
let btnSave = document.getElementById("btn-save")
let count = 0

let btnError = document.getElementById("btn-error")

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
    let error = document.getElementById("error")
    if (error.style.display === "block") {
        error.style.display = "none"
    }
    else {
        error.style.display = "block"
    }

    error.classList.toggle("hidden")
})

