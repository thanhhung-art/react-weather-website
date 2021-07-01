import React, { useState, useEffect } from "react";
import './App.css';
import Temprature from "./components/Temprature";
import Descriptions from "./components/Descriptions";
import ForecastInfo from "./components/Forecast";
import NameCity from "./components/NameCity";
import NotFound from "./components/NotFound";

const API_KEY =  `${process.env.REACT_APP_WEATHER_API_KEY}`;

function App() {
  const [city, setCity] = useState("vietnam");
  const [valueCity, setValueCity] = useState("");
  const [info, setInfo] = useState(null);
  const [foreCasts, setForecast] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const takeInfo = (place) => {
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`;

    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&APPID=${API_KEY}&units=metric`;

    Promise.all([fetch(weather),fetch(forecast)])
      .then(( [res1, res2] ) => {
        if (res1.ok && res2.ok) {
          setNotFound(false);
          return Promise.all([res1.json(), res2.json()])
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then( ([data1, data2]) => {
        setInfo(data1);
        setForecast(data2);
      })
      .catch( err =>  {
        console.log(err.message);
        if (err.message === "Not Found"){
          setNotFound(true);
        }
      })
  }

  useEffect(() => {
    takeInfo(city);
  },[city])

  const handleChange = (e) => {
    setValueCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(valueCity.length !== 0){
      setCity(valueCity);
    }
  }

  const handleIcon = (e) => {
    const icons = ["cloud","cloud-showers-heavy","cloud-sun","cloud-rain"];
    switch (e) {
      case "clear sky":
        return icons[2];
      case "light rain":
        return icons[1];
      case "broken clouds":
        return icons[0];
      case "moderate rain":
        return icons[3];
      default: 
        return icons[0];
    }
  }

  return (
    <>
    <div className="App" id="app">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="type city" 
          onChange={handleChange}
          value={valueCity}
        />
        <button type="submit" id="btn-search">Search</button>
      </form>
      {
        !notFound ?  
      (<div className="display">
        <div className="display__row-1">
          { 
            info && ( <>
                        <Temprature 
                            temp={Math.round(info.main.temp)} 
                            city={info.name}
                            icon={handleIcon(info.weather[0].description)}
                            des={info.weather[0].description}
                        />

                        <Descriptions 
                            wind={info.wind.speed}
                            clouds={info.clouds.all}
                            hight={Math.round(info.main.temp_max)}
                            low={Math.round(info.main.temp_min)}
                            sunrise={info.sys.sunrise}
                            sunset={info.sys.sunset}
                        />
                      </> )
          }
        </div>
        <div className="display__row-2">
          { info && <NameCity city={info.name} date={info.dt} country={info.sys.country} /> }
        </div>
        <div className="display__row-3">
          { 
            foreCasts && <ForecastInfo 
                            lists={foreCasts.list} 
                          />
          }
        </div>
      </div>) : (
        <NotFound />
      )
      }
    </div>
    </>
  );
}

export default App;