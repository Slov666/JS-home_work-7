const spanRef = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");

inputRef.addEventListener("input", onInputRange);

function onInputRange() {
  const inputValue = inputRef.value;           // <= можем написать .target.value 
  spanRef.style.fontSize = inputValue + "px";  //  или взять свойство напрямую
}


const inputRangeRef = document.querySelector('#font-size-control');
const modifiedTextRef = document.querySelector('#text');


inputRangeRef.addEventListener('input', handleChangeRange);

function handleChangeRange(){
    const inputValue = inputRangeRef.value;
    modifiedTextRef.style.fontSize = `${inputValue}px`;
}
