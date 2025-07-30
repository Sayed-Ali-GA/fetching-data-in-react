import { useState } from 'react';

// Services
import * as weatherService from './services/weatherService';

// Components
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState({})

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };

    setWeather(newWeatherState)
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails
        // weather={weather}
        loction={weather.location}
        temperature={weather.temperature}
        condition={weather.condition}
        // {...weather}
      />
    </main>
  );
};

export default App;