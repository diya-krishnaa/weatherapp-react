import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.jpg'
import sunicon from '../assets/sun1.png'
const Weather = () => {
const inputRef = useRef()
const [weatherData,setweatherData] = useState(false);
const search = async (city)=>{
  if(city===""){
    alert("enter city name")
    return;
  }
  try{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setweatherData({
      humidity:data.main.humidity,
      windSpeed:data.wind.speed,
      temperature:Math.floor(data.main.temp),
      location:data.name

    })



  }
  catch(error){

  }
}
useEffect(()=>{
  search("New York");
},[])


  return (
    <div className='weather'>
     <div className='search-bar'>
        <input ref={inputRef} type='text' placeholder='search'/>
        <img src={search_icon} alt='' onClick={()=>search(inputRef.current.value)}/>
     </div>
     <img src={sunicon} alt='' className='weather-icon'/>
     <p className='temperature'>{weatherData.temperature}</p>
     <p className='location'>{weatherData.location}</p>
     <div className='weather-data'>
      <div className='col'>
        {/* <img src={search_icon} alt=''/> */}
        <div>
          <p>{weatherData.humidity}</p>
          <span>Humidity</span>
        </div>
      </div>
      <div className='col'>
        {/* <img src={search_icon} alt=''/> */}
        <div>
          <p>{weatherData.windSpeed}</p>
          <span>Humidity</span>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Weather