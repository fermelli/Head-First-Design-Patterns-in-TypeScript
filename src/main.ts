import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
    <h1>Head First Design Patterns - Building Extensible and Maintainable Object-Oriented Software 2nd Edition - TypeScript</h1>

    <div>
        <h2>Strategy Pattern</h2>

        <h3>Mini Duck Simulator</h3>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-mini-duck-simulator" class="btn btn--primary">Run Mini Duck Simulator</button>

        <h3>Game Adventure</h3>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-game-adventure" class="btn btn--primary">Run Game Adventure</button> <br />
        <div id="js-game-adventure-buttons" style="display: none;"></div>
    </div>

    <div>
        <h2>Observer Pattern</h2>

        <h3>The Weather Station</h3>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-weather" class="btn btn--primary">Run Weather Station</button>
    </div>
`;

window.addEventListener("load", () => {
    import("./01-the-strategy-pattern/mini-duck-simulator/main").then(
        ({ miniDuckSimulator }) => {
            miniDuckSimulator(
                document.querySelector<HTMLButtonElement>(
                    "#js-run-mini-duck-simulator"
                )!
            );
        }
    );

    import("./01-the-strategy-pattern/game-adventure/main").then(
        ({ gameAdventure }) => {
            gameAdventure(
                document.querySelector<HTMLButtonElement>(
                    "#js-run-game-adventure"
                )!,
                document.querySelector<HTMLDivElement>(
                    "#js-game-adventure-buttons"
                )!
            );
        }
    );

    import("./02-the-observer-pattern/the-weather-station/main").then(
        ({ weatherStation }) => {
            weatherStation(
                document.querySelector<HTMLButtonElement>("#js-run-weather")!
            );
        }
    );
});
