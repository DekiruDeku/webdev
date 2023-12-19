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
    document.body.appendChild(errorMessage);
    console.error(error);
  }

  function fetchData(url) {
    showPreloader();

    return new Promise((resolve, reject) => {
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
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
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
