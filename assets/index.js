import{displayCharactersCards, openCharacterCard} from './modules/openCard.js'
import {deleteCharacter} from './modules/delete.js';

// const characterId = new Array();
// let image = "";
// const cardName = document.getElementsByClassName('name-for-modal');
// const shortDescription = document.getElementsByClassName('short-for-modal');
// const longDescription = document.getElementsByClassName('long-for-modal');
// const cardImage = document.getElementsByClassName('image-for-modal');


let callAllFunctions = displayCharactersCards();

callAllFunctions.then(() => {
  openCharacterCard();
//   createImage();
//   createCharacter();
//   editCharacter();
  deleteCharacter();
})
