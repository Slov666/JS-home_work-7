const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
function createListIngredients(elem) {
    const liRef = document.createElement('li');
    liRef.textContent = elem
    return liRef;
}
const createList = ingredients.map(el => createListIngredients(el))

const createContainerRef = document.querySelector('#ingredients');
createContainerRef.append(...createList);
