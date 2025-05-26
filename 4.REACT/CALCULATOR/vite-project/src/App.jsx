import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './App.module.css'; // If using CSS module
import Buttons from './buttons';
import Input from './input';

function App() {
  return (
    <div className={styles.Calculator}>
      <Input/>
     <Buttons/>
    </div>
  );
}

export default App;
