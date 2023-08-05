import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
    <h1>Head First Design Patterns - Building Extensible and Maintainable Object-Oriented Software 2nd Edition - TypeScript</h1>

    <div>
        <h2>Strategy Pattern</h2>

        <h3>Mini Duck Simulator</h3>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-mini-duck-simulator">Run Mini Duck Simulator</button>

        <h3>Game Adventure</h3>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-game-adventure">Run Game Adventure</button>
        <br />
        <div id="js-game-adventure-buttons" style="display: none;">
            <button id="js-fight-with-king">Fight with King</button>
            <button id="js-fight-with-queen">Fight with Queen</button>
            <button id="js-fight-with-knight">Fight with Knight</button>
            <button id="js-fight-with-troll">Fight with Troll</button>
        </div>
    </div>
`;

document
    .querySelector<HTMLButtonElement>("#js-run-mini-duck-simulator")!
    .addEventListener("click", () => {
        import("./01-the-strategy-pattern/mini-duck-simulator/main").then(
            ({ miniDuckSimulator }) => {
                miniDuckSimulator();
            }
        );
    });

document
    .querySelector<HTMLButtonElement>("#js-run-game-adventure")!
    .addEventListener("click", () => {
        import("./01-the-strategy-pattern/game-adventure/main").then(
            ({ theKing, theQueen, theKnight, theTroll }) => {
                document.querySelector<HTMLDivElement>(
                    "#js-game-adventure-buttons"
                )!.style.display = "block";

                document
                    .querySelector<HTMLButtonElement>("#js-fight-with-king")!
                    .addEventListener("click", () => {
                        theKing.fight();
                    });

                document
                    .querySelector<HTMLButtonElement>("#js-fight-with-queen")!
                    .addEventListener("click", () => {
                        theQueen.fight();
                    });

                document
                    .querySelector<HTMLButtonElement>("#js-fight-with-knight")!
                    .addEventListener("click", () => {
                        theKnight.fight();
                    });

                document

                    .querySelector<HTMLButtonElement>("#js-fight-with-troll")!
                    .addEventListener("click", () => {
                        theTroll.fight();
                    });
            }
        );
    });
