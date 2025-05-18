// Функция для запуска ротатора
function startRotator(rotator) {
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentIndex = 0;
  
  setInterval(() => {
    // Удаляем класс у текущего активного элемента
    cases[currentIndex].classList.remove('rotator__case_active');
    // Вычисляем индекс следующего элемента по кругу
    currentIndex = (currentIndex + 1) % cases.length;
    // Добавляем класс следующему элементу
    cases[currentIndex].classList.add('rotator__case_active');
  }, 1000);
}

// Находим все ротаторы на странице и запускаем для каждого свой ротатор
const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => startRotator(rotator));