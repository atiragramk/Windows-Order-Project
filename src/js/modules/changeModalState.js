import checkInputNumbers from "./checkInputNumbers";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img '),
          width = document.querySelectorAll('#width'),
          height = document.querySelectorAll('#height'),
          type = document.querySelectorAll('#view_type'),
          profile = document.querySelectorAll('.checkbox');




    checkInputNumbers('#width');
    checkInputNumbers('#height');

    function setState (elem, prop, activeClass) {
        elem.forEach((item, i) => {
            if (item.classList.contains(activeClass)) {
                state[prop] = i;
            } else if (item.nodeName == 'SELECT') {
                state[prop] = item.value;
            }
        });
    }


    function pushState (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                setState(windowForm, 'form', 'do_image_more');
                setState(type, 'type');
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }
    pushState('click', windowForm, 'form');
    pushState('input', width, 'width');
    pushState('input', height, 'height');
    pushState('change', type, 'type');
    pushState('change', profile, 'profile');
};

export default changeModalState;