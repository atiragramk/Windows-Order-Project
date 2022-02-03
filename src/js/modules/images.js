import { hideModal, showModal } from "./modals";

const images = () => {

    const imgArea = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          imgPopup = document.createElement('div');

    imgPopup.classList.add('popup_img');
    bigImg.classList.add('myimage');
    imgArea.appendChild(imgPopup);
    imgPopup.appendChild(bigImg);

    imgArea.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('preview')) {
            bigImg.src = e.target.parentNode.href;
            imgPopup.style.display = "flex"; 
            document.body.classList.add('modal-open');     
        }
        imgPopup.addEventListener('click', () => {
            hideModal('.popup_img');
        });
    });
};


export default images;