import { useState } from 'react';
import styles from './App.module.css';

function Lists() {
  const [items, setItems] = useState([  ]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={styles.todoBox}>
      <h2 className={styles.heading}>Todo List</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Type something and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />

      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className={`list-group-item ${styles.listItem}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
