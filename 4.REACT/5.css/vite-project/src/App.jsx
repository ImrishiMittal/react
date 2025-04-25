import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.bgcolor}>
        <h1>HI MY NAME IS RISHI MITTAL</h1>
      </div>
    </>
  )
}

export default App
