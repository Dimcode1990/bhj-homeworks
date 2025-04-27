let score = 0;
let misses = 0;
// document.getElementById("dead") = score;      по-идее так должно формироваться значение счётчиков на странице
// document.getElementById("lost") = misses;    если это добавляю - все вообще перестает работать ПРОШУ ПОМОЩИ!
function getHole(index) {
    return document.getElementById('hole' + index);
}

function showMole() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }
}


const holes = document.querySelectorAll('.hole');
holes.forEach((hole) => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            // Попадание по кроту
            score++;

            if (score === 10) {
                alert('Победа! Вы набрали 10 очков.');
                score = 0;
                misses = 0;
            }
        } else {
            // Промах
            misses++;
            if (misses === 5) {
                alert('Игра окончена! Вы проиграли.');
                score = 0;
                misses = 0;
            }
        }
        showMole();
    });
});