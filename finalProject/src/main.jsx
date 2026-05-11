import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './index.css'
import App from './App.jsx'

emailjs.init('YY1cDV7PbiQIBm57K');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
