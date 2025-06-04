document.addEventListener('DOMContentLoaded', () => {
  // Переменная для текущей открытой подсказки
  let activeTooltip = null;

  // Обработчик клика по документу
  document.body.addEventListener('click', (event) => {
    // Проверяем, кликнули ли по элементу с классом has-tooltip
    const tooltipTrigger = event.target.closest('.has-tooltip');

    // Если клик вне подсказки и вне триггера — закрываем активную подсказку
    if (!tooltipTrigger) {
      if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
      }
      return;
    }

    // Предотвращаем переход по ссылке
    event.preventDefault();

    // Если уже есть открытая подсказка, удаляем ее
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }

    // Получаем текст подсказки из атрибута title
    const text = tooltipTrigger.getAttribute('title');
    if (!text) return;

    // Создаем элемент подсказки
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = text;

    // Добавляем подсказку в DOM
    document.body.appendChild(tooltip);

    // Вычисляем позицию подсказки относительно триггера
    const triggerRect = tooltipTrigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Располагаем подсказку под текстом, по центру
    let top = window.scrollY + triggerRect.bottom + 5; // 5px отступ
    let left = window.scrollX + triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;

    // Проверяем, чтобы подсказка не вышла за левый край
    if (left < 0) left = 0;

    // Проверяем, чтобы подсказка не вышла за правый край окна
    const maxLeft = window.scrollX + document.documentElement.clientWidth - tooltipRect.width;
    if (left > maxLeft) left = maxLeft;

    // Устанавливаем позицию подсказки
    tooltip.style.position = 'absolute';
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;

    // Запоминаем текущую активную подсказку
    activeTooltip = tooltip;
  });
});