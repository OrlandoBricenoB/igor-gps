import React, { useState } from 'react'
import ReloadIcon from '/svg/reload.svg'

const Header = ({ handleGetPosition }) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleClickGetPosition = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      handleGetPosition()
    }, 500)
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Igor GPS</h1>
      <div className={`header__icon ${isLoading ? 'animation-reload' : ''}`} onClick={handleClickGetPosition}>
        <img className='header__icon-img' src={ReloadIcon} width="24" height="24" />
      </div>
    </header>
  )
}

export default Header
