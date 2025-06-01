import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

function App() {
  const[count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); 
  };
  const decrease =()=>{
    setCount(count-1);
  }
  return(
    <>
    <div className={styles.container}>
      <h4 className={styles.heading}>COUNTER : {count}</h4>
      <button onClick={handleClick}>Increase</button>
      <button onClick={decrease}>DECREASE</button>
    </div>
    </>
  )
}

export default App
