let wins = 0;    // счетчик попаданий (убитых кротов)
let losses = 0;  // счетчик промахов

// элементы счетчиков
const deadElem = document.getElementById('dead');
const lostElem = document.getElementById('lost');

// Функция возврата элемента лунки по индексу (1..9)
function getHole(index) {
  return document.getElementById('hole' + index);
}

// Функция сброса игры: обнуление счетчики и вывод alert
function resetGame() {
  wins = 0;
  losses = 0;
  deadElem.textContent = wins;
  lostElem.textContent = losses;
  alert('Игра началась заново!');
}

// Добавляем обработчики клика для каждой из 9 лунок
for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function() {
    if (hole.classList.contains('hole_has-mole')) {
      wins++;
      deadElem.textContent = wins;
      if (wins >= 10) {
        alert('Поздравляем! Вы выиграли!');
        resetGame();
      }
    } else {
      losses++; 
      lostElem.textContent = losses;
      if (losses >= 5) {
        alert('Игра окончена! Вы проиграли.');
        resetGame();
      }
    }
  };
}