import {
  displayCharactersCards,
  openCharacterCard,
} from "./modules/openCard.js";
import { createImage, createCharacter } from "./modules/create.js";
import { editCharacter } from "./modules/editCharacter.js";
import { deleteCharacter } from "./modules/delete.js";

const callAllFunctions = displayCharactersCards();

callAllFunctions.then(() => {
  openCharacterCard();
  createImage();
  createCharacter();
  editCharacter();
  deleteCharacter();
});
