import { useState } from 'react';
import styles from './App.module.css';

function Lists() {
  // 1. items = list of strings shown
  // 2. setItems = function to update items
  const [items, setItems] = useState([
  ]);

  // 3. inputValue = current text in input box
  // 4. setInputValue = function to update inputValue
  const [inputValue, setInputValue] = useState('');

  // 5. function to run when input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // update inputValue with what user typed
  };

  // 6. function to run when user presses Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setItems([...items, inputValue]); // add inputValue to list
      setInputValue(''); // clear input box
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-3">Todo List</h2>

      {/* 7. Input box to type new list item */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Type something and press Enter"
        value={inputValue} // shows current input
        onChange={handleInputChange} // updates state as you type
        onKeyDown={handleKeyPress} // checks for Enter key
      />

      {/* 8. List rendering */}
      <ul className={`list-group ${styles.border}`}>
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
