import React from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import "./index.css";
import { QuizContext } from "./context/QuizContext";
import { useContext } from "react";

StylesManager.applyTheme("defaultV2");
function StartQuiz() {

  const {currentQuiz} = useContext(QuizContext);
  const survey = new Model(currentQuiz);
  
  return (<Survey model={survey}/>);
}
export default StartQuiz;