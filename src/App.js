import './App.css';
import React, {useState} from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helper/Context';
function App() {
  const [gameState,setGameState]= useState("menu");
  const[score, setScore] =useState(0)

  return (
    <div className="App">
      <h1>Welcome to the Quiz Contest</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState==="menu" && <MainMenu/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="endScreen" && <EndScreen/>}
      </QuizContext.Provider>

    </div>
  );
}

export default App;