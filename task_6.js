const inputRef = document.querySelector('#validation-input');
const dataInput = inputRef.dataset.length;

inputRef.addEventListener('blur', acceptedInput);
function acceptedInput(event) {
    const userValue = event.target.value.length;
    if (userValue < dataInput) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
    if (userValue >= dataInput) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    if (userValue === '') {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid')
    }
    
}

