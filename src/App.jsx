import { useState } from 'react'
import SearchBox from './SearchBox'
import "./App.css"
import Weather from './Weather'

function App() {

  return (
    <div className='SearchDiv'>
     <h1>Weather App</h1>
     <Weather></Weather>
    </div>
  )
}

export default App
