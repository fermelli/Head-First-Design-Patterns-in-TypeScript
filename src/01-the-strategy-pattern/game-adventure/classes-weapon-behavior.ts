import { WeaponBehavior } from "./interfaces-behavior";

export class KnifeBehavior implements WeaponBehavior {
    public useWeapon(): void {
        console.log("cutting with a knife");
    }
}

export class BowAndArrowBehavior implements WeaponBehavior {
    public useWeapon(): void {
        console.log("shooting an arrow with a bow");
    }
}

export class AxeBehavior implements WeaponBehavior {
    public useWeapon(): void {
        console.log("chopping with an axe");
    }
}

export class SwordBehavior implements WeaponBehavior {
    public useWeapon(): void {
        console.log("swinging a sword");
    }
}
