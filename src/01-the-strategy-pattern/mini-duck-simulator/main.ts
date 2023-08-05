import { Duck } from "./class-duck";
import { MallardDuck, ModelDuck } from "./classes-ducks";
import { FlyRocketPowered } from "./classes-fly-behavior";

export const miniDuckSimulator = () => {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
};
