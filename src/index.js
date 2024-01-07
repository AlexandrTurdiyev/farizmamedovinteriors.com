import './index.html';
import './index.scss';
import './modules/preloader/_preloader';

window.addEventListener('load', function() {
    // Код, который будет выполнен после полной загрузки всех ресурсов (включая стили)

    // Пример: скрыть заглушку и показать контент
    let contentElement = document.getElementById('content');
    contentElement.style.display = 'block'; // Покажет контент
});
