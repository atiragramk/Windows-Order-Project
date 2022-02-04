import { hideModal, showModal, calcScroll } from "./modals";


const images = () => {

    const imgArea = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          imgPopup = document.createElement('div');

    imgPopup.classList.add('popup_img', 'fadeIn');
    imgPopup.style.animationDuration = "0.3s";
    bigImg.classList.add('myimage');
    imgArea.appendChild(imgPopup);
    imgPopup.appendChild(bigImg);

    imgArea.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('preview')) {
            bigImg.src = e.target.parentNode.href;
            imgPopup.style.display = "flex"; 
            document.body.classList.add('modal-open');
            document.body.style.marginRight = `${calcScroll()}px`;     
        }
        imgPopup.addEventListener('click', () => {
            hideModal('.popup_img');
        });
    });
};


export default images;