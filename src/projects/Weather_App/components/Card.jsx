import React from "react";
import { useWeather } from '../context/WeatherContext'

const Card = () => {
    const weather = useWeather();
    return (
        <div
            className="card"
            style={{
                width: "100%",
                border: "1px solid ",
                padding: "5px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "10px"
            }}
        >
            <img src={weather?.data?.current?.condition?.icon} />
            <h2>Temp:{weather.data?.current?.temp_c}°C  / {weather.data?.current?.temp_f}°F</h2>
            <h5>
                {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
                {weather.data?.location?.country}
            </h5>
        </div>
    );
};

export default Card;
