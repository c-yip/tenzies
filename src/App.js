import './App.css';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import Die from './components/Die';
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  
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

  useEffect(() => {
    const checkIfWon = dice.every(die => die.value === dice[0].value && die.isHeld);
    if (checkIfWon) {
      setTenzies(true);
      console.log('you won!', tenzies);
    } 
  }, [dice])
  
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
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Your goal is to roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button type='button' className='roll-btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
