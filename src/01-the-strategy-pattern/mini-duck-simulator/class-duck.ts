import { FlyBehavior, QuackBehavior } from "./interfaces-behavior";

export abstract class Duck {
    flyBehavior!: FlyBehavior;
    quackBehavior!: QuackBehavior;

    public swim(): void {
        console.log("All ducks float, even decoys!");
    }

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }
}
