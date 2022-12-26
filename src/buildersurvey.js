import React from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import "./index.css";
import {jsonbuild, templateobj} from "./jsonquiz"
import {db} from "./firebase"
import {collection, addDoc, doc, setDoc} from "firebase/firestore"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext";

StylesManager.applyTheme("defaultV2");
function QuizBuilder() {
  const QuizCollectionRef = collection(db, "Quiz");
  const {currentUser} = useContext(AuthContext)
  jsonbuild["pages"][0]["elements"][1]["expression"] = JSON.stringify(currentUser.displayName)
  const survey = new Model(jsonbuild);
  
  survey.onComplete.add(async function (sender, options){
    const quiztakerobj = {...templateobj}
    quiztakerobj.title = sender.data.quiztitle
    let Qarray = []
    for(let i=0;i<sender.data.totalQuestions;i++){
        let anyobj = {}
        anyobj.elements = []
        let inelemobj = {
          type:"radiogroup",
          name: 'Q'+(1+i),
          title: sender.data.items[i].Question,
          correctAnswer: sender.data.items[i][sender.data.items[i].Answer]
        }
        let options = []
        options.push(sender.data.items[i].Option1)
        options.push(sender.data.items[i].Option2)
        options.push(sender.data.items[i].Option3)
        options.push(sender.data.items[i].Option4)

        inelemobj.choices = [...options]
        anyobj.elements.push(inelemobj)
        Qarray.push(anyobj)
    }
    quiztakerobj.pages = [quiztakerobj.pages[0],...Qarray]
    const ref = await addDoc(QuizCollectionRef,sender.data)
    await setDoc(doc(db, 'Takequiz',ref.id),quiztakerobj);
    //await addDoc(QuizCollectionRef,quiztakerobj)
  });
  return (<Survey model={survey}/>);
}
export default QuizBuilder;