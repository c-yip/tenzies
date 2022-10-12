import './App.css';
import Die from './components/Die'

function App() {
  function allNewDice() {
    const newDiceArray =[];
    for (let i=0; i<10; i++) {
      let num = Math.round(Math.random() * (6 - 1) + 1);
      newDiceArray.push(num)
    }
    return newDiceArray;
  }

  console.log(allNewDice());
  
  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="10" />
      </div>
    </main>
  );
}

export default App;
