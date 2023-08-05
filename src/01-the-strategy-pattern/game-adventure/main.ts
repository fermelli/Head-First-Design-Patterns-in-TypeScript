import { Character } from "./class-character";
import { King, Knight, Queen, Troll } from "./classes-characters";

export const gameAdventure = (
    element: HTMLButtonElement,
    containerButtons: HTMLDivElement
) => {
    const characters: Character[] = [
        new King(),
        new Queen(),
        new Knight(),
        new Troll(),
    ];

    element.addEventListener("click", () => {
        containerButtons.innerHTML = "";

        characters.forEach((character) => {
            const button: HTMLButtonElement = document.createElement("button");

            button.textContent = `Fight with ${character.constructor.name}`;
            button.classList.add("btn", "btn--secondary");
            button.addEventListener("click", () => {
                character.fight();
            });
            containerButtons.appendChild(button);
            containerButtons.style.display = "block";
        });
    });
};
