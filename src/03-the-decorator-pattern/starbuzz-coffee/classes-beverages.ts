import { Beverage } from "./class-beverage";

export abstract class CondimentDecorator extends Beverage {
    beverage!: Beverage;

    public abstract getDescription(): string;
}

export class HouseBlend extends Beverage {
    constructor() {
        super();

        this.description = "House Blend Coffee";
    }

    public cost(): number {
        return 0.89;
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super();

        this.description = "Dark Roast Coffee";
    }

    public cost(): number {
        return 0.99;
    }
}

export class Decaf extends Beverage {
    constructor() {
        super();

        this.description = "Decaf Coffee";
    }

    public cost(): number {
        return 1.05;
    }
}

export class Espresso extends Beverage {
    constructor() {
        super();

        this.description = "Espresso";
    }

    public cost(): number {
        return 1.99;
    }
}
