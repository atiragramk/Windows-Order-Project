import checkInputNumbers from "./checkInputNumbers";
import { hideModal } from "./modals";

const form = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),

          message = {
            success: 'Спасибо! Мы скоро свяжемся с Вами',
            loading: 'Загрузка',
            failure: 'Что-то пошло не так'
          };

    checkInputNumbers('[name="user_phone"]');

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch (url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach (item => {
            item.value = '';
        });
    };

    
    forms.forEach (item => {
        item.addEventListener ('submit', (e) => {
            e.preventDefault();
            let status = document.createElement('div');
            status.classList.add('status');
            item.appendChild(status);

            const formData = new FormData(item); 
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            postData('assets/server.php', formData)
                .then (res => {
                    console.log(res);
                    status.textContent = message.success;
                })
                .catch (() => status.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout (() => {
                        status.remove();
                    }, 5000);
                    for (const prop of Object.getOwnPropertyNames(state)) {
                        delete state[prop];
                    }           
                    if (item.getAttribute('data-calc') === "end") {
                        setTimeout(() => {
                            hideModal('.popup_calc_end');
                        },2000);
                    }
                });
        });
    });
};

export default form;