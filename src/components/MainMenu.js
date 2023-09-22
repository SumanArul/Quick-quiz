import React,{useContext} from 'react'
import { QuizContext } from '../Helper/Context'

import '../App.css'
import pics from './j1.png'


function MainMenu() {
  const {gameState,setGameState}=useContext(QuizContext)
  return (
    <div className="Menu">
      <img src={pics}></img>
      <br></br>
      <br></br>
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
