import QuizReducer from "./QuizReducer";
import { useReducer, createContext } from "react";

const Intial_state = {
    currentQuiz: {}
}

export const QuizContext = createContext(Intial_state);

export const QuizContextProvider = ({ children }) => {
    const [state, quizdispatch] = useReducer(QuizReducer, Intial_state);

    return(
        <QuizContext.Provider value={{currentQuiz: state.currentQuiz, quizdispatch}}>
            {children}
        </QuizContext.Provider>
    )
}