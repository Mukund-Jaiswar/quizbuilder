import Singlequiz from "./singlequiz";
import {collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function Quizes() {

    const [data, setData] = useState([]);

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

    console.log(data)

    return (
      <div className="quizes-container">
        <h3>All Quizes</h3>
        <div>{data.map( quiz=> <Singlequiz {...quiz} key={quiz.id} />)}</div>
      </div>
    );
}

export default Quizes;