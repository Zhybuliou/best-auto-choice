import React from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { Router } from './components/Router/Router'

const App = () => {
  return (
    <div className='App'>
      <div className='pages' style={{ display: 'flex' }}>
        <Header />
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default App
