import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Preloader from './Components/Preloader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <div className='container mx-auto px-4'>
    <Navbar/>
    <App/>
    </div>

  </StrictMode>,
)
