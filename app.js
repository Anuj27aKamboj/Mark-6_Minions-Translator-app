var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

outputDiv.innerText = "Hello"
console.log(txtInput)
console.log(outputDiv)

function clickHandler() {
    console.log("clicked!")
    console.log("input : ", txtInput.value)
    
}

btnTranslate.addEventListener("click", clickHandler)

