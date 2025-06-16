import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import Header from './components/Header.jsx' 
=======
import './style/styles.css'
import './style/header.css'
import Header from './components/header'

>>>>>>> a25246287cca7e285eeece21ff41cd16317cffec
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
