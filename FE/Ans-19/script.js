const displayAlert = message => {
    const alert = `<h2 class="alert">${message}</h2>`;
    document.querySelector('.alert-message').innerHTML = alert;
    setTimeout(() => document.querySelector('.alert-message').innerHTML = '', 1000);
};

const validate = string => {
    const hexValues = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    color = '#';
    let error;

    if(string[0] === '#') {
        string.shift();
    } else {
        displayAlert('*check your Hex Color Value');
        error = true;
    };

    if(string.length === 3 || string.length === 6) {
        string.forEach(element => {
            if(hexValues.includes(element)) {
                color += element;
            } else {
                displayAlert('*check your Hex Color Value');
                error = true;
            };
        });
    } else {
        displayAlert('*check your Hex Color Value');
        error = true;
    };
    return error ? '#ffffff' : color;
};

const changeBackgroundColor = () => {
    const inputValue = document.querySelector('#input-value');

    const color = validate(inputValue.value.split(''));

    document.body.style.backgroundColor = color;
    inputValue.value = '';
};

document.querySelector('#btn').addEventListener('click', changeBackgroundColor);