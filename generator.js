document.addEventListener("DOMContentLoaded", function () {
  const generatorForm = document.getElementById("characterGeneratorForm");
  const resultsContainer = document.getElementById("generatorResults");

  generatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const characterName = document.getElementById("characterName").value;
    const characterClass = document.getElementById("characterClass").value;

    const generatedResult = `${characterName} (${characterClass})`;

    const resultElement = document.createElement("div");
    resultElement.className = "result-container";

    const dataElement = document.createElement("div");
    dataElement.textContent = generatedResult;

    const deleteButton = document.createElement("img");
    deleteButton.src = "mashes/156772.svg";
    deleteButton.alt = "Удалить";
    deleteButton.style.maxWidth = "15px";
    deleteButton.style.maxHeidth = "15px";

    deleteButton.addEventListener("click", function () {
      resultElement.remove();
      removeCharacterFromLocalStorage(generatedResult);
    });

    resultElement.appendChild(dataElement);
    resultElement.appendChild(deleteButton);

    resultsContainer.appendChild(resultElement);

    saveCharacterToLocalStorage(generatedResult);
  });

  loadCharactersFromLocalStorage();

  function saveCharacterToLocalStorage(character) {
    const savedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];

    savedCharacters.push(character);

    localStorage.setItem("characters", JSON.stringify(savedCharacters));
  }

  function removeCharacterFromLocalStorage(character) {
    const savedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];

    const updatedCharacters = savedCharacters.filter(
      (savedCharacter) => savedCharacter !== character
    );

    localStorage.setItem("characters", JSON.stringify(updatedCharacters));
  }

  function loadCharactersFromLocalStorage() {
    const savedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];

    savedCharacters.forEach((character) => {
      const resultElement = document.createElement("div");
      resultElement.className = "result-container";

      const dataElement = document.createElement("div");
      dataElement.textContent = character;

      const deleteButton = document.createElement("img");
      deleteButton.src = "mashes/156772.svg";
      deleteButton.alt = "Удалить";
      deleteButton.style.maxWidth = "15px";
      deleteButton.style.maxHeidth = "15px";
      deleteButton.addEventListener("click", function () {
        resultElement.remove();
        removeCharacterFromLocalStorage(character);
      });

      resultElement.appendChild(dataElement);
      resultElement.appendChild(deleteButton);

      resultsContainer.appendChild(resultElement);
    });
  }
});
