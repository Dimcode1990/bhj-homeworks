const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const listItem = document.getElementsByClassName('dropdown__item');

button.addEventListener('click', function() {
  list.classList.add('dropdown__list_active');
})

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', function(event) { // event требуется, чтобы сработал запрет перехода по ссылке
      event.preventDefault(); // запрет перехода по ссылке
      button.textContent = listItem[i].textContent;
      list.classList.remove('dropdown__list_active');
  });
}