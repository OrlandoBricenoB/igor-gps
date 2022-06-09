import UTMLatLng from './UTMLatLng'

export const getCurrentPosition = callback => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const success = position => {
    if (position?.coords) callback(position.coords)
  }

  const error = err => {
    console.warn('ERROR', err)
  }

  navigator.geolocation.getCurrentPosition(success, error, options)
}

export const getUTMPosition = location => {
  const utm = new UTMLatLng()
  if (location) {
    return utm.convertLatLngToUtm(location.latitude, location.longitude, Math.floor(location.accuracy))
  }
  return null
}

const coordinatesDirections = {
  'lat': ['N', 'S'],
  'lon': ['E', 'W']
}

export const displayLocation = (coord, type) => {
  // * Obtiene el tipo de coordenada y si es positivo, obtiene la matriz 0, Norte o Este.
  const direction = coordinatesDirections[type][coord > 0 ? 0 : 1]
  let result = direction

  if (coord) {
    coord = String(coord)
    // * Separar las coordenadas desde el decimal.
    const coordSplitted = coord.split('.')
    // * Obtener los grados, primera matriz.
    let grades = parseFloat(coordSplitted[0])
    // * Si los grados son negativos, convertir a positivos.
    if (grades < 0) grades *= -1

    // * Obtener los minutos, los primeros dos digitos de los decimales.
    const minutes = coordSplitted[1].slice(0, 2)

    // * Obtener los segundos, el resto de digitos de los decimales.
    const seconds = coordSplitted[1].slice(2, 8)

    // * Preparar los grados y minutos para mostrar.
    result += ` ${grades}°`
    result += ` ${minutes}'`

    // * Los segundos pueden variar de 5 y 6 digitos.
    let secondsResult = ''
    if (seconds.length === 6) {
      const secondsWithDecimals = seconds.slice(0, 2) + '.' + seconds.slice(2, 10)
      // * Protección si por alguna razón empezaba por 0 y quedaba: 05.2143
      secondsResult = String(parseFloat(secondsWithDecimals))
    } else {
      const secondsWithDecimals = seconds[0] + '.' + seconds.slice(1, 10)
      secondsResult = secondsWithDecimals
    }

    // * Añadir los segundos para mostrar.
    result += ` ${secondsResult}''`
  }
  return result
}
