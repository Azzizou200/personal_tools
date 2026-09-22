import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CubePage from './pages/CubePage'
import ChronometerPage from './pages/ChronometerPage'

const page = window.location.pathname === '/chronometer'
  ? <ChronometerPage />
  : window.location.pathname === '/cube'
    ? <CubePage />
    : <App />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
