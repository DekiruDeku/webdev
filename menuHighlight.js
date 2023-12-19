document.addEventListener("DOMContentLoaded", function () {
  // Определение текущего пути
  var currentPath = window.location.pathname;

  // Определение активного пункта меню
  var activeMenuItem1;
  var activeMenuItem2;

  if (currentPath.includes("/index.html")) {
    activeMenuItem1 = document.querySelector("nav ul li a[href='index.html']");
  } else if (currentPath.includes("/tablepage.html")) {
    activeMenuItem1 = document.querySelector(
      "nav ul li a[href='tablepage.html']"
    );
  } else if (currentPath.includes("/database.html")) {
    activeMenuItem1 = document.querySelector(
      "nav ul li a[href='database.html']"
    );
  } else if (currentPath.includes("/guestmembers.html")) {
    activeMenuItem1 = document.querySelector(
      "nav ul li a[href='guestmembers.html']"
    );
  }
  if (currentPath.includes("/index.html")) {
    activeMenuItem2 = document.querySelector(
      "div nav ul li a[href='index.html']"
    );
  } else if (currentPath.includes("/tablepage.html")) {
    activeMenuItem2 = document.querySelector(
      "div nav ul li a[href='tablepage.html']"
    );
  } else if (currentPath.includes("/database.html")) {
    activeMenuItem2 = document.querySelector(
      "div nav ul li a[href='database.html']"
    );
  } else if (currentPath.includes("/guestmembers.html")) {
    activeMenuItem2 = document.querySelector(
      "div nav ul li a[href='guestmembers.html']"
    );
  }

  // Добавление класса "active" к активному пункту меню
  if (activeMenuItem1) {
    activeMenuItem1.classList.add("active");
  }
  if (activeMenuItem2) {
    activeMenuItem2.classList.add("active");
  }
});
