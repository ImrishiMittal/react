import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleInputChange(e){
    console.log(e.target.value)
  }
  return (
    <>
      <div>
        <form action="">
          <input type="text" onChange={handleInputChange}/>
        </form>
      </div>
    </>
  )
}

export default App
