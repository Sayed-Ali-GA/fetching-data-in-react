// src/components/WeatherDetails/WeatherDetails.jsx

const WeatherDetails = (props) => {
  console.log('WeatherDetails props:', props);
  return (
    <section>
      <h2>Weather Details</h2>
      <p>Location: {props.location}</p>
      <p>Temperature: {props.temperature}</p>
      <p>Condition: {props.condition}</p>
    </section>
  );
};

export default WeatherDetails;
