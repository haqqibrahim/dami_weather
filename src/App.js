
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Main from "./components/main";
import Form from "./components/form";
import {Report} from "./components/Report";



const App =()=> {
  const [userinfo , setuserinfo] = useState({});
  const [errorCode , seterrorCode] = useState("");
  const [loading , setloading] = useState(false);
  const [errormes , seterror] = useState("");
  const [error , seterror2] = useState(false);
  const [userinput , setuserinput] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userinput}&units=metric&appid=c301762f6726126f3751f52afbaed8d1`;

  const fetchdata = async (url)=>{
   try {
    setloading(true);
    seterror2(false)
    const {data} = await axios(url);
    const{
     weather,
     name,
     sys:{country},
     main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
     coord:{lon,lat},
     wind:{speed}
    } = data;
    setloading(false);
    setuserinfo({
     weather,
     name,
     country,
     temp,
     feels_like,
     temp_max,
     temp_min,
     pressure,
     humidity,
     lon,
     lat,
     speed
    })
   } catch (error) {
    setloading(false);
    seterror2(true)
    seterror(error.response.data.message)
    seterrorCode(error.response.data.cod)
    console.log(error.response.data.message)
   }
  }

  const handlechange =(e)=>{
      e.preventDefault();
      setuserinput(e.target.value);
  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    fetchdata(url);
    setuserinput("");
    console.log(userinfo.name)
  }

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=abeokuta&units=metric&appid=c301762f6726126f3751f52afbaed8d1`;

  const fetchdata = async (url)=>{
   try {
    setloading(true);
    const {data} = await axios(url);
    const{
     weather,
     name,
     sys:{country},
     main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
     coord:{lon,lat},
     wind:{speed}
    } = data;
    setloading(false);
    setuserinfo({
     weather,
     name,
     country,
     temp,
     feels_like,
     temp_max,
     temp_min,
     pressure,
     humidity,
     lon,
     lat,
     speed
    })
   } catch (error) {
    console.log(error)
   }
  }
    fetchdata(url);
  },[])
  return(
  <>
  <Form handlechange={handlechange} handlesubmit={handlesubmit} city={userinput}/>
  <Main loading={loading} errorMessage={errormes} error={error} errorCode={errorCode} userinfo={userinfo} />
  <Report userinfo={userinfo}/>
  </>
);
}

export default App;