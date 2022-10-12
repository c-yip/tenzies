import './App.css';
import React, { useState } from 'react';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())
  
  function allNewDice() {
    const newDiceArray =[];
    for (let i=0; i<10; i++) {
      const num = Math.round(Math.random() * (6 - 1) + 1);
      const dieObject = {
        value: num,
        isHeld: false
      }
      newDiceArray.push(dieObject);
    }
    return newDiceArray;
  }

  function rollDice() {
    // generate new array of nums
    const newDiceArray = allNewDice();
    // set dice state to that new array
    setDice(newDiceArray);
  }
  
  const diceElements = dice.map((die, index) => <Die key={index} value={die.value} />);
  console.log(dice)
  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      {<button type='button' className='roll-btn' onClick={rollDice}>Roll</button>}
    </main>
  );
}

export default App;
