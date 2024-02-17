import { modal } from './modal.js'

//variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const alertError = document.querySelector('.alert-error')



form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    modal.message.innerText = `Seu IMC é de ${result}`
    modal.open()
}



function IMC (weight, height){
    return (weight/ ((height / 100) ** 2)).toFixed(2)
}