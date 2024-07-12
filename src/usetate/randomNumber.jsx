import React, { useState } from 'react';

const RandomNumber = () => {
  const [numbers, setNumbers] = useState([]);

  const addRandom = () => {
    console.log(numbers);

    const randomNumber = Math.floor(Math.random() * 100);

    setNumbers([...numbers, randomNumber]);
  };
  return (
    <div>
      <h1>my numbers</h1>
      <button onClick={addRandom}>add</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomNumber;
