document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');
  const fontSizeControls = book.querySelectorAll('.font-size');

  fontSizeControls.forEach(control => {
    control.addEventListener('click', (event) => {
      event.preventDefault(); // Отменяем переход по ссылке

      // Удаляем класс font-size_active у всех элементов
      fontSizeControls.forEach(el => el.classList.remove('font-size_active'));

      // Добавляем класс font-size_active к текущему элементу
      control.classList.add('font-size_active');

      // Удаляем классы размера шрифта у блока book
      book.classList.remove('book_fs-big', 'book_fs-small');

      // Добавляем соответствующий класс в зависимости от data-атрибута или класса
      if (control.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
      } else if (control.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
      }
      // Если это средний размер (нет ни big, ни small), то дополнительных классов не добавляем
    });
  });
});