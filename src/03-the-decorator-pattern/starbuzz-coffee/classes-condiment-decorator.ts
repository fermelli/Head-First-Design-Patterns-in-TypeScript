import { Beverage } from "./class-beverage";
import { CondimentDecorator } from "./classes-beverages";

export class SteamedMilk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();

        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Steamed Milk";
    }

    public cost(): number {
        return this.beverage.cost() + 0.1;
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();

        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost(): number {
        return this.beverage.cost() + 0.2;
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();

        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    public cost(): number {
        return this.beverage.cost() + 0.15;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();

        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    public cost(): number {
        return this.beverage.cost() + 0.1;
    }
}
