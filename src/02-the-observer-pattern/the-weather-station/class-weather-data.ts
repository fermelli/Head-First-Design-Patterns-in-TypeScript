import { Observer, Subject } from "./interfaces";

export class WeatherData implements Subject {
    private observers: Observer[];
    _temperature!: number;
    _humidity!: number;
    _pressure!: number;

    get temperature(): number {
        return this._temperature;
    }

    get humidity(): number {
        return this._humidity;
    }

    get pressure(): number {
        return this._pressure;
    }

    constructor() {
        this.observers = [];
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        this.observers.splice(this.observers.indexOf(o), 1);
    }

    public notifyObservers(): void {
        this.observers.forEach((observer: Observer) => {
            observer.update(this.temperature, this.humidity, this.pressure);
        });
    }

    public measurementsChanged(): void {
        this.notifyObservers();
    }

    public setMeasurements(
        temperature: number,
        humidity: number,
        pressure: number
    ): void {
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;

        this.measurementsChanged();
    }
}
