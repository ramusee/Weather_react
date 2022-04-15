export const URL = {
  WEATHER_SERVER: 'https://api.openweathermap.org/data/2.5/weather',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
  METRIC: '&units=metric',
  ICONS: 'https://openweathermap.org/img/wn/',
  FORECAST_SERVER: 'https://api.openweathermap.org/data/2.5/forecast',
};

export async function getCityData(cityName) {
  if (!cityName) return;
  const urlWeather = `${URL.WEATHER_SERVER}?q=${cityName}&appid=${URL.API_KEY}${URL.METRIC}`;
  try {
    const response = await fetch(urlWeather);
    const locationData = await response.json();
    if (!locationData.name) {
      throw new Error(locationData.message);
    } else {
      return locationData;
    }
  } catch (error) {
    alert(`Oops: ${error.message}`);
  }
}
export async function getForecastData(cityName) {
  if (!cityName) return;
  const urlForecast = `${URL.FORECAST_SERVER}?q=${cityName}&appid=${URL.API_KEY}${URL.METRIC}`;
  try {
    const response = await fetch(urlForecast);
    const forecastData = await response.json();
    if (!forecastData.list) {
      throw new Error()
    } else {
      return forecastData;
    }
  } catch {
    return
  }
}
