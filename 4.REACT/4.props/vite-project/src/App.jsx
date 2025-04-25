import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './nav';  // Importing 'Nav' component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav title="Rishi's Dynamic Navbar" aboutButtonText="About Us"/>  {/* Passing the 'title' prop */}
    </>
  );
}

export default App;
