//3
const firstNumber = document.getElementById("firstNumber")
const secondNumber = document.getElementById("secondNumber")
const operations = document.getElementById("operations")
const conclution = document.getElementById("conclution")
let equal = Number
function reaction() {
    if (operations = "*") {
        equal = firstNumber * secondNumber
        console.log(equal)
        conclution.innerHTML = Number

    }
    else if (operations = "/") {
        equal = firstNumber * secondNumber
        console.log(equal)
        conclution.innerHTML = Number
    }
    else if (operations = "+") {
        equal = firstNumber * secondNumber
        console.log(equal)
        conclution.innerHTML = Number
    }
    else if (operations = "-") {
        equal = firstNumber * secondNumber
        console.log(equal)
        conclution.innerHTML = Number
    }

}
conclution.addEventListener("click", reaction)

console.log(conclution)


//4
const button = document.getElementById("add")
function addInput() {
    firs = document.createElement("input")
    document.body.insertBefore(firs, button)
}
button.addEventListener("click", addInput)
console.log(button)

//5
const delet = document.getElementById("delete")
function reaction() {
    delet.remove()
}
delet.addEventListener("click", reaction)
//6
const change = document.getElementById("change")
function changeColor() {

    change.style.backgroundColor = prompt("на какой цвет вы хотите поменять?")
}
change.addEventListener("click", changeColor)
console.log(change)

