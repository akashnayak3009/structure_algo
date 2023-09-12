import React, { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/WeatherContext";

const Weather = () => {
    const weather = useWeather();
    useEffect(() => {
        weather.fetchCurrentUserLocationData();
    }, []);
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#f0f0f0",
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        marginBottom: "20px",
                    }}
                >
                    Weather Forecast
                </h1>
                <Input />
                <Button value="Search" onClick={weather.fetchData} />
                <Card />
            </div>
        </div>
    );
};

export default Weather;
