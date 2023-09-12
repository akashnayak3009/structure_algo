import React from "react";
import { useWeather } from "../context/WeatherContext";

const Input = () => {

    const weather = useWeather();
    console.log('weather', weather)

    return (
        <input
            className="input-fields"
            placeholder="Search city"
            value={weather.searchCity}
            onChange={(e) => weather.setSearchCity(e.target.value)}
            style={{
                padding: "10px",
                fontSize: "15px",
                marginRight: "10px",
                borderRadius: "8px"
            }}
        />
    );
};

export default Input;
