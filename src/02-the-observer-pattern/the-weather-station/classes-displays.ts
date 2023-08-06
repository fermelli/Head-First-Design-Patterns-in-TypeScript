import { WeatherData } from "./class-weather-data";
import { DisplayElement, Observer } from "./interfaces";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature!: number;
    private humidity!: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    public update(
        temperature: number,
        humidity: number,
        _pressure: number
    ): void {
        this.temperature = temperature;
        this.humidity = humidity;

        this.display();
    }

    public display(): void {
        console.log(
            `Current conditions: ${this.temperature}°F degrees and ${this.humidity}% humidity`
        );
    }
}

export class ForecastDisplay implements Observer, DisplayElement {
    private currentPressure: number = 29.92;
    private lastPressure!: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    public update(): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = this.weatherData.pressure;

        this.display();
    }

    public display(): void {
        let forecastMessage: string = "";

        if (this.currentPressure > this.lastPressure) {
            forecastMessage = "Improving weather on the way!";
        } else if (this.currentPressure === this.lastPressure) {
            forecastMessage = "More of the same";
        } else if (this.currentPressure < this.lastPressure) {
            forecastMessage = "Watch out for cooler, rainy weather";
        }

        console.log(`Forecast: ${forecastMessage}`);
    }
}

export class StatisticsDisplay implements Observer, DisplayElement {
    private maxTemp: number = 0.0;
    private minTemp: number = 200;
    private tempSum: number = 0.0;
    private numReadings: number = 0;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    public update(
        temperature: number,
        _humidity: number,
        _pressure: number
    ): void {
        this.tempSum += temperature;
        this.numReadings++;

        if (temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }

        if (temperature < this.minTemp) {
            this.minTemp = temperature;
        }

        this.display();
    }

    public display(): void {
        console.log(
            `Avg/Max/Min temperature = ${(
                this.tempSum / this.numReadings
            ).toFixed(2)}/${this.maxTemp.toFixed(2)}/${this.minTemp.toFixed(2)}`
        );
    }
}
