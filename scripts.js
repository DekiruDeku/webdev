window.onload = function () {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");
  const imgIcon = document.getElementById("plus");

  menuIcon.addEventListener("click", function () {
    if (navMenu.style.display === "block") {
      imgIcon.src = "mashes/minus.png";
      navMenu.style.display = "none";
    } else {
      imgIcon.src = "mashes/plus.jpg";
      navMenu.style.display = "block";
    }
  });
};
