(function () {
  // Стартовать отсчет времени при загрузке страницы
  var startTime = performance.now();

  // Подписаться на событие загрузки страницы
  window.addEventListener("load", function () {
    // Рассчитать время загрузки страницы
    var endTime = performance.now();
    var loadTime = endTime - startTime;

    // Создать элемент для вывода статистики
    var statsElement = document.createElement("div");
    statsElement.className = "timer";

    var statsMessage =
      "Время загрузки страницы: " + loadTime.toFixed(2) + " миллисекунд";
    statsElement.textContent = statsMessage;

    // Найти существующий footer и добавить статистику в него
    var existingFooter = document.querySelector("footer");
    if (existingFooter) {
      existingFooter.appendChild(statsElement);
    }
  });
})();
