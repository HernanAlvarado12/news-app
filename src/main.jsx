import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './components/Main'
import { Header } from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
)
