const input = document.querySelector('.input_sub');
const button = document.querySelector('.button_sub');
const error = document.querySelector('.label_hidden');

const linkSuccess = 'success.html';

button.addEventListener('click', () => {
    if(input.value.includes('@')) {
        localStorage.setItem('email', input.value);
        window.location.href = linkSuccess;
    } 
    else {
        error.classList.remove('hidden');
        input.classList.add('error_color');
    } 
})
