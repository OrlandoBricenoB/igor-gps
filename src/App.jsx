import React, { useEffect, useState } from 'react'
import './css/App.css'
import { getCurrentPosition, getUTMPosition } from './helpers/locationHelper'

const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [currentUTM, setCurrentUTM] = useState(null)

  // * Convertir a UTM en cada cambio.
  useEffect(() => {
    const utmPosition = getUTMPosition(currentLocation)
    console.log(utmPosition)
    setCurrentUTM(utmPosition)
  }, [currentLocation])

  // * Botón de obtener ubicación.
  const handleClickGetCurrentPosition = () => {
    getCurrentPosition(position => {
      console.log(position)
      setCurrentLocation(position)
    })
  }

  return (
    <div className="App">
      <p>Me encanta React puro.</p>
      <p>Made with ♥ by Jo-Sword</p>
      <button onClick={handleClickGetCurrentPosition}>Get Location</button>
      <p>
        Locación:<br/>
        Latitud: {currentLocation?.latitude}<br/>
        Longitud: {currentLocation?.longitude}<br/>
        Precisión: {currentLocation?.accuracy} metros.
      </p>
      <p>
        UTM:
        <br/>
        Zona: {currentUTM?.ZoneNumber}
        <br/>
        Cuadrante: {currentUTM?.ZoneLetter}
        <br/>
        E {currentUTM?.Easting}
        <br/>
        N {currentUTM?.Northing}
        <br/>
      </p>
    </div>
  )
}

export default App
