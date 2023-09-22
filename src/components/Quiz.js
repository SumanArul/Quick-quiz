import React,{useState,useContext} from 'react'
import { QuizContext } from '../Helper/Context';
import { Questions } from '../Helper/QuestionBank';
function Quiz() {
  
  const [cur,setcur]=useState(null);
  const {score,setScore,setGameState} = useContext(QuizContext);

  const [currQuestion, setCurrQuestion]=useState(0);
  const[optionChosen,setOptionChosen]=useState("")

  const nextQuestion =() =>{
    
    const oldbtn=document.getElementById(cur);
    oldbtn.style.backgroundColor="white";
    setcur(null);
    if(Questions[currQuestion].answer===optionChosen)
    {
      setScore(score+1);
    }
    setCurrQuestion(currQuestion+1);
  }

  const finishQuiz=()=>{
    if(Questions[currQuestion].answer===optionChosen)
    {
      setScore(score+1);
    }
    setGameState("endScreen") 
  }
  const toggle=(id)=>{
      const newbtn=document.getElementById(id);
      newbtn.style.backgroundColor="green";
      if(cur)
      {
        const oldbtn=document.getElementById(cur);
        oldbtn.style.backgroundColor="white";
      }
      setcur(id);
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button id="1" onClick={()=>{setOptionChosen("A");toggle("1")}}>{Questions[currQuestion].optionA}</button>
        <button id="2" onClick={()=>{setOptionChosen("B");toggle("2")}}>{Questions[currQuestion].optionB}</button>
        <button id="3" onClick={()=>{setOptionChosen("C");toggle("3")}}>{Questions[currQuestion].optionC}</button>
        <button id="4" onClick={()=>{setOptionChosen("D");toggle("4")}}>{Questions[currQuestion].optionD}</button>
      </div>

      {currQuestion===Questions.length-1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
      
      <button onClick={nextQuestion}>NextQuestion</button>
      )}
    </div>
  )
}

export default Quiz