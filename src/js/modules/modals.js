

const modals = () => {
    function bindModals (triggerSelector, modalSelector, closeBtnSelector) {

        const trigger = document.querySelectorAll (triggerSelector),
              modal = document.querySelector (modalSelector),
              closeBtn = document.querySelectorAll (closeBtnSelector);

        trigger.forEach( el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                showModal(modalSelector);
                // modal.style.display = "block";
                // document.body.classList.add('modal-open');
            });
        });

        closeBtn.forEach( el => {
            el.addEventListener('click', () => {
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none"; 
                document.body.classList.remove('modal-open');
            }

        });
    }


    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModals('.phone_link', '.popup', '.popup_close');


};

function showModal(modalSelector) {
    const modal = document.querySelector (modalSelector);
    modal.style.display = "block";
    document.body.classList.add('modal-open');
}

export {showModal};
export default modals;