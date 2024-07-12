import React, { useState } from 'react';
import './app.css';
import RandomNumber from './usetate/randomNumber';
import TodoParent from './todo/Todoparent';

const App = () => {
  const [count, setCount] = useState(10);

  const [isDark, setIsDark] = useState(false);

  console.log(count);
  console.log(setCount);

  //   let count = 10;

  const countHendler = () => {
    //   count = count + 1;
    //   console.log(count);
    // //! ძველ ვერსიას ვშლით ამით და ეს არის პირველი ვარიანტი
    // let newconut = 100;
    // new setCount(newconut);
    //! ძველი ვერსსის განხლება ერერთი გზა
    // setCount(count + 1); // 10  10+1=11
    // setCount(count + 2); // 10  10+2=12

    //! პერვორამნსის მხრივ ეს უკეთსია

    setCount((perv) => perv + 1); // 10 + 1 = 11

    setCount((perv) => perv + 2); // 11 + 2 = 13

    //? დარქმოდი აქედან

    setIsDark((perv) => {
      console.log(perv);
      return !perv;

      console.log(!perv);
    });
  };

  return (
    <>
      <div className={isDark ? 'divdark' : 'divlighth'}>
        <h1 onClick={countHendler} className={isDark ? 'dark' : 'lighth'}>
          hello world
        </h1>
        <div className={`${'box'} ${isDark ? 'dark' : 'lighth'}`}>
          <h1 onClick={countHendler}>{count}</h1>
        </div>
      </div>
      <RandomNumber />
      <TodoParent />
    </>
  );
};

export default App;
