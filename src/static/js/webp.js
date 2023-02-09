
// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}
window.onload = function () {
    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (!canUseWebp() || isitFirefox && !(firefoxVer >= 65)) {
         // Получаем все элементы с дата-атрибутом data-bg
        let images = document.querySelectorAll('div');
        // Проходимся по каждому
        for (let i = 0; i < images.length; i++) {
            // Получаем значение каждого дата-атрибута
            let style = images[i].currentStyle || window.getComputedStyle(images[i], false)
            images[i].style.backgroundImage = style.backgroundImage.replace(/.webp/gi, ".png") || style.backgroundImage
        }

    }
  
    
};
