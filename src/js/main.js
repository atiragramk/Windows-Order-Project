import './slider';

import modals from './modules/modals';
import {showModal} from './modules/modals';
import tabs from './modules/tabs';
import form from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    
    modals();
    setTimeout(() => showModal('.popup'), 60000);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    form();


});
