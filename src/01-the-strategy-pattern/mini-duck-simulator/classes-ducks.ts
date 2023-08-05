import { Duck } from "./class-duck";
import { FlyNoWay, FlyWithWings } from "./classes-fly-behavior";
import { Quack } from "./classes-quack-behavior";

export class MallardDuck extends Duck {
    constructor() {
        super();

        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    public display(): void {
        console.log("I'm a real Mallard duck");
    }
}

export class ModelDuck extends Duck {
    constructor() {
        super();

        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyNoWay();
    }

    public display(): void {
        console.log("I'm a model duck");
    }
}
