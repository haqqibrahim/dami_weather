import React from 'react'
import { WiDegrees } from 'react-icons/wi';

export const Report = ({userinfo}) => {


    const {
        weather,
        feels_like,
        temp_max,
        temp_min,
        pressure,
        humidity,
        lon,
        lat,
        speed
    } = userinfo;

  return (
    <div>.
        <div className='rightSide'>
                    <h3 className='today'>Today</h3>
                     <div className='report'>
                         <h4>Feels like:</h4>
                         <h4>{feels_like}<WiDegrees className='deg3'/><span className='deg4'>C</span></h4>
                     </div>
                     
                     <div className='report'>
                        {weather?.map(it=>{
                            return(
                                <>
                                   <h4>Main:</h4>
                                   <h4>{it.main}</h4>
                                </>
                            );
                        })}
                     </div>

                     <div className='report'>
                        <h4>Max:</h4>
                        <h4>{temp_max}<WiDegrees className='deg3'/><span className='deg4'>C</span></h4>
                     </div>
                     
                     <div className='report'>
                         <h4>Min:</h4>
                         <h4>{temp_min}<WiDegrees className='deg3'/><span className='deg4'>C</span></h4>
                     </div>

                     <div className='report'>
                        <h4>Pressure:</h4>
                        <h4>{pressure} Mb</h4>
                     </div>

                     <div className='report'>
                         <h4>Humidity:</h4>
                         <h4>{humidity} %</h4>
                     </div>

                     <div className='report'>
                         <h4>Longitude:</h4>
                         <h4>{lon}</h4>
                     </div>

                     <div className='report'>
                         <h4>Latitude:</h4>
                         <h4>{lat}</h4>
                     </div>

                     <div className='report'>
                         <h4>Wind Speed:</h4>
                         <h4>{speed} Km/h</h4>
                     </div>
        </div>
    </div>
  )
}
