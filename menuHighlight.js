document.addEventListener("DOMContentLoaded", function () {
  // Определение текущего пути
  var currentPath = window.location.pathname.split('/').pop();

  // Определение активного пункта меню
  var activeMenuItem1 = document.querySelector(`nav ul li a[href='${currentPath}']`);
  var activeMenuItem2 = document.querySelector(`div nav ul li a[href='${currentPath}']`);

  // Добавление класса "active" к активному пункту меню
  if (activeMenuItem1) activeMenuItem1.classList.add("active");
  if (activeMenuItem2) activeMenuItem2.classList.add("active");
});