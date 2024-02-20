import { modal } from './modal.js'
import { alertError } from './alert-error.js';
import { IMC, notNumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = function (event) {
event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber (height)

    if (showAlertError){
        alertError.open()
        return;
    }

    alertError.close()

    const result = IMC(weight, height)
    modal.message.innerText = `Seu IMC é de ${result}`
    modal.open()
}

// form.oninput = (event) => {
//     alertError.close()
// }

form.addEventListener('input', clearError)

function clearError(event){
    alertError.close()
}