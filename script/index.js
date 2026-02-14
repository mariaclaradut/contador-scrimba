let countEl = document.getElementById("count-el")
let btnIncrement = document.getElementById("btn-increment")
let saveEl = document.getElementById("save-el")
let btnSave = document.getElementById("btn-save")
let count = 0


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
