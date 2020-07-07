const inputRef = document.querySelector('input[type="number"]');
const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnDelRef = document.querySelector('button[data-action="destroy"]');
const boxContainerRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', () => {
  const inputValue = inputRef.value;
    createElement(inputValue)
});
btnDelRef.addEventListener('click', clearElement);

function colorRandom() {
    return Math.floor(Math.random() * 256)
}
function createElement(amount) {
    const basicSize = 30;
    for (let i = 0; i < amount; i += 1) {
        let size = basicSize + i * 10;
        const box = document.createElement('div');
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = `rgb(${colorRandom()},${colorRandom()},${colorRandom()})`;
        boxContainerRef.append(box);
    }
}
function clearElement(){
    boxContainerRef.innerHTML = '';
}