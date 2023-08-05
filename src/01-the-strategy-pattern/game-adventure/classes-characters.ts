import { Character } from "./class-character";
import {
    AxeBehavior,
    BowAndArrowBehavior,
    KnifeBehavior,
    SwordBehavior,
} from "./classes-weapon-behavior";

export class King extends Character {
    public fight(): void {
        this.setWeapon(new SwordBehavior());

        this.weapon.useWeapon();
    }
}

export class Queen extends Character {
    public fight(): void {
        this.setWeapon(new KnifeBehavior());

        this.weapon.useWeapon();
    }
}

export class Knight extends Character {
    public fight(): void {
        this.setWeapon(new BowAndArrowBehavior());

        this.weapon.useWeapon();
    }
}

export class Troll extends Character {
    public fight(): void {
        this.setWeapon(new AxeBehavior());

        this.weapon.useWeapon();
    }
}
