import { Beverage } from "./class-beverage";
import { DarkRoast, Decaf, Espresso, HouseBlend } from "./classes-beverages";
import { SteamedMilk, Mocha, Soy, Whip } from "./classes-condiment-decorator";

export const starbuzzCoffee = (
    element: HTMLButtonElement,
    containerButtonsBeverages: HTMLDivElement,
    containerButtonsCondiments: HTMLDivElement
) => {
    const beverages: Beverage[] = [
        new HouseBlend(),
        new DarkRoast(),
        new Decaf(),
        new Espresso(),
    ];

    element.addEventListener("click", () => {
        renderButtonsForBeverages(
            containerButtonsBeverages,
            containerButtonsCondiments,
            beverages
        );
    });
};

const renderButtonsForBeverages = (
    containerButtonsBeverages: HTMLDivElement,
    containerButtonsCondiments: HTMLDivElement,
    beverages: Beverage[]
) => {
    let selectedBeverage: Beverage;

    containerButtonsBeverages.innerHTML = "<h4>Beverages</h4>";

    beverages.forEach((beverage) => {
        const beverageButton: HTMLButtonElement =
            document.createElement("button");

        beverageButton.textContent = beverage.constructor.name;
        beverageButton.classList.add("btn", "btn--secondary");
        beverageButton.addEventListener("click", () => {
            selectedBeverage = beverage;

            console.log(
                `Selected beverage: ${selectedBeverage.constructor.name}`
            );
            console.log(
                `${selectedBeverage.getDescription()} $${selectedBeverage
                    .cost()
                    .toFixed(2)}`
            );

            renderButtonsForCondiments(
                containerButtonsCondiments,
                selectedBeverage
            );
        });

        containerButtonsBeverages.appendChild(beverageButton);
    });
};

const renderButtonsForCondiments = (
    containerButtonsCondiments: HTMLDivElement,
    selectedBeverage: Beverage
) => {
    const condimentsNames: string[] = ["SteamedMilk", "Mocha", "Soy", "Whip"];

    containerButtonsCondiments.innerHTML = "<h4>Condiments</h4>";

    condimentsNames.forEach((condimentName) => {
        const condimentButton: HTMLButtonElement =
            document.createElement("button");

        condimentButton.textContent = condimentName;
        condimentButton.classList.add("btn", "btn--secondary");
        condimentButton.addEventListener("click", () => {
            selectedBeverage = selectCondiment(condimentName, selectedBeverage);

            console.log(`Selected condiment: ${condimentName}`);
            console.log(
                `${selectedBeverage.getDescription()} $${selectedBeverage
                    .cost()
                    .toFixed(2)}`
            );
        });

        containerButtonsCondiments.appendChild(condimentButton);
    });
};

const selectCondiment = (condimentName: string, selectedBeverage: Beverage) => {
    switch (condimentName) {
        case "SteamedMilk":
            selectedBeverage = new SteamedMilk(selectedBeverage);
            break;
        case "Mocha":
            selectedBeverage = new Mocha(selectedBeverage);
            break;
        case "Soy":
            selectedBeverage = new Soy(selectedBeverage);
            break;
        case "Whip":
            selectedBeverage = new Whip(selectedBeverage);
            break;
        default:
            throw new Error("Invalid condiment name");
    }

    return selectedBeverage;
};
