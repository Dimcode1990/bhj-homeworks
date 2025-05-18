// Функция, которая проверяет позицию каждого элемента с классом "reveal"
function revealOnScroll() {
    // Получаем все элементы с классом "reveal"
    const reveals = document.querySelectorAll('.reveal');
    
    // Высота видимой части окна браузера
    const windowHeight = window.innerHeight;
    
    // Проходим по каждому элементу
    reveals.forEach((el) => {
      // Получаем координату верхнего края элемента относительно видимой части окна
      const elementTop = el.getBoundingClientRect().top;
      
      // Порог видимости - сколько пикселей элемента должно быть видно, чтобы добавить класс
      const elementVisible = 150;
      
      // Если верхняя часть элемента находится выше нижней границы окна минус порог,
      // значит элемент виден (или почти виден)
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('reveal_active'); // добавляем класс
      } else {
        el.classList.remove('reveal_active'); // удаляем класс, если элемент вышел из зоны видимости
      }
    });
  }
  
  // Добавляем обработчик события прокрутки страницы
  window.addEventListener('scroll', revealOnScroll);
  
  // Запускаем функцию один раз при загрузке страницы, чтобы проверить видимость элементов сразу
  revealOnScroll();