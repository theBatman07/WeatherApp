import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const useGetWeather = () =>{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try{
          const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${'d785de7b7be24abf8eb0ae7ab6378e2d'}&units=metric`)
          const data = await res.json()
          setWeather(data)
        }
        catch(e){
          setError('Could not fetch Weather')
        }
        finally{
          setLoading(false)
        }
      }
      
      useEffect(() =>{
        ;(async() => {
          let { status } = await Location.requestForegroundPermissionsAsync()
          if(status !== 'granted'){
            setError('Permission to access location was denied')
            return
          }
          let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLon(location.coords.longitude)
          await fetchWeatherData()
        })()
      }, [lat, lon])

      return [loading, error, weather]
}