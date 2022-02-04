// import { bind } from "core-js/library/es6/function";


const modals = () => {
    function bindModals (triggerSelector, modalSelector, closeBtnSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
              closeBtn = document.querySelectorAll(closeBtnSelector),
              modal = document.querySelector(modalSelector),
              modals = document.querySelectorAll('[data-modal]'),
              width = document.querySelector('#width'),
              height = document.querySelector('#height'),
              profile = document.querySelectorAll('.checkbox');
        
    const message = document.createElement('div');
    
    message.classList.add('status');
    

        trigger.forEach( el => {
            el.addEventListener('click', (e) => {             
                if (el.getAttribute('data-btn') == "next") {
                    e.preventDefault();
                    if (width.value !== '' && height.value !== '') {
                        width.style.border = "1px solid #ccc";
                        height.style.border = "1px solid #ccc";
                        message.remove();
                        modals.forEach(item => {
                            item.style.display = 'none';
                        });
                        showModal(modalSelector);
                    } else {
                        width.style.border = "1px solid red";
                        height.style.border = "1px solid red";
                        el.before(message);
                        message.textContent = 'Вы ввели не все данные';
                    }
                } else if (el.getAttribute('data-btn') == "next2") {
                    e.preventDefault();
                    profile.forEach(item => {
                        if (item.checked) {
                            message.remove();
                            modals.forEach(item => {
                                item.style.display = 'none';
                            });
                            showModal(modalSelector);
                        } else {
                            el.before(message);
                            message.textContent = 'Выберите тип остекления';
                        }

                    });
                } else {
                    e.preventDefault(); 
                    modals.forEach(item => {
                        item.style.display = 'none';
                    });
                    showModal(modalSelector);
                }
            });
        });

        closeBtn.forEach( el => {
            el.addEventListener('click', () => {
                modals.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modals.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none"; 
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }
        });
       
    }
    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModals('.phone_link', '.popup', '.popup_close');
    bindModals('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

};


function showModal(modalSelector) {
    const modal = document.querySelector (modalSelector);
    modal.style.display = "block";
    document.body.classList.add('modal-open');
    document.body.style.marginRight = `${calcScroll()}px`;
}

function hideModal(modalSelector) {
    const modal = document.querySelector (modalSelector);
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
    document.body.style.marginRight = `0px`;
}

function calcScroll () {
    let elem = document.createElement('div');
    elem.style.width = "50px";
    elem.style.height = "50px";
    elem.style.overflowY = "scroll";
    elem.style.visibility = "hidden";
    document.body.appendChild(elem);
    let scroll = elem.offsetWidth - elem.clientWidth;
    elem.remove();

    return scroll;
}

export {showModal, hideModal, calcScroll};
export default modals;