
const characterId = new Array();
let image = "";
const cardName = document.getElementsByClassName('name-for-modal');
const shortDescription = document.getElementsByClassName('short-for-modal');
const longDescription = document.getElementsByClassName('long-for-modal');
const cardImage = document.getElementsByClassName('image-for-modal');

async function displayCharactersCards() {
  try {
    const response = await fetch('https://character-database.becode.xyz/characters');
    const character = await response.json();

    const cardTemplate = document.querySelector('#template');
    const target = document.querySelector('#target');

    character.forEach(({ name, shortDescription, image, description, id }) => {
      const cardClone = cardTemplate.cloneNode(true).content;

      cardClone.querySelector('#name').innerHTML = name;
      cardClone.querySelector('#short-description').innerHTML = shortDescription;
      cardClone.querySelector('#image').src = `data:image/*;base64,${image}`;
      cardClone.querySelector('#long-description').innerHTML = description;

      target.appendChild(cardClone);

      characterId.push(id);
    });
  } catch (error) {
    console.error(error);
  }
}

function openCharacterCard() {
  const longDescriptionButton = document.getElementsByClassName('long-description-button');

  for (let i = 0; i < longDescriptionButton.length; i++) {
    longDescriptionButton[i].addEventListener('click', function () {

      let modalName = document.getElementById('name-modal');
      let modalShortDescription = document.getElementById('short-modal-description');
      let modalLongDescription = document.getElementById('long-modal-description');
      let modalImage = document.getElementById('modal-image');

      modalName.textContent = cardName[i].textContent;
      modalShortDescription.textContent = shortDescription[i].textContent;
      modalLongDescription.textContent = longDescription[i].textContent;
      modalImage.src = cardImage[i].src;
    });
  }
}

export {displayCharactersCards, openCharacterCard}
