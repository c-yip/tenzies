import './App.css';
import React, { useState } from 'react';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())
  
  function allNewDice() {
    const newDiceArray =[];
    for (let i=0; i<10; i++) {
      let num = Math.round(Math.random() * (6 - 1) + 1);
      newDiceArray.push(num)
    }
    return newDiceArray;
  }

  console.log('dice state', dice);
  
  return (
    <main>
      <div className="dice-container">
        {dice.map((die, index) =>
          <Die value="1" />
        )}
      </div>
    </main>
  );
}

export default App;
