let counterValue = 0;
const btnIncRef = document.querySelector('[data-action="increment"]');
const btnDecRef = document.querySelector('[data-action="decrement"]');
const cuntRef = document.querySelector('#value');


const increment = () => {
    cuntRef.textContent = counterValue += 1
};
const decrement = () => {
    cuntRef.textContent = counterValue -= 1
};

btnIncRef.addEventListener('click', increment);
btnDecRef.addEventListener('click', decrement);

