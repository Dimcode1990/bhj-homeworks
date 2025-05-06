const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        // Если эта вкладка уже активна, ничего не делаем
        if (tab.classList.contains('tab_active')) return;

        // Удаляем активные классы у всех вкладок и контента
        tabs.forEach(t => t.classList.remove('tab_active'));
        tabContents.forEach(tc => tc.classList.remove('tab__content_active'));

        // Добавляем активные классы к выбранной вкладке и соответствующему контенту
        tab.classList.add('tab_active');
        tabContents[i].classList.add('tab__content_active');
    });
});