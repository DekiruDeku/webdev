document.addEventListener("DOMContentLoaded", function () {
  const memeImages = [
    "mashes/meme.jpg",
    "mashes/meme2.jpg",
    "mashes/meme3.png",
    "mashes/meme4.jpg",
    "mashes/meme5.jpg",
    "mashes/meme6.jpg",
    "mashes/meme7.jpg",
    "mashes/meme8.jpg",
    "mashes/meme9.jpg",
    "mashes/meme10.jpg",
    "mashes/meme11.jpg",
    "mashes/meme12.jpg",
    "mashes/meme13.jpg",
    "mashes/meme14.jpg",
    "mashes/meme15.jpg",
    "mashes/meme16.jpg",
    "mashes/meme17.jpg",
    "mashes/meme18.jpg",
    "mashes/meme19.jpg",
    "mashes/meme20.jpg",
    "mashes/meme21.jpg",
    "mashes/meme22.jpg",
    "mashes/meme23.jpg",
    "mashes/meme24.jpg",
  ];

  const randomMemeImage =
    memeImages[Math.floor(Math.random() * memeImages.length)];

  document.getElementById("randomimg").src = randomMemeImage;
});
