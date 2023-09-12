
const baseURL = 'https://api.weatherapi.com/v1/current.json?key=19981e72cd4e4d31b26183201231209'; //Bring Free Weather Api from the Browser.


export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWeatherDataForLocation = async (lat, long) => {
    const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    return await response.json();
}