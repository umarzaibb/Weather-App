import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weather(){
    let [Information, setInfo]=useState({
        city: "Islamabad",
        feels_like: "22.09",
        humidity: "41",
        temp: 22.69,
        temp_max: 22.69,
        temp_min: 22.69,
        description: "clear sky"
    });

    function updateInfo(obj){
        setInfo({
   ...obj
        });
    }

    return (
        <>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={Information}></InfoBox>
        </>
    )
}