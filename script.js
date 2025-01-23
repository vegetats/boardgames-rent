function changeStatus(id) {
    let clickedGame = document.getElementById(`game-${id}`);
    let clickedButton = clickedGame.querySelector('.dashboard__item__button');

    if(clickedButton.classList.contains('dashboard__item__button__disabled')) {
        clickedButton.classList.remove('dashboard__item__button__disabled')
        clickedButton.textContent = 'Alugar'
    } else { 
        clickedButton.classList.add('dashboard__item__button__disabled')
        clickedButton.textContent = 'Devolver'
    }
        
}
