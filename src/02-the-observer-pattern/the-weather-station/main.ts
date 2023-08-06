import { WeatherData } from "./class-weather-data";
import {
    CurrentConditionsDisplay,
    ForecastDisplay,
    StatisticsDisplay,
} from "./classes-displays";

export const weatherStation = (element: HTMLButtonElement) => {
    const weatherData: WeatherData = new WeatherData();

    new CurrentConditionsDisplay(weatherData);
    new StatisticsDisplay(weatherData);
    new ForecastDisplay(weatherData);

    element.addEventListener("click", () => {
        const temperatureRandom: number = Math.floor(Math.random() * 40);
        const humidityRandom: number = Math.floor(Math.random() * 40);
        const pressureRandom: number = Math.floor(Math.random() * 40);

        weatherData.setMeasurements(
            temperatureRandom,
            humidityRandom,
            pressureRandom
        );
    });
};
