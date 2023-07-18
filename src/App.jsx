// use nextId() to generate a new unique ID when needed
//import nextId from "./generateId";
import Dice from "./components/Dice";
import DiceRoller from "./components/DiceRoller";
import { useState } from "react";

function App() {
  const [roll, setRoll] = useState(0);

  function handleRoll(num){
    console.log(num);
    setRoll(num)
  }

  return (
    <>
      <p>Hello from the App!</p>
      <Dice
      number = { roll }/>
      <DiceRoller
      onRoll = { handleRoll }
      />
    </>
  );
}

export default App;
