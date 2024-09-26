function Randomnum() {
    let random = Math.random()*100;  // Call the Math.random() function to generate a random number
    return (
      <div>
        <p>THE RANDOM NUMBER IS {Math.round(random)}</p>
      </div>
    );
  }
  
  export default Randomnum;
  