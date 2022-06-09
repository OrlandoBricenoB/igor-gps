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
