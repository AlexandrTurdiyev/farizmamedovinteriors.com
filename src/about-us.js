import('./about-us.html')
import('./about-us.scss')

window.addEventListener('load', function() {
    // Код, который будет выполнен после полной загрузки всех ресурсов (включая стили)

    // Пример: скрыть заглушку и показать контент
    let contentElement = document.getElementById('content');
    contentElement.style.display = 'block'; // Покажет контент
});
