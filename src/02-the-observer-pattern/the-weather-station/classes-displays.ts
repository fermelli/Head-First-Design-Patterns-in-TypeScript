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

export class HeatIndexDisplay implements Observer, DisplayElement {
    private heatIndex: number = 0.0;
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
        this.heatIndex = this.computeHeatIndex(temperature, humidity);

        this.display();
    }

    public display(): void {
        console.log(`Heat index is ${this.heatIndex}`);
    }

    private computeHeatIndex(t: number, rh: number): number {
        const index: number =
            16.923 +
            0.185212 * t +
            5.37941 * rh -
            0.100254 * t * rh +
            0.00941695 * (t * t) +
            0.00728898 * (rh * rh) +
            0.000345372 * (t * t * rh) -
            0.000814971 * (t * rh * rh) +
            0.0000102102 * (t * t * rh * rh) -
            0.000038646 * (t * t * t) +
            0.0000291583 * (rh * rh * rh) +
            0.00000142721 * (t * t * t * rh) +
            0.000000197483 * (t * rh * rh * rh) -
            0.0000000218429 * (t * t * t * rh * rh) +
            0.000000000843296 * (t * t * rh * rh * rh) -
            0.0000000000481975 * (t * t * t * rh * rh * rh);

        return index;
    }
}
