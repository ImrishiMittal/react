// import styles from './App.module.css';

// const items = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];

// function Lists() {
//   return (
//     <>
//       <ul className={`list-group ${styles.border}`}>
//         {items.map((item, index) => (
//           <li key={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Lists;
import styles from './App.module.css';

const items = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];

function Lists() {
  const handleClick = (e) => {
    // Toggle background color manually
    if (e.target.style.backgroundColor === 'lightblue') {
      e.target.style.backgroundColor = 'white';
    } else {
      e.target.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <>
      <ul className={`list-group ${styles.border}`}>
        {items.map((item, index) => (
          <li key={index} className="list-group-item" onClick={handleClick}
            style={{
              cursor: 'pointer',
              transition: '0.3s',
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Lists;
