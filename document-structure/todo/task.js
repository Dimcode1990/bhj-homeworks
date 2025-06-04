// Получаем ссылки на необходимые элементы DOM
const form = document.getElementById('tasks__form');       // Форма с input и кнопкой
const input = document.getElementById('task__input');       // Поле ввода задачи
const tasksList = document.getElementById('tasks__list');   // Контейнер для списка задач

// Функция для создания и возвращения нового элемента задачи
function createTaskElement(taskText) {
  // Создаём корневой div задачи с классом "task"
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  // Создаём вложенный div для заголовка задачи
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('task__title');
  titleDiv.textContent = taskText; // Добавляем текст задачи

  // Создаём ссылку-кнопку удаления задачи
  const removeLink = document.createElement('a');
  removeLink.href = '#';
  removeLink.classList.add('task__remove');
  removeLink.innerHTML = '&times;'; // Символ крестика

  // Навешиваем обработчик удаления задачи на кнопку удаления
  removeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    tasksList.removeChild(taskDiv); // Удаляем задачу из списка
  });

  // Вкладываем заголовок и кнопку удаления в корневой div задачи
  taskDiv.appendChild(titleDiv);
  taskDiv.appendChild(removeLink);

  return taskDiv;
}

// Обработчик события отправки формы (нажатие Enter или кнопки "Добавить")
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

  const taskText = input.value.trim(); // Получаем текст из поля ввода и убираем пробелы

  // Если поле не пустое, создаём и добавляем новую задачу
  if (taskText !== '') {
    const newTask = createTaskElement(taskText);
    tasksList.appendChild(newTask);

    input.value = ''; // Очищаем поле ввода
    input.focus();    // Возвращаем фокус в поле ввода для удобства
  }
});