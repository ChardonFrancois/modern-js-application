import { newCharacterId } from './openCard.js';

let image = ' ';

// edit character

async function editCharacter() {
  
  const outerEditButton = document.getElementsByClassName('outer-edit');

  for (let i = 0; i < outerEditButton.length; i++) {
    outerEditButton[i].addEventListener('click', async () => {
      const id = newCharacterId[i];
      try {
        const response = await fetch(`https://character-database.becode.xyz/characters/${id}`);
        const character = await response.json();

        document.getElementById('input-name').value = character.name;
        document.getElementById('input-short-description').value = character.shortDescription;
        document.getElementById('input-long-description').textContent = character.description;
        image = character.image;

        document.getElementById('submit').addEventListener('click', async () => {
          const inputs = Array.from(document.getElementsByClassName('inputs'));
          const values = inputs.map(({ value }) => value.trim());
          const [name, shortDescription, description] = values;

          if (values.some((value) => value === '')) {
            alert("there's an empty input!");
            return;
          }
          else {
            const edit = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                shortDescription,
                description,
                image
              }),
            });
            const editedCharacter = await edit.json();
            console.log(editedCharacter);
            location.reload();
          }
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
}
export { editCharacter };

