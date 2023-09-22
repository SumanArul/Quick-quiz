import React,{useContext} from 'react'

import { QuizContext } from '../Helper/Context';
import '../App.css'
import { Questions } from '../Helper/QuestionBank';

function EndScreen() {
  const {score,setScore,setGameState}=useContext(QuizContext);

  const restartQuiz =() =>{
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h2>{score}/{Questions.length}</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen