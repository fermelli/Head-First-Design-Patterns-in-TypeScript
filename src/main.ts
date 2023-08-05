import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
    <h1>Head First Design Patterns - Building Extensible and Maintainable Object-Oriented Software 2nd Edition - TypeScript</h1>

    <div>
        <h2>Strategy Pattern</h2>
        <p>Mini Duck Simulator</p>
        <small>Open the console to see the output</small> <br />
        <button id="js-run-mini-duck-simulator">Run Mini Duck Simulator</button>
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
