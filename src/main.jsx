import React from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css/normalize.css'
import './css/index.css'
import App from './App'

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
