let body = document.querySelector('body')
let input = document.querySelector('input')
let Form = document.querySelector('form')
let h1 = document.querySelector('h1')
const bgChange = (e)=>{
    e.preventDefault()
    body.style.background = input.value
    Form.reset()
}

Form.addEventListener("submit", bgChange)