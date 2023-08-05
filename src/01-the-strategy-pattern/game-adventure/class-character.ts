import { WeaponBehavior } from "./interfaces-behavior";

export abstract class Character {
    weapon!: WeaponBehavior;

    public abstract fight(): void;

    public setWeapon(w: WeaponBehavior) {
        this.weapon = w;
    }
}
