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
    const dataCity = await response.json();
    if (!dataCity.name) {
      throw new Error(dataCity.message);
    } else {
      return dataCity;
    }
  } catch (error) {
    alert(`Oops: ${error.message}`);
  }
}
export async function getForecastData(cityName) {
  if (!cityName) return;
  const urlForecast = `${URL.FORECAST_SERVER}?q=${cityName}&appid=${URL.API_KEY}${URL.METRIC}`;
  const response = await fetch(urlForecast);
  const dataForecast = await response.json();
  return dataForecast;
}
