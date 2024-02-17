export const modal = {
    
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open(){
        modal.wrapper.classList.toggle('open')
    },
    close(){
        modal.wrapper.classList.toggle('open')
    }
}

modal.btnClose.onclick = () =>  modal.close()