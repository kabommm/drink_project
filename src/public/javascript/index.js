'use strict';
const drinkPage = document.querySelectorAll('.drink__page');
const pageArr = ['/drink-test/index', '/drink-shop/index']; //drink-test/index , drink-shop/index
// pageArr자체는 innerText , => 이에 따른 url은 fetch parameter..!! 
drinkPage.forEach((value,index) => {
    value.addEventListener('click', () => {
        drinkFetch(pageArr[index]);
    }) 
})

function drinkFetch(api){
    fetch(`${api}`)
    .then(() => {
        return window.location.href = `${api}`;
    })
}