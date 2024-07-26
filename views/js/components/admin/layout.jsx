import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './components/dashboard'
import '../../../css/app.css'


ReactDOM.createRoot(document.getElementById('auth')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
)