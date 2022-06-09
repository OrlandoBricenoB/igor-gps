import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import './css/App.css'
import { displayLocation, getCurrentPosition, getUTMPosition } from './helpers/locationHelper'

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
      setCurrentLocation(position)
    })
  }

  return (
    <>
      <Header handleGetPosition={handleClickGetCurrentPosition} />
      <main className='App'>
        {
          currentLocation
            ? (
              <section className='location'>
                <h2 className="location__title">Ubicación</h2>
                <h3 className="h3">LAT</h3>
                <p>
                  <span className='location__coord--displayed'>{displayLocation(currentLocation?.latitude, 'lat')}</span>
                  <br/>
                  {currentLocation?.latitude}<br/>
                </p>
                <h3 className="h3">LON</h3>
                <p>
                  <span className='location__coord--displayed'>{displayLocation(currentLocation?.longitude, 'lon')}</span>
                  <br/>
                  {currentLocation?.longitude}<br/>
                </p>

                <h3 className="h3">UTM</h3>
                <p>
                  <b>Zona:</b> {currentUTM?.ZoneNumber} <b>Cuadrante:</b> {currentUTM?.ZoneLetter}
                  <br/>
                  <b>E</b> {currentUTM?.Easting} <b>N</b> {currentUTM?.Northing}
                  <br/>
                </p>
              </section>
              )
            : (
              <section className="location">
                <h2 className='location__title'>Ubicación</h2>
                <p className='location__help-text'>
                  Presiona el botón Recargar en la parte superior derecha de la aplicación.
                </p>
              </section>
              )
        }
        {
          currentLocation
            ? (
              <section className='location__accuracy'>
                <h3 className='h3'>Precisión</h3>
                <p className='location__accuracy-value'>
                  {parseInt(currentLocation?.accuracy)} metros.
                </p>
              </section>
              )
            : (
              <section className='location__accuracy'>
                <h3 className='h3'>Para el abuelo Igor</h3>
              </section>
              )
        }
      </main>
    </>
  )
}

export default App
