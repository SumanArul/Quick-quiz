import { createContext } from "react";
export const Questions =[
    {
        prompt: "What is 1+3?",
        optionA:"24",
        optionB:"4",
        optionC:"21",
        optionD:"5",
        answer:"B"
    },
    {
        prompt: "What is 2+3?",
        optionA:"24",
        optionB:"4",
        optionC:"21",
        optionD:"5",
        answer:"D" 
    },
    {
        prompt: "What is 21+3?",
        optionA:"24",
        optionB:"4",
        optionC:"21",
        optionD:"5",
        answer:"A"
    }, 
];




export const QuizContext=createContext();
