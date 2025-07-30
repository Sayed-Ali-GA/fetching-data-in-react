import { useState, useEffect } from 'react';
import './App.css'
import './index.css'
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

  useEffect(() => {
    async function getDefaultWeather(){
      const data = await weatherService.show("Manama");
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
      };

    setWeather(newWeatherState)
    }

    getDefaultWeather()

  }, []); // An empty dependency array means this runs once after the initial render


  // ON MOUNT
  useEffect(()=>{
    console.log("I RUN ONCE WHEN MOUNTED")
  },[])


  // ON RENDER
  useEffect(()=>{
    // setWeather({  location: "test",
    //     temperature: "39",
    //     condition: "Sunny"})
    console.log("I RUN EVERY TIME, BE CAREFULL")
  })

  // ON UPDATE
  useEffect(()=>{
    console.log("I RUN ONLY WHEN WEATHER CHANGES")
  }, [weather])

  // ON UNMOUNT
  useEffect(()=>{

    return () => {
      // window.alert("UNMOUNTING")
      console.log("I RUN WHEN COMPONENT REMOVED, BE CAREFULL")
     }
  }, [])

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails
        // weather={weather}
        location={weather.location}
        temperature={weather.temperature}
        condition={weather.condition}
        // {...weather}
      />
    </main>
  );
};

export default App;