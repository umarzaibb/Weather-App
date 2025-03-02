import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import InfoBox from "./InfoBox";

export default function SearchBox({updateInfo}) {
    let [city, setCity]=useState("");
    let [Weather, setWeather]=useState({
        city: "Islamabad",
        feels_like: "22.09",
        humidity: "41",
        temp: 22.69,
        temp_max: 22.69,
        temp_min: 22.69,
        description: "clear sky"
    });
    let ApiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&appid=f0732d5c2718d7ad73653ef30ef6158d&units=metric`;

    function onChangeTextField(event) {
        setCity(event.target.value);
    }

    async function getWeather(event) {
        event.preventDefault();
       try {
        let res=await fetch(ApiUrl)
        let result=await res.json();
        let obj={ city: city,
            feels_like: result.main.feels_like,
            humidity: result.main.humidity,
            temp: result.main.temp,
            temp_max:result.main.temp_max,
            temp_min:result.main.temp_min,
            description: result.weather[0].description
        }
        setWeather({obj});
        updateInfo(obj);
       }catch(err){
console.log(err);
       }
    }
   return (
    <>
    <div className="SearchDiv">
        <h3>Search For Weather</h3>
        <form onSubmit={getWeather}>
        <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={onChangeTextField} style={{marginRight: "1rem"}}/>
        <Button variant="outlined" type="submit">Search</Button>
        </form>
    </div>
     <br/>
    </>
   )
}