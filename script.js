
const buttonGameOne = document.getElementById('button-game1'); 
const buttonGameTwo = document.getElementById('button-game2');
const buttonGameThree = document.getElementById('button-game3'); 


buttonGameOne.addEventListener('click', () => {
    buttonGameOne.classList.toggle('dashboard__item__button');
    buttonGameOne.classList.toggle('dashboard__item__button__disabled');

    buttonGameOne.classList.contains('dashboard__item__button__disabled')
        ? buttonGameOne.textContent = 'Devolver'
        : buttonGameOne.textContent = 'Alugar'
});

buttonGameTwo.addEventListener('click',  () => {
    buttonGameTwo.classList.toggle('dashboard__item__button');
    buttonGameTwo.classList.toggle('dashboard__item__button__disabled');

    buttonGameTwo.classList.contains('dashboard__item__button__disabled')
        ? buttonGameTwo.textContent = 'Devolver'
        : buttonGameTwo.textContent = 'Alugar'
})

buttonGameThree.addEventListener('click',  () => {
    buttonGameThree.classList.toggle('dashboard__item__button');
    buttonGameThree.classList.toggle('dashboard__item__button__disabled');

    buttonGameThree.classList.contains('dashboard__item__button__disabled')
        ? buttonGameThree.textContent = 'Devolver'
        : buttonGameThree.textContent = 'Alugar'
      
});


