import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";
import { CreateQuizIcon, LoginIcon, MyQuizIcon, QuizIcon, XIcon } from "../icons";
import { NavLink , useNavigate} from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";


const Sidemenu = () =>{

    const {currentUser, dispatch} = useContext(AuthContext)
    const {modaldispatch} = useContext(ModalContext)
    const navigate = useNavigate();

    const signOutUser = () => {
        signOut(auth).then(()=>{
          dispatch({type:"LOGOUT"})
          navigate("/")
        })
    }

    const closemenu = () => {
        modaldispatch({type:"menu"})
    }

    return(
        <div className="modal-container-sidemenu">
          <div className="sidemenu">
            <div className="xicon"><span onClick={closemenu}><XIcon/></span></div>
            <div className="emptydiv"></div>
            {
                currentUser ?
                <>
                    <h4><NavLink to="/" onClick={closemenu}><span><QuizIcon/></span>Quizes</NavLink></h4>
                    <h4><NavLink to="/CreateQuiz" onClick={closemenu}><span><CreateQuizIcon/></span>CreateQuiz</NavLink></h4>
                    <h4><NavLink to="/MyQuizes" onClick={closemenu}><span><MyQuizIcon/></span>MyQuizes</NavLink></h4>
                    <h4 onClick={signOutUser}><NavLink id="logout"><span><LoginIcon/></span>LogOut</NavLink></h4>
                </>:
                <>
                    <h4><NavLink to="/" onClick={closemenu}><span><QuizIcon/></span>Quizes</NavLink></h4>
                    <h4><NavLink to="/GoogleIn" onClick={closemenu}><span><LoginIcon/></span>Login</NavLink></h4>
                </>
            }
          </div>
        </div>
    )
}

export default Sidemenu;