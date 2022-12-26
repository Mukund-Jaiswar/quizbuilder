import {BrowserRouter, Routes, Route} from "react-router-dom"
import Quizes from "./components/quizes"
import Navheader from "./components/navheader"
import GoogleIn from "./components/googlelogin"
import MyQuiz from "./components/myquiz"
import CreateQuiz from "./components/createquiz"
import StartQuiz from "./startquizsurvey"
import Modal from "./components/deletemodal"
import Sidemenu from "./components/sidemenu"
import { useContext} from "react"
import { ModalContext } from "./context/ModalContext"


function App() {

  const { isModalOpen, isMenuOpen } = useContext(ModalContext)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navheader/>}>
            {isModalOpen&&<Route index element={<Modal/>}></Route>}
            {isMenuOpen&&<Route index element={<Sidemenu/>}></Route>}
            <Route index element={<Quizes/>}></Route>
            <Route path="/GoogleIn" element={<GoogleIn/>}></Route>
            <Route path="/CreateQuiz" element={<CreateQuiz/>}></Route>
            <Route path="/MyQuizes" element={<MyQuiz/>}></Route>
          </Route>
          <Route path="/Startquiz" element={<StartQuiz/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
