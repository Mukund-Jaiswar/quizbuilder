import Singlequiz from "./singlequiz";
import {collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const MyQuiz = () =>{
    const [data, setData] = useState([]);
    const {currentUser} = useContext(AuthContext)

    useEffect(()=>{
      const unsub = onSnapshot(collection(db,"Quiz"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc)=>{
          list.push({id: doc.id, ...doc.data() })
        });
        setData(list)
      }
      );

      return () => {
        unsub();
      };
    },[]);


    return (
      <div className="quizes-container">
        <h3>My Quizes</h3>
        <div>{data.filter( quiz => {
            if(quiz.quizowner===currentUser.displayName){
                return quiz 
            }
        }).map( quiz=> <Singlequiz {...quiz} key={quiz.id} />)}</div>
      </div>
    );
}

export default MyQuiz;