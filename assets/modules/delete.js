import { newCharacterId } from "./openCard.js";
// const characterId = [];

function deleteCharacter() {
  const deleteButton = document.getElementsByClassName("delete");

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", async () => {
      if (confirm("Are you sure you want to delete this character?")) {
        const id = newCharacterId[i];

        try {
          const response = await fetch(
            `https://character-database.becode.xyz/characters/${id}`,
            {
              method: "DELETE",
            }
          );

          const deletedCharacter = await response.json();
          console.log(deletedCharacter);

          location.reload();
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("This character has not been deleted");
      }
    });
  }
}

export { deleteCharacter };
