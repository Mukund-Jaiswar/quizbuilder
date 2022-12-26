import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import { QuizContext } from "../context/QuizContext";
import { ModalContext } from "../context/ModalContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";


const Singlequiz = (props) => {
    const {id, quizdescription, quizowner, quiztitle, totalQuestions} = props

    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext)
    const {quizdispatch} = useContext(QuizContext)
    const {modaldispatch} = useContext(ModalContext)

    const handlestartquiz = async () => {
      const docRef = doc(db, "Takequiz", id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      quizdispatch({type:"START",payload:JSON.stringify(docSnap.data())})
      navigate("/Startquiz")
    }

    const deleteDocument = () => {
      modaldispatch({type:"id",payload:id})
      modaldispatch({type:"OPEN"})
    }

 /*  const deleteDocument = async () =>{
      await deleteDoc(doc(db, "Quiz", id));
      await deleteDoc(doc(db, "Takequiz", id));
    } */

    return (
      <div className="single-quiz">
        <div className="quiz-title">
            <h4>{quiztitle}</h4>
            <h4 className="total-question">Questions:{totalQuestions}</h4>
        </div>
        <div className="quiz-body">
          <p className="quiz-desc">{quizdescription}<br/><span>by {quizowner}</span></p>
        </div>
        <div className="quiz-bottom">
            <div className="quiz-start" onClick={handlestartquiz}>Start Quiz</div>
            {
              (currentUser && currentUser.displayName===quizowner)?
              <div className="quiz-delete" onClick={deleteDocument}>Delete</div>:
              <div></div>
            }
        </div>
      </div>
    );
}

export default Singlequiz;