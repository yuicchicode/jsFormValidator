let yValidator = {
    handleSubmit:(e) => {
        e.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++) {
            let input = inputs [i];
            let check = yValidator.checkInput(input);
            if(check !== true) {
                send = false;
                yValidator.showError(input, check)
            }
        }

        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
            rules = rules.split('|');
            for(let k in rules) {
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == '') {
                            return 'campo não pode ser vazio.';
                        }
                    break;
                    case 'min':
                    break;    
                }
            }
        }

        return true;
    },
    showError:(input, error) => {
        input.style.borderColor = '#ff0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', yValidator.handleSubmit);