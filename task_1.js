const categoryCount = document.querySelectorAll('.item');
console.log(`Всего  ${categoryCount.length} категории`);

const categoryh2 = Array.from(categoryCount);
const categoryLi = Array.from(document.querySelectorAll('ul#categories>li.item>ul'));

const title = categoryh2.map(el => el.children[0].textContent);
const list = categoryLi.map(el => el.children.length);

function category(title, list) {
    for (let i = 0; i < title.length; i += 1){
        console.log(`Категории ${title[i]}
Количество элементов ${list[i]}`);
        
    }
}
category(title, list)