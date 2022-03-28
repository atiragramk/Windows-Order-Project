import './slider';

import modals from './modules/modals';
import {showModal} from './modules/modals';
import tabs from './modules/tabs';
import form from './modules/forms';
import timer from './modules/timer';
import changeModalState from './modules/changeModalState';
import images from './modules/images';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    let modalState = {};

    changeModalState(modalState);

    modals();
    setTimeout(() => showModal('.popup'), 60000);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    form(modalState);
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    timer('.timer1', '2022-05-05');
    images();


});
