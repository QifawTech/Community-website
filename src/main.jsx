import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // <-- இதை இங்கே சேர்த்திரு
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // <-- Mobile toggle-க்கு இது தேவை

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)