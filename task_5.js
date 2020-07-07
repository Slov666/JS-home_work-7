const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    if (event.target.value === '') {
        spanRef.textContent = 'незнакомец';
    } else {
        spanRef.textContent = event.target.value;
    }
})