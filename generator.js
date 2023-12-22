document.addEventListener("DOMContentLoaded", function () {
  const generatorForm = document.getElementById("characterGeneratorForm");
  const resultsContainer = document.getElementById("generatorResults");
  const resultTemplate = document.getElementById("resultTemplate");

  generatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const characterName = document.getElementById("characterName").value;
    const characterClass = document.getElementById("characterClass").value;

    const generatedResult = `${characterName} (${characterClass})`;

    const resultElement = createResultElement(generatedResult);
    resultsContainer.appendChild(resultElement);

    saveCharacterToLocalStorage(generatedResult);
  });

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

  function createResultElement(character) {
    const resultElement = document.importNode(resultTemplate.content, true);
    resultElement.querySelector(".data").textContent = character;

    const deleteButton = resultElement.querySelector(".deleteButton");
    deleteButton.addEventListener("click", function () {
      const characterToRemove = resultElement.querySelector(".data").textContent;
      removeCharacterFromLocalStorage(characterToRemove);
      resultElement.remove();
    });

    return resultElement;
  }

  function loadCharactersFromLocalStorage() {
    const savedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];

    savedCharacters.forEach((character) => {
      const resultElement = createResultElement(character);
      resultsContainer.appendChild(resultElement);
    });
  }

  resultsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteButton")) {
      const resultElement = event.target.closest(".result-container");
      const characterToRemove = resultElement.querySelector(".data").textContent;
      removeCharacterFromLocalStorage(characterToRemove);
      resultElement.remove();
    }
  });

  loadCharactersFromLocalStorage();
});