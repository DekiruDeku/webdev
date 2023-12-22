document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  function showPreloader() {
    preloader.style.display = "block";
  }

  function hidePreloader() {
    preloader.style.display = "none";
  }

  function handleErrors(error) {
    const errorMessage = document.createElement("div");
    errorMessage.innerText = "⚠ Что-то пошло не так";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "2rem";
    postList.style.display = "block";
    const template = document.getElementById("postTemplate");
    template.appendChild(errorMessage);
    document.getElementById("postList").appendChild(errorMessage);
    hidePreloader();
    console.error(error);
  }

  function fetchData(url) {
    showPreloader();

    return new Promise((resolve, reject) => {
      if (!navigator.onLine) {
        hidePreloader();
        reject(new Error("⚠ Отсутствует подключение к сети"));
        return;
      }

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          hidePreloader();
          resolve(data);
        })
        .catch((error) => {
          hidePreloader();
          reject(error);
        });
    });
  }

  function renderPosts(posts) {
    const postList = document.getElementById("postList");
    postList.style.display = "block";

    const template = document.getElementById("postTemplate");

    const limitedPosts = posts.slice(0, 20);

    limitedPosts.forEach((post) => {
      const postElement = document.importNode(template.content, true);
      postElement.querySelector(".postTitle").innerText = post.title;
      postElement.querySelector(".postBody").innerText = post.body;
      postList.appendChild(postElement);
    });
  }

  const fetchDataButton = document.getElementById("fetchDataButton");
  fetchDataButton.addEventListener("click", function () {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    fetchData(apiUrl)
      .then((posts) => renderPosts(posts))
      .catch((error) => handleErrors(error));
  });
});