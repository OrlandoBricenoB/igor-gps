import React from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css/normalize.css'
import './css/index.css'
import App from './App'
import { registerSW } from "virtual:pwa-register";

if ('serviceWorker' in navigator) {
  registerSW()
}

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
