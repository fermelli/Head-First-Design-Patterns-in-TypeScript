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

    <div>
        <h2>Decorator Pattern</h2>

        <h3>Starbuzz Coffee</h3>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-starbuzz-coffee" class="btn btn--primary">Run Starbuzz Coffee</button> <br />
        <div id="js-beverages"></div>
        <div id="js-condiments"></div>
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

    import("./03-the-decorator-pattern/starbuzz-coffee/main").then(
        ({ starbuzzCoffee }) => {
            starbuzzCoffee(
                document.querySelector<HTMLButtonElement>(
                    "#js-run-starbuzz-coffee"
                )!,
                document.querySelector<HTMLDivElement>("#js-beverages")!,
                document.querySelector<HTMLDivElement>("#js-condiments")!
            );
        }
    );
});
