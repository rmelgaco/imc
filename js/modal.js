export const modal = {
    
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open(){
        modal.wrapper.classList.add('open')
    },
    close(){
        modal.wrapper.classList.remove('open')
    }
}

modal.btnClose.onclick = () =>  modal.close();

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown (event) {
    if (event.key === 'Escape'){
        modal.close();
    }
}