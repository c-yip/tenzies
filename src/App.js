import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())
  
  function generateNewDie() {
    return {
      value: Math.round(Math.random() * (6 - 1) + 1),
      isHeld: false,
      id: nanoid(),
    }
  }
  
  function allNewDice() {
    const newDiceArray =[];
    for (let i=0; i<10; i++) {
      newDiceArray.push(generateNewDie());
    }
    return newDiceArray;
  }

  function rollDice() {
    setDice(prev => 
      prev.map(die => {
        return !die.isHeld ? 
          generateNewDie() :
          die
      })
    )
  }

  function holdDice(id) {
    setDice(prev => prev.map(die => {
      return id === die.id ? 
      {...die, isHeld: !die.isHeld} : 
      die
    }))
  }
  
  const diceElements = dice.map((die, index) => 
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  );

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
